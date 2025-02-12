---
title: Using chroots as simple containers
date: 2024-06-26
---

Please note that what I am about to do isn't actually containerization
or isolation. It merely separates *trusted* code such that it would
generally not pollute the host system. Chroot is generally not a
security measure; for example, processes inside the chroot could easily
escape with `/proc/`*`x`*`/root` for a PID *x* that runs outside the
chroot.

Often times I want to install a program that is not available in my
current distribution (e.g. the Soju IRC bouncer is not available on
Debian Bookworm, but I want to use a distribution-packaged version
instead of running `go build` myself because I want to receive updates),
or perhaps I want to run something like `rustup` without the fear of
polluting my system. But I don't want to use Docker or LXC because they
feel too complicated.

I ended up creating [Alpine Linux](https://alpinelinux.org) chroots.
Specifically, Alpine Linux Edge, because the `edge/testing` repository
is huge and frequently updated. There's an article called [Alpine Linux
in a chroot](https://wiki.alpinelinux.org/wiki/Alpine_Linux_in_a_chroot)
on the Alpine Linux wiki that provided the steps that I use in my
scripts. (The official
[alpine-chroot-install](https://github.com/alpinelinux/alpine-chroot-install/)
scripts exist but haven't been updated for quite a while.)

## [The rxchroot scripts](https://git.runxiyu.org/rxchroot)

Check the Git repository linked above for the complete set of scripts;
here is a short explanation from excerpts of the script.

The first step, of course, is to create the chroot. Basically:

```sh
umask 022 # or something else that ensures unprivileged users could access the chroot
curl -LO "https://dl-cdn.alpinelinux.org/alpine/edge/main/${arch}/APKINDEX.tar.gz"
tar xvf APKINDEX.tar.gz
curl -LO "https://dl-cdn.alpinelinux.org/alpine/edge/main/${arch}/apk-tools-static-$(sed -n '/P:apk-tools-static/{n;p;}' APKINDEX | cut -d ':' -f 2).apk"
tar -xzf apk-tools-static-*.apk
./sbin/apk.static -X https://dl-cdn.alpinelinux.org/alpine/edge/main -U --allow-untrusted -p "${chroot_dir}" --initdb add alpine-base
cp -L /etc/resolv.conf ${chroot_dir}/etc/
mkdir -p "${chroot_dir}"/etc/apk
echo "https://dl-cdn.alpinelinux.org/alpine/edge/main" > "${chroot_dir}"/etc/apk/repositories
echo "https://dl-cdn.alpinelinux.org/alpine/edge/community" >> "${chroot_dir}"/etc/apk/repositories
echo "https://dl-cdn.alpinelinux.org/alpine/edge/testing" >> "${chroot_dir}"/etc/apk/repositories
```

Every time the chroot needs to be used, some special directories must be
mounted. Don't double-mount though as that often causes issues.

```sh
mount -o bind /dev "${chroot_dir}/dev"
mount -t proc none "${chroot_dir}/proc"
mount -o bind /sys "${chroot_dir}/sys"
```

Then just enter the chroot:

```sh
chroot "${chroot_dir}" /bin/ash -l
```

And perhaps install stuff:

```sh
apk add build-base soju vim
```

I'm running on a Debian host, and perhaps I want to start services in
the Alpine chroot with systemd:

```ini
# alpine.service ###############################################

[Unit]
Description=Alpine chroot mounts
Wants=network-online.target
After=network-online.target

[Service]
Type=oneshot
RemainAfterExit=true
User=root
Group=root
RuntimeDirectory=/alpine
ExecStart=/root/rxchroot/alpine-chroot-activate /alpine
ExecReload=/root/rxchroot/alpine-chroot-activate /alpine
ExecStop=/root/rxchroot/alpine-chroot-deactivate /alpine

[Install]
WantedBy=multi-user.target

# soju.service #################################################

[Unit]
Description=soju in an Alpine chroot
Requires=alpine.service
After=alpine.service

[Service]
Type=simple
User=root
Group=root
# Fix the userspec to match the Alpine UID/GUID
ExecStart=/sbin/chroot --userspec=101:102 /alpine /usr/bin/soju
ExecReload=/bin/kill -HUP $MAINPID
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Since a chroot doesn't have its own kernel and all system calls pass
through the host kernel, network services open ports as if they just run
in the host system.

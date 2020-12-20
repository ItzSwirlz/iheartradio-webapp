# iheartradio-webapp
Election Webapp for iHeartRadio

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/iheartradio)

[![iheartradio](https://snapcraft.io/iheartradio/badge.svg)](https://snapcraft.io/iheartradio)
[![iheartradio](https://snapcraft.io/iheartradio/trending.svg?name=0)](https://snapcraft.io/iheartradio)

# What is this?
This is a Node.js JavaScript application, but it is NOT a NPM package. This is solely for desktop use purposes.

In this application, we use the [Electron Framework](https://github.com/electron/electron) to turn a webpage
into a webapp.

Like Spotify, you will be able to access all of iHeartRadio for Linux and MacOS.

Why not Windows? [Hm. I wonder why.](https://www.microsoft.com/en-us/p/iheartradio/9wzdncrfj223?activetab=pivot:overviewtab)

# Building
We have the normal npm build and a [Jakefile](https://github.com/jakejs/jake) if you wish (though I won't QA the Jakefile much).

For this example we will just use npm. To initially install the dependencies:

```shell
npm install
```

And it is good practice in my opinion to always check to see if any of the ~431 dependencies have updates.

```shell
npm audit fix
```

To run the webapp, you can run either:
```shell
npm start OR npm run run
```

Now we can start building. We have several build scripts but here are the most important. 

Big thanks to those who work with the [electron-builder](https://github.com/electron-userland/electron-builder) to make this a lot more easier :) 

By default these build for x86/64-bit general systems such as amd64. To build an AppImage and [Snap](https://snapcraft.io), you can run:

```shell
npm run build
```

To build for Macintosh/Mac OS systems (yes there is support, this will generate a DMG):

```shell
npm run build-mac
```

# Building for other Architectures
For the sake of not wasting my time with 32-bit since support for everywhere is slowly dropping, I will only support x86 and Raspberry-Pi arm64. However electron-builder currently is doing weird stuff with arm64 builds which it shouldn't (it's setting up VM's to build which is unneccessary), so for now we will be using the 32-bit arm7l/armhf until I work with the devs to fix this problem :)

We can also use this for testing purposes. To build for armv7l/armhf:

```shell
npm run build-armv7l
```

I'm pretty sure Mac's dont run on ARM devices so the above only builds AppImages and Snaps.

# Installing
This install script is only for linux. This is because the resulting build is a bunch of libraries which has to be installed to many locations so I simplified it and made a decent install script for it. For Mac OS/DMG's it's already bundled in so you don't have to stress about it. You can run

```shell
npm install-linux
```

and that'll take care of it for you.

# Contributing
Help is LOVELY appreciated! Fork and submit a PR. I look forward to seeing you.

# License
This is licensed under the [GNU General Public License v3+](https://github.com/ItzSwirlz/iheartradio-webapp/blob/main/LICENSE). You probably already know what it is but for the ones who are new, I'll give you the usual lecture/preamble.

```
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
```

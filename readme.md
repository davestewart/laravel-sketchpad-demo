# Laravel Sketchpad Demo

## Overview

This project provides a stripped-down Laravel sandbox with which to live-develop the Sketchpad package.

The actual Sketchpad repository is hosted *externally* to this respository, and must be downloaded separately, then symlinked.

Once set up, and when all watch processes are running:

- the site is served
- changes made in the Sketchpad respository will be automatically propagated to this project
- the browser will automatically reflect changes

This double-repository approach allows the core Sketchpad repository to be hosted on Packagist as a standalone package, whilst providing a non-coupled way to test the package in a typical Laravel installation.


## Setup

### Download and set up repositories

Download this and the Sketchpad respositories to the following folder structure:

```
+- Sketchpad
    +- sketchpad
    +- sketchpad-demo
```

From `sketchpad-demo` run `composer install` to download the required dependencies.

Once downloaded, using the terminal, symlink the `sketchpad` respository to the correct vendor folder:

```
cd sketchpad-demo
ln -s ../sketchpad /vendor/davestewart/sketchpad
```

### Set up the JavaScript copy process

From the support folder, install the NPM dependencies:

```
cd support
npm install
```

### Set up local hosting

To serve the Sketchpad Demo site, set up a new site using your preferred hosting solution (Homestead, AMPPS, etc).

As a suggestion, set up something like `http://sketchpad.dev`, which should link to `sketchpad-demo/public`.

Once set up, you should now be able to view the working sketchpad demo at:

```
http://sketchpad.dev/sketchpad
```

Change this URL if you're using Homestead or something else.

### Set up Sketchpad for the first time

The first time you access the `sketchpad` URL in the browser, Sketchpad will detect if it has been configured, and will walk you through the process, prompting you to run any required terminal commands.


## Development

### Watch files in the original Sketchpad respository

You're now ready to continue development on the original Sketchpad package, and see the results in the browser.

With the site running, you will want to enable file watching on the symlinked package so that any updates made to the Sketchpad source files are copied to the Demo project's `public/vendor` folder.

This project's Gulp is already set up to do this; all you need to do is run it:

```
cd support
gulp
```

Once you run the gulp watch tasks in the main Sketchpad repository, any updates to the source files will be automatically compiled and copied, and the browser will refresh:

```
      update                compile                     copy and refresh
┌────────┴────────┐    ┌───────┴───────┐    ┌──────────────────┴─────────────────┐

sketchpad/resources -> sketchpad/publish -> sketchpad-demo/public/vendor/sketchpad

└───────────────────┬──────────────────┘ └─────────────────────┬─────────────────┘
                 package                                      demo
```

> TODO: add in options for browsersync and live reload

> browsersync will need to proxy the site URL, and then will be accessed on localhost:3000

### Begin development


---
title: Getting Started
date: 2019-11-28T14:11:13.000Z
---
https://github.com/SU-SWS/decanter/issues/578

## System Requirements

To build and deploy code, you must have the following installed on your system:

* [NodeJS](https://nodejs.org/en/)
* [Webpack](https://webpack.js.org/)
* [Grunt](https://gruntjs.com/)
* [KSS](https://warpspire.com/kss/)
* [Git](https://git-scm.com/)

### Installation

Most of these tools need only to be installed globally, so if you already have them installed on your system, you are ready to use or add to the toolset.

You may refer to the respective links above for installation instructions for each, but below is a brief overview for each as well:

### Node

Visit Node's website to download the [installer](http://nodejs.org/).

### Webpack

`npm install -g webpack`

### Grunt

The only requirement for Grunt is Grunts CLI(Command Line Utility).

If you don't already have that installed, install globally, this is not project specific.
In NPM we do so with the -g flag.

```
npm install -g grunt-cli
```

### KSS

KSS is a documentation syntax for CSS that's intended to have a syntax that's readable
by humans and machines. We use KSS to create our style guide.

If you don't already have that installed, install globally, this is not project specific.

```
npm install -g kss
```

### Troubleshooting

* If you have trouble installing any of the tools, you may need to use the sudo command.
* If you run into any issues with some of the tasks run, `npm rebuild` and try again.
* Make sure that git is installed globally as some bower packages require it to be fetched and installed.

## Development Workflow

### One-time Setup

The following steps need to be performed once to get your local copy of Decanter up and running:

* `cd` to the local directory where you keep your git repos
* `git clone https://github.com/SU-SWS/decanter.git`
* `cd decanter`
* `npm install -g kss`
* `npm install` to install your remaining dependencies

## Workflow

### Starting Your Environment

* Decanter comes with a built-in development server. After installing the required packages with npm you should be ready to go. Simply run `npm run dev` and that command will fire up a server and a watch task for you. Your default browser should open up at `localhost:9000` and with the watch task running you should be able to start editing and saving files to have them compile. 

### Development

Development work is done on a feature branch, which is then peer reviewed and merged into master.

* `cd decanter`
* `npm run build` to confirm it is building
* `npm run dev` to start the server and watch task
* `git checkout master` to ensure that you have the most current branch
* `git checkout -b [new-branch-name]` to create a new branch on which to work
* After you commit your final changes to the repository, create a pull request in Github for review.

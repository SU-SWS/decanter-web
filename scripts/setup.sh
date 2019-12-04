#!/usr/bin/env bash

brew install git-lfs
nvm use
npm install
npm install netlify-cli -g
netlify login
read -p "Press enter to continue"
netlify --telemetry-disable
netlify link --name elegant-poitras-87214a
netlify plugins:install netlify-lm-plugin
netlify lm:install
netlify lm:setup

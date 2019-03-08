#!/bin/sh

ionic build --prod -- --base-href https://cutie-next.aenism.com/ && npx angular-cli-ghpages --branch=gh-pages --dir=www --cname=cutie-next.aenism.com
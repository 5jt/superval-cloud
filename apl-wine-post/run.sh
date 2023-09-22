#!/usr/bin/env zsh
VERSION=3.0

docker run -d -p 3000:3000 "node-rev-post:$VERSION"
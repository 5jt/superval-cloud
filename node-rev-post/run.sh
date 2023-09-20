#!/usr/bin/env zsh
VERSION=2.0

docker run -d -p 3000:3000 "node-rev-post:$VERSION"
#!/usr/bin/env zsh

curl --include \
	--request POST 'http://localhost:3000/reverse' \
	--header 'Content-Type: plain/text' \
	--data-binary '@input_string.txt'
#!/usr/bin/env zsh

curl --include \
	--request POST 'http://localhost:3000/reverse' \
	--header 'Content-Type: text/plain' \
	--data '@input_string.txt'
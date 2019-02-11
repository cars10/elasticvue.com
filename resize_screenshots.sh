#!/bin/bash
cd static/images/screenshots

for i in *.jpg; do
    printf "Resize $i\n"
    convert "$i" -resize 700 -set filename:area "%t_thumb" %[filename:area].jpg
done
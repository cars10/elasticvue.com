#!/bin/bash
cd static/images/screenshots

for i in *.png; do
    printf "Resize $i\n"
    convert "$i" -resize 350 -set filename:area "%t_thumb" %[filename:area].png
done
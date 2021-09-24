#!/bin/bash

DENY_LIST=(
    ".forestry"
    ".git"
    ".github"
    "Dockerfile"
    "docker-compose.yml"
)
JEKYLL_DEST=".forestry/jekyll/_i18n/en/_posts/documentation/products/"
echo "LISTING .forestry folder"
ls -la .forestry

for item in *
do
    is_denied=0

    for deny_item in ${DENY_LIST[@]}
    do
        if [ ${item} = ${deny_item} ]
        then
            is_denied=1
        fi
    done
    
    if [ ${is_denied} = 1 ]
    then
        echo "[!] ${item} file is not allowed to use such Symbolic Link"
        continue
    fi
    
    ln -s $(pwd)/${item} $(pwd)/${JEKYLL_DEST}${item}
    echo "[*] $(pwd)/${item} <-- $(pwd)/${JEKYLL_DEST}${item}"
done

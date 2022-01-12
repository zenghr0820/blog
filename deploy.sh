#!/usr/bin/env sh

# throw error
set -e

if [[ -z "$CODING_TOKEN"  || -z "$GITHUB_TOKEN" ]]; then
  exit 0
fi

# build static
yarn run build
cd .vuepress/dist
echo "blog.zenghr.cn" > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f "https://travis-ci:$GITHUB_TOKEN@github.com/zenghr0820/blog.git" master:gh-pages

cd -

rm -rf .vuepress/dist

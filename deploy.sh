#!/usr/bin/env sh

# throw error
set -e

if [[ -z "$CODING_TOKEN"  || -z "$GITHUB_TOKEN" ]]; then
  exit 0
fi

# build static
npm run build
cd .vuepress/dist
echo "blog.zenghr.cn" > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f "https://travis-ci:$GITHUB_TOKEN@github.com/zenghr0820/zenghr0820.github.io.git" master

cd -

rm -rf .vuepress/dist

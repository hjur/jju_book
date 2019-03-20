# 명령어 : .\publish_jju-book.sh

# 문서 수정한거 커밋
git checkout master

git add .
git commit -m "update script"

# 빌드 브랜치에 머지 > 빌드 > 커밋
git checkout gh-pages
git merge master

gitbook build

cp -R _book/* .
rm -r _book/

git add .
git commit -m "build docs"
git push origin gh-pages
 
 # 다시 문서 수정 브랜치로
git checkout master
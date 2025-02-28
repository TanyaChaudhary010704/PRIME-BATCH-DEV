.gitignore
git init(in perticular folder)
git add <file1path> <file2path> 
git commit -m 'title' -m 'description'
git push
  * if you have not configured a remote branch
  ** git remote add repoName repoLink
  
  * if your branch does not exists on the remote server
  ** git push --set-upstream repoName branchName

->package.json contains dependencies which we install
->package-lock.json contains dependencies of dependencies
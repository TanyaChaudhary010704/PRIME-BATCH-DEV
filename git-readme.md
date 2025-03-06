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

React

common js format
  module.exports = temp;
  const temp = require("./);
es modules 
  export temp;
  import temp from "./";

import React from "react";
import ReactDom from "react-dom";    

->create react app and render it
->add "type":"module", in package.json and script tag
->install a bundler - parcel,vite
to start ->npx parcel index.html
dist contains all the output files 
source map - maps our js file 

import and export methods
**Default Methods**
->import Card from "./components/card.js";
->export default Card;

**vite**
->npm create vite@latest 

classbased components and functional components
dev dependencies used in development
-> npm run dev or npx vite
in package.json if we change dev to some other name then we have to run -> npm run name
dev build preview lint

when redirecting to page by anchor tag -> auto refresh website and this will load all files again which will not work without internet

to avoid refreshing , use Link tag as -> <Link to="/">Home Link</Link>





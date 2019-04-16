
First of all you'll need the latest version of node.js, so please make sure you have it.

Second one is about gulp. In this project using gulp4 which is not released officially yet. So if you're working with previous version of gulp you'll need to uninstall it globally:

  - npm uninstall gulp -g
  - npm install -g gulp-cli


To make changes, first step you should make is to run "npm install" command from command line. Below you'll find a useful commands that should help to run the tasks do you need.

# Task Running

  - gulp dev - run the local server to see the changes immediately
  - gulp - compile the project without a local server
  - set NODE_ENV=production && gulp - for getting a production ready source; It's important that you set the NODE_ENV enviroment for make sure that the source-maps wouldn't be added to production code

# Js adding

  - es6 module import/export used, so add your components into src/js/components folder 
  - if you need to add some libs put this into src/js/libs folder; next step add the name of this libs into gulpfile.js ( on the root ) in needed order; for instance, if it's depends on jQuery libs then it should be added after jquery: ...['src/js/libs/jquery-3.3.1.min.js', 'src/js/libs/your-libs-name.js',...]

# SCSS adding

  - add your scss file into the src/scss folder; make sure you specified an adding file in the styles.scss using @import "path/filename"

# Html adding

  - html template located in src/templates folder; you should be familiar with nunjucks template engine; for a sample, you can examine already created instances



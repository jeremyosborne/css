var express = require('express');
var path = require('path');
var sass = require('node-sass');

var app = express();

app.set('port', 8080);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(sass.middleware({
      src: __dirname+'/scss',
      includePaths: [__dirname+'/scss/partials'],
      dest: __dirname+'/public/',
      debug: true
}));
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});



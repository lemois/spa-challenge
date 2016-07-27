var koa = require('koa');
var app = koa();

function sleep(msec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, msec);
  });
}

app.use(require('koa-static')('.', {prefix: 's'}));

app.use(function *(){
  if (this.path == '/random') {
    yield sleep(2000);
    this.body = {
      value: Math.floor(Math.random() * 1000)
    };
  } else {
    this.status = 404;
  }
});

app.listen(3080);

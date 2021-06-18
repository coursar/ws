const http = require('http');
const os = require('os');
 
// function -> for every request -> response
const server = http.createServer((req, res) => {
  const user = os.userInfo();
  const data = JSON.stringify(user);
 
  res.setHeader('Content-Type', 'application/json');
  res.end(data);
});
 
server.listen(9999);


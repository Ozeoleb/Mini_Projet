import * as si from 'systeminformation';
//const si = require('systeminformation');

const result=[];
Promise.all([
    si.cpu(function(data){
        result.push(data);
    }),
    si.system(function(data){
        result.push(data);
    }),
    si.mem(function(data){
        result.push(data);
    }),
    si.osInfo(function(data){
        result.push(data);
    }),
    si.currentLoad(function(data){
        result.push(data);
    }),
    si.processes(function(data){
        result.push(data);
    }),
    si.diskLayout(function(data){
        result.push(data);
    }),
    si.networkInterfaces(function(data){
        result.push(data);
    })]).then((result)=>{
        console.log(result);
    });
 

//const http = require('http');
const hostname = 'localhost';
const port = 8080;

//const server = http.createServer((req, res) => {
//  res.writeHead = (200, {'Content-Type': 'application/json'});
//  res.write({'key':'value'});
//  res.end('Hello World!\n');
//});

//const http = require('http');
//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/api/v1/sysinfo`);
//});
const http = require('http');
const requestListener = function (req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(result));
    res.end('Hello World!\n');
}

const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/api/v1/sysinfo`);
});

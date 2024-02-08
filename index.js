const express = require("express");
require('./src/config')

const routes = require('./src/routes')
const server = express();

server.use(express.json());
server.use('/api/v1',routes);

server.listen(5000,()=>{
    console.log("server is calling in 5000 port")
})
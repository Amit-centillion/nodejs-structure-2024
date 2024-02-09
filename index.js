const express = require("express");
require('./src/config')
const cronJob = require('./src/utils/cron/user-cron')
const routes = require('./src/routes')
const server = express();

server.use(express.json());
server.use('/api/v1',routes);

server.listen(5000,()=>{
    console.log("server is calling in 5000 port")
})
process.on('SIGINT', () => {
  cronJob.stop();
  process.exit();
});
const liveServer = require("live-server");
const path = require("path");

const PORT = 8000;
const ROOT_DIR = "/src/pages";
 
const params = {
    port: PORT,
    host: "localhost",
    root: path.resolve(__dirname) + ROOT_DIR,
    open: true,
    ignore: 'scss,*.pug',
    logLevel: 0,
};

liveServer.start(params);

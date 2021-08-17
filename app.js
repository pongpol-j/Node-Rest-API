const app = require("express")();
const port = 8001;
const apiRouter = require('./router');
app.use('/admin', apiRouter);
app.listen(port, function () {
    console.log("Starting node.js on port " + port);
});

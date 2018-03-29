module.exports = (req, resp, next) =>{
    resp.header('Access-Control-Allow-Origin', '*');
    resp.header('Access-Control-Allow-Methods', 'GET, POST PUT, OPTIONS, PATCH, DELETE');
    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}
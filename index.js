let Elastic = require('./elastic');
let { checkUri, checkIndex, checkData } = require('./validation');
let logger;

const init = (uri, index) => {
    if(checkUri(uri) && checkIndex(index)) {
        logger = new Elastic(uri, index);
    }
};

const info = (data) => {
    if(checkData(data)) {
        logger.addDocument(data, false);
    }
};

const error = (data) => {
    if(checkData(data)) {
        logger.error(data, true);
    }
};

module.exports = {
    init: init,
    info: info,
    error: error
};
let logger = require('./elastic');
let { checkUri, checkIndex, checkData } = require('./validation');


const init = (uri, index) => {
    if(checkUri(uri) && checkIndex(index)) {
        return logger.init(uri, index);
    }
};

const info = (data) => {
    if(checkData(data)) {
        return logger.addDocument(data, false);
    }
};

const error = (data) => {
    if(checkData(data)) {
        return logger.addDocument(data, true);
    }
};

module.exports = {
    init: init,
    info: info,
    error: error
};
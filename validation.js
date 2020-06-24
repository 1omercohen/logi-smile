const validate = require("validate.js");

const checkUri = (uri) => {
    if(!validate.isEmpty(uri)) {
        if(validate.isString(uri) || validate.isArray(uri))
            return uri;
        else
            return throw new Error("Uri must be string or array of strings");
    }
    return throw new Error("Invalid URI");
};

const checkIndex = index => {
    if(!validate.isEmpty(index) && validate.isString(index)) {
        return true;
    }
    return throw new Error("index must be string and not be empty");
};

const checkData = data => {
    if(!validate.isEmpty(data) && validate.isObject(data) && !validate.isArray(data)) {
        return true;
    }
    return throw new Error("data must be object and not empty");
};

module.exports = {
    checkUri: checkUri,
    checkIndex: checkIndex,
    checkData: checkData
}
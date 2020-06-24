const { Client } = require('elasticsearch');
const type = "_doc";
let client;
let elasticIndex;

const init = async (uri, index) => {
    try {
        let connect = {};
        if (typeof uri === "string")
            connect.host = uri;
        else
            connect.hosts = uri;
        client = new Client(connect);
        elasticIndex = index;
        const IndexExists = await client.indices.exists({index: index});
        if (!IndexExists) {
            await client.indices.create({index: index})
        }
        return true;
    }catch (error) {
        return new Error(error.message);
    }
}


const addDocument = async (obj, isError) => {
    try {
        obj["@timestamp"] = new Date();
        obj.severity = isError ? "error" : "info";
        await client.create({index: this.index, type: this.type, body: obj});
    }catch (error) {
        return new Error(error.message);
    }
}


module.exports = {
    init: init,
    addDocument: addDocument
};
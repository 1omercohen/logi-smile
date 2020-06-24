const { Client } = require('elasticsearch');

class Elastic {
    constractor(uri, index) {
        let connect = {};
        if(typeof uri === "string")
            connect.host = uri;
        else
            connect.hosts = uri;
        this.client = new Client(connect);
        this.index = index;
        this.type = "_doc";
        this.client.indices.exists({index: index})
            .then(IndexExists => {
                if(!IndexExists){
                    return this.client.indices.create({index: index})
                }
            })
            .catch(error => {
                throw new Error(error.message);
            })
    }

    addDocument(obj, isError) {
        try {
            obj["@timestamp"] = new Date();
            obj.severity = isError ? "error" : "info";
            this.client.create({index: this.index, type: this.type, body: obj});
        }catch (error) {
            throw new Error(error.message);
        }
    }

}

module.exports = Elastic;
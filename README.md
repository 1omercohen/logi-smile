 # ![Logi Smile Logo](https://itiewele.sirv.com/Images/logi.png) Logi Smile

logger writes to Elasticsearch, Javascript Library

## Installation


```bash
npm i --save logi-smile 
```

## Usage

```nodejs
const logger = require('logi-smile');

logger.init('http://localhost:9200', "full index name");

logger.info({ message: "", fileName: "", functionName: "", actionName: "", processName: "", etc...})

logger.error({ message: "", fileName: "", functionName: "", actionName: "", processName: "", etc...})
```


## License
[MIT](https://choosealicense.com/licenses/mit/)

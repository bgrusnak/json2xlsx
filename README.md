# json2xlsx
_Lightweight in browser `.xlsx` exporter._

### How it use

```sh
import json2xlsx from 'json2xlsx';

let xlsx = {
  filename: 'AwesomeFile',
  sheets: [{
    name:"First sheet",
    data: [
      [{
        value: 'Line1',
        type: 'string'
      },{
        value: 'Line2',
        type: 'string'
      }, {
        value: 1000,
        type: 'number'
      }]
    ]
  },
  {
    name:"Second sheet",
    data: [
      [{
        value: 'First',
        type: 'string'
      },{
        value: 'Second',
        type: 'string'
      }]
    ]
  }]
};

json2xlsx(xlsx);
```

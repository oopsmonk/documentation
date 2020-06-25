# Chronicle API reference

**This API provides a simple and consistent way to get transactions from a Chronicle permanode.**

:::warning:
This API is in beta and subject to change. We do not recommend using this API in production applications.
:::

## Headers

All requests must include a header that defines at least the API version.

### Versioning

When backwards-incompatible changes are made to the API, a new version is released. The current version is 1.

To set the API version on a specific request, send an `X-IOTA-API-Version` header.

### Content type

All resources expect and return JSON response bodies. [Error responses](#error-responses) will also be sent as JSON.

In practice, this means that you'll always get a response with a `Content-Type` header set to `application/json`.

### Authentication 

Chronicle does not support authentication yet.

## Base URL

All requests to this API should be sent to the URL of a Chronicle instance.

If you don't already have a service to connect to, we recommend [running your own](root://chronicle/1.1/overview.md).

Running your own node has many benefits, of which the most important is that you don't need to trust a potentially malicious third-party node. If you were to connect to a malicious node, it could give you incorrect information about transactions.

## getTrytes

Gets a transaction's contents.

### Parameters

|**Parameters** |**Required or Optional**|**Description** |**Type**
|--|--|--|--|
| `hashes` |Required| Transaction hashes | array of strings

### Examples
--------------------
### Python
```python
import urllib2
import json

command = {
  "command": "getTrytes",
  "hashes": [
    "SUOESJCXAIDZHGNEJDCFYABGUIOXIVVAHZCZXYWOXDNMGXKM9PEHV9GAMZJWOCVKXVOZUWGZNLZTZ9999"
  ]
}

stringified = json.dumps(command)

headers = {
    'content-type': 'application/json',
    'X-IOTA-API-Version': '1'
}

request = urllib2.Request(url="http://localhost:4000", data=stringified, headers=headers)
returnData = urllib2.urlopen(request).read()

jsonData = json.loads(returnData)

print jsonData
```
---
### Node.js
```js
var request = require('request');

var command = {
  "command": "getTrytes",
  "hashes": [
    "SUOESJCXAIDZHGNEJDCFYABGUIOXIVVAHZCZXYWOXDNMGXKM9PEHV9GAMZJWOCVKXVOZUWGZNLZTZ9999"
  ]
}

var options = {
  url: 'http://localhost:4000',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-IOTA-API-Version': '1'
  },
  json: command
};

request(options, function (error, response, data) {
  if (!error && response.statusCode == 200) {
    console.log(data);
  }
});
```
---
### cURL
```bash
curl http://localhost:4000 \
-X POST \
-H 'Content-Type: application/json' \
-H 'X-IOTA-API-Version: 1' \
-d '{ 
"command": "getTrytes",
"hashes": [
  "SUOESJCXAIDZHGNEJDCFYABGUIOXIVVAHZCZXYWOXDNMGXKM9PEHV9GAMZJWOCVKXVOZUWGZNLZTZ9999"
  ]
}'
```
--------------------

### Response examples
--------------------
### 200
```json
{
"trytes":["BCDDPCADADXCBDVCEAKDXCHDWCEARBYBACXBOBCCEAHDXCDDGDTC9DTCRCHDQAEAHDWCPCBDZCEAMDCDIDEAUCCDFDEAIDGDXCBDVCEARBYBACXBOBCCEADD9DPCMDQCCDCDZCJ9MBCDIDBDHDDBEAVABBCBZAXACBJ9CCXCADTCGDHDPCADDDDBEAWAUAWAUARAUA9BRAWAZACCUACBDBZAXADBWAUAICJ9VCCCCCKBEAHDCDCDZCEAVASACBVA9BGDEAMASCTCDDHDWCGBVANA99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999HORNET99INTEGRATED99SPAMMER9999999999999999999999999999999999999999999999999RAJIV999999999999999999999999999HORNET99SPAM99RAJIV9999IPZZNHURACD99999999999999999999WPEHMEK9QNNRXVTKQQUUZLREUYNIMUNFQXNIQBX9AGPPSCR99GACMAGXLPXVJXPIGBUFRTRXNLYOYBW9XNJLWELEHNVTWUKIGCJ9YWDNNABOJJPCZTYP9GRGGCJB9ZCJ9NPMWVETCIMTAKWAOK9LJSWVKJBEI99999NJLWELEHNVTWUKIGCJ9YWDNNABOJJPCZTYP9GRGGCJB9ZCJ9NPMWVETCIMTAKWAOK9LJSWVKJBEI99999HORNET99SPAM99RAJIV9999IPZZGHCVK9HQF999999999K99999999CI99999999LCWB9999999999999"]
}
```
--------------------

### Results

|**Return field** |**Description**|
|--|--|
| `trytes` | Array of transaction trytes for the given transaction hashes (in the same order as the parameters) |

## findTransactions

Finds transactions that contain the given values in their transaction fields.
The parameters define the transaction fields to search for, including `bundles`, `addresses`, `tags`, `approvees`, and `hints`.

:::info:
You can pass only one parameter to each call.
:::

### Parameters
	
|**Parameters** |**Description** | **Type**
|--|--|--|
| `addresses` | Addresses to search for (do not include the checksum) | array of strings |
| `approvees` | Child transaction hashes to search for | array of strings |
| `bundles` | Bundle hashes to search for | array of strings |
|`hints`|Part of a tag (at least 4 trytes) or an address (81 trytes) to search for. You can specify the attachment timestamp to search for in the `month` and `year` properties. You can use the `page_size` property to specify the maximum number of transaction hashes to return. The rest of the results will be returned in a `paging_state` array.|array of objects|
| `tags` | Tags to search for | array of strings |


### Examples
--------------------
### Python
```python
import urllib2
import json

command = {
  "command": "findTransactions",
  "hints": [
  {"tag":"POWSRV","month":8,"year":2019, "page_size": 500}
  ]
}

stringified = json.dumps(command)

headers = {
    'content-type': 'application/json',
    'X-IOTA-API-Version': '1'
}

request = urllib2.Request(url="http://localhost:4000", data=stringified, headers=headers)
returnData = urllib2.urlopen(request).read()

jsonData = json.loads(returnData)

print jsonData
```
---
### Node.js
```js
var request = require('request');

var command = {
  "command": "findTransactions",
  "hints": [
  {"tag":"POWSRV","month":8,"year":2019, "page_size": 500}
  ]
};


var options = {
  url: 'http://localhost:4000',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-IOTA-API-Version': '1'
  },
  json: command
};

request(options, function (error, response, data) {
  if (!error && response.statusCode == 200) {
    console.log(data);
  }
});
```
---
### cURL
```bash
curl http://localhost:4000 \
-X POST \
-H 'Content-Type: application/json' \
-H 'X-IOTA-API-Version: 1' \
-d '{
  "command": "findTransactions",
  "hints": [
  {"tag":"POWSRV","month":8,"year":2019, "page_size": 500}
  ]
}'
```
--------------------

### Response examples
--------------------
### 200
```json
{
  "hashes":["YBOCSXAPQ9ZRKLPZTPUAHIEYZMM9WILR9ELGKMJ9DPKEQLVWHPBPXHDBXVDNBOTHSCLHSKMV9VXWZ9999","Y9CPOZPBICEGGYZUG9ORWDODJLWSFFFMKGVUQWTTWVHAYXO9TTLFLZIPTPVONUGMCVUWCVNM9EQJA9999","..."
  ],
  "hints":[
    {"month":8,"page_size":500,"paging_state":[0,0,0,0,20,1,0,0,32,0,0,0,4,0,0,0,2,0,0,0,73,79,2,0,0,0,84,65,2,0,0,0,7,227,2,0,0,0,0,8,1,136,0,0,0,5,0,0,0,2,0,0,0,73,83,2,0,0,0,65,83,19,0,0,0,67,65,77,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,4,0,0,0,93,105,39,120,81,0,0,0,89,66,79,67,83,88,65,80,81,57,90,82,75,76,80,90,84,80,85,65,72,73,69,89,90,77,77,57,87,73,76,82,57,69,76,71,75,77,74,57,68,80,75,69,81,76,86,87,72,80,66,80,88,72,68,66,88,86,68,78,66,79,84,72,83,67,76,72,83,75,77,86,57,86,88,87,90,57,57,57,57,11,254,255,127,64,75,209,157,39,39,44,67,150,117,165,64,16,45,245,135,1,0,0,0,57,0,0,0,1,25,0,0,0,20,0,0,0,1,0,0,0,8,0,0,0,210,169,0,71,3,23,125,133,1,1,25,0,0,0,20,0,0,0,1,0,0,0,8,0,0,0,210,169,0,71,3,23,125,133,1,1,1,0,0,0,177,75,216,214,96,152,70,193,205,202,198,226,80,81,213,128,1,2],"tag":"POWSRV","year":2019
    }
  ]
}
```
--------------------

### Results

An array of transaction hashes is returned in the same order for all individual elements.

|**Return field** | **Description** |
|--|--|
| `hashes` | The transaction hashes which are returned depend on your input. `bundles`: returns an array of transaction hashes that contain the given bundle hash. `addresses`: returns an array of transaction hashes that contain the given address in the `address` field. `tags`: returns an array of transaction hashes that contain the given value in the `tag` field. `approvees`: returns an array of transaction hashes that contain the given transactions in their `branchTransaction` or `trunkTransaction` fields. `hints`: returns an array of hint objects. Pass the `paging_state` array to the `findTransactions` endpoint to see more of the resulting transaction hashes up to the value of the `paging_size` property. |

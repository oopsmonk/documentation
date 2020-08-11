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

## Pagination

Requests to the `findTransactions` endpoint can return an unknown amount of zero-value transaction hashes. The exact amount is known only after the query has been executed. Therefore, this endpoint returns a limited amount of transaction hashes.

If you receive a `hints.paging_state` array, more transaction hashes are available for your request. To request these transaction hashes, call the endpoint again, using the returned `hints` field from the first call as a parameter.

## Base URL

All requests to this API should be sent to the URL of a Chronicle instance.

If you don't already have a service to connect to, we recommend [running your own](root://chronicle/1.1/tutorials/run-a-permanode.md).

Running your own node has many benefits, of which the most important is that you don't need to trust a potentially malicious third-party node. If you were to connect to a malicious node, it could give you incorrect information about transactions.

## getTrytes

Gets transaction trytes by a transaction hash.

### Parameters

|**Parameters** |**Required or Optional**|**Description** |**Type**
|--|--|--|--|
| `hashes` |Required| Transaction hashes | array of strings

### Examples
--------------------
### Python
```python
import urllib3
import json
command = {
  "command": "getTrytes",
  "hashes": [
    "IGAHJIHWTZJKHAQZWNEGEPIRBSNPHU9BOTTDHEFNBLXRQRXOKRAGFTQHBPQPYZANUWTCVU9XLC9B99999"
  ]
}
stringified = json.dumps(command).encode('utf-8')
http = urllib3.PoolManager()
headers = {
    'content-type': 'application/json',
    'X-IOTA-API-Version': '1'
}
request = http.request('POST', url="http://localhost:4000/api", body=stringified, headers=headers)
returnData = request.data.decode('utf-8')
jsonData = json.loads(returnData)
print(jsonData)
```
---
### Node.js
```js
var request = require('request');

var command = {
  "command": "getTrytes",
  "hashes": [
    "IGAHJIHWTZJKHAQZWNEGEPIRBSNPHU9BOTTDHEFNBLXRQRXOKRAGFTQHBPQPYZANUWTCVU9XLC9B99999"
  ]
}

var options = {
  url: 'http://localhost:4000/api',
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
  } else {
    console.log(error)
  }
});
```
---
### cURL
```bash
curl http://localhost:4000/api \
-X POST \
-H 'Content-Type: application/json' \
-H 'X-IOTA-API-Version: 1' \
-d '{ 
"command": "getTrytes",
"hashes": [
  "IGAHJIHWTZJKHAQZWNEGEPIRBSNPHU9BOTTDHEFNBLXRQRXOKRAGFTQHBPQPYZANUWTCVU9XLC9B99999"
  ]
}'
```
--------------------

### Response examples
--------------------
### 200
```json
{
  "trytes":["BCDDPCADADXCBDVCEAKDXCHDWCEARBYBACXBOBCCEAHDXCDDGDTC9DTCRCHDQAEAHDWCPCBDZCEAMDCDIDEAUCCDFDEAIDGDXCBDVCEARBYBACXBOBCCEADD9DPCMDQCCDCDZCJ9MBCDIDBDHDDBEAVABBCBZAXACBJ9CCXCADTCGDHDPCADDDDBEAWAUAWAUARAUA9BRAWAZACCUACBDBZAXADBWAUAICJ9VCCCCCKBEAHDCDCDZCEAVASACBVA9BGDEAMASCTCDDHDWCGBVANA99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999HORNET99INTEGRATED99SPAMMER9999999999999999999999999999999999999999999999999RAJIV999999999999999999999999999HORNET99SPAM99RAJIV9999IPZZNHURACD99999999999999999999WPEHMEK9QNNRXVTKQQUUZLREUYNIMUNFQXNIQBX9AGPPSCR99GACMAGXLPXVJXPIGBUFRTRXNLYOYBW9XNJLWELEHNVTWUKIGCJ9YWDNNABOJJPCZTYP9GRGGCJB9ZCJ9NPMWVETCIMTAKWAOK9LJSWVKJBEI99999NJLWELEHNVTWUKIGCJ9YWDNNABOJJPCZTYP9GRGGCJB9ZCJ9NPMWVETCIMTAKWAOK9LJSWVKJBEI99999HORNET99SPAM99RAJIV9999IPZZGHCVK9HQF999999999K99999999CI99999999LCWB9999999999999"],
  "milestones": [null]
  }
}
```
--------------------

### Results

|**Return field** |**Description**|
|--|--|
| `trytes` | Array of transaction trytes for the given transaction hashes (in the same order as the parameters) |
| `milestones` | Array of transaction hashes of the milestones that confirmed the transaction|

## findTransactions

Gets the transaction hashes of transactions that contain the given values in their transaction fields.

To find only value transactions, you must use the `addresses` parameter.

To find only zero-value transaction, you must use the `hints` parameter.

:::info:
You can search for either `hints.address` or `hints.tag`, but not both at the same time.
:::

### Parameters
	
|**Parameters** |**Description** | **Type**
|--|--|--|
| `addresses` | Addresses to search for in value transactions (do not include the checksum) | array of strings |
| `approvees` | Child transaction hashes to search for in all transactions | array of strings |
| `bundles` | Bundle hashes to search for in all transactions | array of strings |
|`hints`|Search fields for zero-value transactions|array of objects|
|`hints.address`|Address to search for in zero-value transactions|string|
| `hints.tags` | Tag to search for in zero-value transactions | string |
|`hints.month`|The month to search for in the `attachmentTimestamp` field of zero-value transactions| integer|
|`hints.year`|The year to search for in the `attachmentTimestamp` field of zero-value transactions|integer|

### Examples
--------------------
### Python
```python
import urllib3
import json
command = {
    "command": "findTransactions",
    "hints": [
        {"tag":"IOTAJAMMER99999999999999999","month":7,"year":2020}
    ]
}
stringified = json.dumps(command).encode('utf-8')
http = urllib3.PoolManager()
headers = {
    'content-type': 'application/json',
    'X-IOTA-API-Version': '1'
}
request = http.request('POST', url="http://localhost:4000/api", body=stringified, headers=headers)
returnData = request.data.decode('utf-8')
jsonData = json.loads(returnData)
print(jsonData)
```
---
### Node.js
```js
var request = require('request');

var command = {
  "command": "findTransactions",
  "hints": [
  {"tag":"IOTAJAMMER99999999999999999","month":7,"year":2020}
  ]
};


var options = {
  url: 'http://localhost:4000/api',
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
  } else {
    console.log(error)
  }
});
```
---
### cURL
```bash
curl http://localhost:4000/api \
-X POST \
-H 'Content-Type: application/json' \
-H 'X-IOTA-API-Version: 1' \
-d '{
  "command": "findTransactions",
  "hints": [
  {"tag":"IOTAJAMMER99999999999999999","month":7,"year":2020}
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
  "hints":
  [
    {
      "tag":"IOTAJAMMER99999999999999999",
      "year":2020,
      "month":7,
      "paging_state":[0,0,0,0,18,1,0,0,50,0,0,0,3,0,0,0,27,0,0,0,73,79,84,65,74,65,77,77,69,82,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,2,0,0,0,7,228,1,0,0,0,7,1,112,0,0,0,3,0,0,0,3,0,0,0,116,97,103,8,0,0,0,0,0,0,0,95,4,62,142,81,0,0,0,74,75,71,74,88,81,83,80,73,71,68,78,84,88,79,79,88,68,70,84,79,78,88,72,72,82,86,88,85,77,90,78,81,86,90,71,84,89,78,73,75,69,70,57,89,57,65,87,89,67,84,70,66,85,71,80,66,68,79,72,89,67,79,80,67,90,86,77,67,67,69,57,75,87,76,66,90,57,57,57,57,0,255,255,255,202,67,100,113,202,178,210,211,113,45,171,66,43,39,248,185,1,0,0,0,57,0,0,0,1,25,0,0,0,20,0,0,0,1,0,0,0,8,0,0,0,192,9,67,188,78,93,12,64,1,1,25,0,0,0,20,0,0,0,1,0,0,0,8,0,0,0,192,9,67,188,78,93,12,64,1,1,1,0,0,0,74,64,240,75,108,25,215,194,210,250,149,1,83,32,238,142,1,0,0,0,0,0]
    }
  ]
}
```
--------------------

### Results

An array of transaction hashes is returned in the same order for all individual elements.

|**Return field** | **Description** |
|--|--|
| `hashes` | Transactions hashes|
|`hints`|A `hints` field|

If the `hints` field includes a non-empty `paging_state` array, you can use it to request more results for your search criteria.

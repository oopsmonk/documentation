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

Requests to the `findTransactions` endpoint can return an unknown amount of results. The exact amount is known only after the query has been executed. Therefore, this endpoint returns a limited amount of transaction hashes.

If you receive a `hints.paging_state` array, more transaction hashes are available for your request. To request these transaction hashes, call the endpoint again, using the returned `hints` array as a parameter.

## Base URL

All requests to this API should be sent to the URL of a Chronicle node.

If you don't already have a service to connect to, we recommend [running your own](../tutorials/run-a-permanode.md).

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
| `milestones` | Array of transaction hashes of the milestones that confirmed the transactions (in the same order as the parameters)|

## findTransactions

Returns the hashes of transactions that contain the given values in their transaction fields.

If you use the `addresses`, `approvees`, `bundles`, or `tags` parameters, this endpoint may return a `hints` object. See [Pagination](#pagination) for more information.

Use the `hints` parameter if you want to:

- Search for transactions by their `attachmentTimestamp` field
- Get the remaining results of a previous request

:::info:
This endpoint accepts only one of the following parameters.
:::

### Parameters
	
|**Parameters** |**Description** | **Type**
|--|--|--|
| `addresses` | Addresses to search for (do not include the checksum) | array of strings |
| `approvees` | Child transaction hashes to search for in all transactions | array of strings |
| `bundles` | Bundle hashes to search for in all transactions | array of strings |
|`tags`|Tags to search for|array of strings|
|<a name="hints"></a>`hints`|Either an address, approvee, bundle, or tag to search for|array of objects|
|`hints.address`|The address to search for|string|
|`hints.approvee`|The parent transaction hash to search for|string|
|`hints.bundle`|The bundle hash to search for|string|
|`hints.tag`|The tag to search for|string|
|`hints.timeline`|The attachment timestamp to search for|array of objects|
|`hints.timeline.year`|The year of the attachment timestamp to search for|integer|
|`hints.timeline.month`|The month of the attachment timestamp to search for|integer|
|`page_size`|The number of results to return (the default `page_size` is 5000)|integer|

Example `hints` objects:

```json=
{ "tag": "some-tag-27-trytes", "timeline": [{"year": .., "month": ..}, etc], "paging_state": .., "page_size": ..}
{ "address": "some-address-81-trytes", "timeline": [{"year": .., "month": ..}, etc], "paging_state": .., "page_size": ..}
{ "bundle": "some-bundle-81-trytes", "timeline": [{"year": .., "month": ..}, etc], "paging_state": .., "page_size": ..}
{ "approvee": "some-approvee-81-trytes", "timeline": [{"year": .., "month": ..}, etc], "paging_state": .., "page_size": ..}
```

### Examples
--------------------
### Python
```python
import urllib3
import json
command = {
  "command": "findTransactions",
  "bundles": [
    "BUNDLE_HASH_1", "BUNDLE_HASH_N"
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
  "bundles": [
    "BUNDLE_HASH_1", "BUNDLE_HASH_N"
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
  "bundles": [
    "BUNDLE_HASH_1", "BUNDLE_HASH_N"
  ]
}'
```
--------------------

### Response examples
--------------------
### 200
```json
{
  "hashes":["YBOCSXAPQ9ZRKLPZTPUAHIEYZMM9WILR9ELGKMJ9DPKEQLVWHPBPXHDBXVDNBOTHSCLHSKMV9VXWZ9999","Y9CPOZPBICEGGYZUG9ORWDODJLWSFFFMKGVUQWTTWVHAYXO9TTLFLZIPTPVONUGMCVUWCVNM9EQJA9999", "9TVXVK9ENAEXDPKAUV9WQZEIMMTKDQQTVNUVAJ9CJMOCC9KCG9GL9ZMJCOMNBVBLLBXEFTQNQS9C99999"
  ],
  "values":[100,-100,0],
  "milestones":[1526005,1526005,1526005],
  "timestamps":[1572010100517,1572076153742,1572076153764],
  "hints":
  [
    {
      "bundle":"BUNDLE_HASH",
      "timeline":[{
              "year":2019,
              "month":10
        }],
      "paging_state":[0,0,0,0,18,1,0,0,50,0,0,0,3,0,0,0,27,0,0,0,73,79,84,65,74,65,77,77,69,82,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,2,0,0,0,7,228,1,0,0,0,7,1,112,0,0,0,3,0,0,0,3,0,0,0,116,97,103,8,0,0,0,0,0,0,0,95,4,62,142,81,0,0,0,74,75,71,74,88,81,83,80,73,71,68,78,84,88,79,79,88,68,70,84,79,78,88,72,72,82,86,88,85,77,90,78,81,86,90,71,84,89,78,73,75,69,70,57,89,57,65,87,89,67,84,70,66,85,71,80,66,68,79,72,89,67,79,80,67,90,86,77,67,67,69,57,75,87,76,66,90,57,57,57,57,0,255,255,255,202,67,100,113,202,178,210,211,113,45,171,66,43,39,248,185,1,0,0,0,57,0,0,0,1,25,0,0,0,20,0,0,0,1,0,0,0,8,0,0,0,192,9,67,188,78,93,12,64,1,1,25,0,0,0,20,0,0,0,1,0,0,0,8,0,0,0,192,9,67,188,78,93,12,64,1,1,1,0,0,0,74,64,240,75,108,25,215,194,210,250,149,1,83,32,238,142,1,0,0,0,0,0],
      "page_size": 5000
    }
  ]
}
```
--------------------

### Results

An array of result objects is returned in the same order as the parameters.

If you searched for transactions by addresses, approvees, bundles, or tags this endpoint may return a `hints` parameter which indicates that more results are available for your search criteria. To request the remaining results, pass the returned `hints` object back to the `findTransactions` endpoint.

|**Return field** | **Description** |**Type**|
|--|--|--|
| `hashes` | The transaction hashes|array|
|`values`| The `value` fields of the transactions|array|
|`milestones`|The indexes of the transactions' confirmation milestones|array|
|`timestamps`|The transactions' `attachmentTimestamp` fields|array|
|`hints`|A [`hints` parameter](#hints) to use to request the next set of transactions|object|
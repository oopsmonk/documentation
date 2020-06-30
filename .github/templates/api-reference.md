# %product% API reference

**Describe what the API is for. For example, "This API provides a simple and consistent way to ".**

At the moment, most APIs are alpha or beta. In these cases, add a warning about using them in production applications.

```
:::warning:
This API is in beta and subject to change. We do not recommend using this API in production applications.
:::
```

## Headers

List any headers that must be included in an API request.

All requests must include a header that defines at least the API version.

### Versioning

Discuss how the API is versioned and what header to use.

### Content type

Discuss what content type the API expects and returns.

### Authentication 

Discuss how you can authenticate API requests.

## Base URL

Tell the user what base URL to use to send requests.

If the API is a node API, always recommend sending requests to your own node.

For example:

```
If you don't already have a service to connect to, we recommend running your own.

Running your own node has many benefits, of which the most important is that you don't need to trust a potentially malicious third-party node. If you were to connect to a malicious node, it could give you incorrect information about transactions.
```

## %endpointName%

Describe what this endpoint does.

For example, "Get's a transaction from the Tangle by its transaction hash".

### Parameters

List any parameters and describe them.

|**Parameters** |**Required or Optional**|**Description** |**Type**
|--|--|--|--|
| `` ||  | 

### Examples

Provide example requests in the following:

--------------------
### Python
```python

```
---
### Node.js
```js

```
---
### cURL
```bash

```
--------------------

### Response examples

Provide an example reponse
--------------------
### 200
```json

}
```
--------------------

### Results

List any results and describe them.

|**Return field** |**Description**|
|--|--|
| `` |  |

## Error responses

List any error responses, using a level 3 heading for each one in the following format:

```
### HTTP status code: Error message
```

Below the heading suggest why the error happened and give the user tips to resolve it.

For example:

```
### 400: Invalid depth input

The node rejected your request because the `depth` parameter was invalid.

To resolve this error, try one of the following:

- Make sure that the value of the `depth` parameter is a number, not a string

- Use the `getNodeAPIConfiguration` endpoint to find out the node's maximum depth
```

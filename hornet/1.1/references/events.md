# Events

**This table contains the events that a node can publish, using either ZMQ or MQTT.**

All events always return the name of the event first followed by the actual event data.

|  **Event**|**Description** | **Returned data**
| :----------| :----------|:----|
|`mctn`|Number of transactions that the node traversed during tip selection| <ul><li>Total number of transactions that were traversed during tip selection</li></ul>
|`lmi` |The latest milestone index|<ul><li>Index of the previous solid subtangle milestone</li><li>Index of the latest solid subtangle milestone</li></ul>
|`lmsi` |The latest solid subtangle milestone| <ul><li>Index of the previous solid subtangle milestone</li><li>Index of the latest solid subtangle milestone</li></ul>
|`lmhs`|The latest solid subtangle milestone transaction hash| <ul><li>Milestone transaction hash</li></ul>
|`sn`|Transaction that has recently been confirmed| <ul><li>Index of the milestone that confirmed the transaction</li><li>Transaction hash</li><li>Address</li><li>Trunk transaction hash</li><li>Branch transaction hash</li><li>Bundle hash</li></ul>
|`sn_trytes`|Transaction trytes of recently confirmed transactions| <ul><li>Transaction trytes</li><li>Transaction hash</li><li>Index of the milestone that confirmed the transaction</li></ul>
|`trytes`|Transaction trytes of any new transactions| <ul><li>Transaction trytes</li><li>Transaction hash</li></ul>
|<a name="tx"></a> `tx` |Transaction that the node has recently appended to its database| <ul><li>Transaction hash</li><li>Address</li><li>Value</li><li>Obsolete tag</li><li>Value of the transaction's `timestamp` field</li><li>Index of the transaction in the bundle</li><li>Last transaction index of the bundle</li><li>Bundle hash</li><li>Trunk transaction hash</li><li>Branch transaction hash</li><li>Unix epoch of when the node received the transaction</li><li>Tag</li></ul>
|<a name="address"></a>81-tryte address (uppercase characters)| Monitor a given address for a confirmed transaction| <ul><li>Address</li><li>Transaction hash of a confirmed transaction that the address appeared in</li><li>Index of the milestone that confirmed the transaction </li></ul>

# Scylla data model

**This topic describes the default data model that Chronicle uses.**

The ScyllaDB data model includes the following tables:

- **Bundle:** Stores transaction bundles

- **Edge:** Provides secondary indexes

- **Tag:** Limits the amount of time you can search by tag

- **Zero-value:** Stores spam and data transactions by month

We use the following abbreviations to describe the data in these tables:

|**Abbreviation**|**Description**|
|:------------|:------------|
|BH|Bundle hash|
|H_hash|Head transaction hash (IX == LX)|
|TS|Timestamp|
|TX_HASH|Transaction hash|
|TTL|Time to live|
|EL|Extra Label|
|EX|Extra Vertex|
|LB|Label|
|V1|Vertex One|
|V2|Vertex Two|
|IX|Current Index|
|LX|Last Index|
|SX|Snapshot Index|

## Bundle table

The bundle tables stores all bundle data in the following fields:

- `bundle_hash`: Main partition key. All bundles with same bundle hash are stored on the same Scylla nodes.

- `outputs`: Addresses used in output transactions

- `inputs`: Addresses used in input transactions

- `transactions_hashes`: All transaction hashes in the bundle

![bundle table sample](../images/bundle-table.png)

## Edge table

The edge tables stores transaction data, where the partion key can be any of the following fields:

- `address`: Address that was used in a bundle

- `transaction_hash`: Transaction hash

- `tip`: Trunk or branch transactions of the head transaction of the bundle

![edge table sample](../images/edge-table.png)

All the rows with the same partition key are stored on the same nodes. This allows you to look up data by any partition key.

## Tag table

A tag table can be one of two types:

- Full tag (27 trytes)

- Full tag and IOTA area code

## Zero_value table

This table stores the same data as the edge table, except the partition key is a composite partition key composed of address, year, month. This means that only the monthly activities for that address will exist in the same shard. 

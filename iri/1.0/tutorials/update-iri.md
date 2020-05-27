# Upgrade to version 1.8.6

**In this topic, you choose an option to upgrade IRI to version 1.8.6.**

Version 1.8.6 comes with the following changes, which aren't backwards compatible:

- To save memory, empty `signatureMessageFragment` fields (all 9s) in transactions are truncated before being stored in the database

- For better organization, all snapshot data and spent addresses are stored in a single database

Therefore, after you upgrade, you won't be able to downgrade.

## Node owners who configured IRI without local snapshots

If your node does not do local snapshots, you can update IRI by simply downloading the latest `.jar` file from [GitHub](https://github.com/iotaledger/iri/releases) and running it.

## Node owners who configured IRI to do local snapshots

If your node does local snapshots, you need to choose one of the following options:

- [Keep all your existing snapshot data](../tutorials/merge-snapshot.md)
- [Delete your snapshot data and start again](../tutorials/delete-snapshot.md)
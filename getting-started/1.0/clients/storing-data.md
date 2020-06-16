# Storing data in the Tangle

**You can store data in the Tangle without spending IOTA tokens by using zero-value transactions. This topic discusses the types of data that the Tangle is designed to store.**

Although you can store anything in the Tangle, You should consider doing so only for the following use cases:

**Tamper-Evidence:** You want to be able to prove that a dataset has or has not changed. For an example of this use case, see the blueprint for [Tangle Data Storage](root://blueprints/0.1/tangle-data-storage/overview.md).

**Decentralization:** You can't trust the parties involved to keep data in a centralized, proprietary database. For an example of this use case, see the blueprint for [Track and Trace](root://blueprints/0.1/track-and-trace/overview.md).

**Transparency:** You want your data to be visible to everyone to establish trust. For an example of this use case, see the blueprint for the [Data Marketplace](root://blueprints/0.1/tangle-data-storage/overview.md).

## Data persistence

Data in the Tangle is not guaranteed to be stored forever because nodes have the ability to prune transactions from their local databases.

If you want to be able to store data for long periods of time, see [Chronicle](root://chronicle/1.0/overview.md).

## Next steps

For an overview of the steps involved in sending a transaction, see [Sending a transaction](../clients/sending-a-transaction.md).

For tutorials on storing data in the Tangle, see the [Core client library](root://core/1.0/overview.md) documentation.
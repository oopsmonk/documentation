# Creating a new channel

**This topic explains how to create a new channel.**

To create a channel, you must start with this simple workflow.

![Flowchart for starting a channel](../images/announce-flowchart.png)

## Choosing a communication channel

Messages can be published on any communication channel.

By default, Channels comes with an API for publishing messages on the Tangle with an `Address` link type.

The `Address` link type includes the channel address in the `address` field of a [transaction](root://getting-started/1.0/understanding-iota/transactions.md) and the message identifier in the `tag` field.

![Header structure](../images/header-structure.png)

For simplicity, these guides will always use the Tangle.

If you wanted to use a custom communication channel, you could implement a [`Transport` trait](https://github.com/iotaledger/streams/blob/master/iota-streams-app/src/transport/mod.rs) for it.

## Creating the author

The first step in starting a channel is to create an instance of the `Author` object, which you can use to [manage the channel](../references/message-types.md#managing-a-channel-as-an-author) and [publish signed or anonymous data](../references/message-types.md#publishing-signed-data-as-an-author).


```rust
use iota_streams::{
    app_channels::api::tangle::{Author}
};

let mut author = Author::new("AUTHORSECRET", 3, true);
```

The first argument is the author's secret, which is used by a [pseudo-random number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) (PRNG) to generate the author's [signature keys](#signature-keys) and message identifiers.

The second argument is the height of the Merkle tree, which is used to define how many signature keys the author has. To calculate the number of signature keys an author has, use this formula: Number of signature keys = 2<sup>height</sup>. For example a height of 3 would result in 8 signature keys, which could be used to sign 8 messages.
    ​
The third argument defines whether the author has an [encryption key pair](#encryption-keys). This argument must be `true` if you plan on [managing authorized subscribers on the channel](../guides/authorizing-subscribers.md).

### Signature keys

Only authors have signature keys to sign messages and prove ownership of the channel.
​
To sign messages, the `Author` object uses the Winternitz one-time signature (W-OTS) scheme combined with a Merkle signature scheme. These signatures are quantum robust, meaning that they are resistant against attacks by quantum computers. For more information about how signatures are generated and verified, see [Signatures](root://getting-started/1.0/cryptography/signatures.md) .

To generate the private signature keys, the `Author` object uses a pseudo-random number generator and a secret string. The public half of these keys is then used to generate the channel address.
​
![Example of a Merkle tree](../images/merkle-tree-channel.png)

## Announcing a channel

A channel does not exist until it has been announced.

To announce the channel, an author must first create an [`Announce`](../references/message-types.md) message, using the `announce()` method.

```rust
let announcement = author.announce();
```

## Publishing the message

To publish a message in the Tangle, you need the following:

- An instance of the IOTA Rust client library
- The default node options, including the minimum weight magnitude, and whether to do local or remote proof of work
- The `Transport` trait for the Tangle

```rust
use iota_lib_rs::prelude::iota_client;
use iota_streams::app::transport::tangle::client::SendTrytesOptions;
use iota_streams::app_channels::api::tangle::{Transport};
```

Then, you can use the `iota_client` object to connect to a node and publish the message in the Tangle.

The `iota_client` object is extended to implement the [`Transport` trait for the Tangle](https://github.com/iotaledger/streams/blob/master/iota-streams-app/src/transport/tangle/client.rs), which means that you can use it to create a bundle from messages.


```rust
// Connect to a node
let mut client = iota_client::Client::new("https://nodes.devnet.iota.org:443");

// Change the default settings to use a lower minimum weight magnitude for the Devnet
let mut send_opt = SendTrytesOptions::default();
// default is 14
send_opt.min_weight_magnitude = 9;
send_opt.local_pow = false;

client.send_message_with_options(&announcement, send_opt)?;
```

## Next steps

After announcing a channel, you can start interacting with others, using the following guides:

- [Creating a subscriber](../guides/creating-a-subscriber.md)
- [Sending links](../guides/sending-links.md)
- [Linking messages](../guides/linking-messages.md)
- [Publishing public data](../guides/publishing-public-data.md)
- [Publishing encrypted data](../guides/publishing-encrypted-data.md)
- [Generating new signature keys](../guides/generating-new-signature-keys.md)

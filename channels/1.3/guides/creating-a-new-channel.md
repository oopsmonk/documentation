# Creating a new channel

**This topic explains how to create a new channel.**

To create a channel, you must start with this simple workflow.

![Flowchart for starting a channel](../images/announce-flowchart.png)

## Choosing a communication channel

Messages can be published on any communication channel.

By default, Channels comes with an API for publishing messages in the Tangle with an `Address` link type.

The `Address` link type includes the channel address in the [`address`](root://getting-started/1.1/references/transaction-fields.md) field of a transaction and the message identifier in the `tag` field.

![Header structure](../images/header-structure.png)

For simplicity, these guides will always use the Tangle.

If you wanted to use a custom communication channel, you could implement a [`Transport` trait](https://github.com/iotaledger/streams/blob/master/iota-streams-app/src/transport/mod.rs) for it.

## Creating the Transport client
To publish a message in the Tangle, you need the following:

- An instance of the IOTA Rust client library
- The default node options, including the minimum weight magnitude, and whether to do local or remote proof of work
```rust
use iota::client as iota_client;
use iota_streams::app::transport::tangle::client::{
    Client,
    SendTrytesOptions
};

// Change the default settings to use a lower minimum weight magnitude for the Devnet
let mut send_opt = SendTrytesOptions::default();
// default is 14
send_opt.min_weight_magnitude = 9;
send_opt.local_pow = false;

let url = "https://nodes.devnet.iota.org:443";

// Connect to an IOTA node
let client: Client = Client::new(send_opt, iota_client::ClientBuilder::new().node(url).unwrap().build().unwrap());
```
In case you dont need to change any options, and the node you use is at the same computer and default port (14265), you can quickly make a client instance.
```rust
let client = Client::default();
```
Alternatively; you may start with just an URL using the following:
```rust
let client = Client::new_with_node(url);
```

## Creating the author

The second step in starting a channel is to create an instance of the `Author` object which uses the transport client. You can use an `Author` to [manage the channel](../references/message-types.md#managing-a-channel-as-an-author) and [publish signed or anonymous data](../references/message-types.md#publishing-signed-data-as-an-author).


```rust
use iota_streams::app_channels::api::tangle::Author;
use iota_streams::app::transport::tangle::PAYLOAD_BYTES;

let encoding = "utf-8";
let multi_branching_flag = true;
let mut author = Author::new("MYAUTHORSECRETSTRINGAPWOQ9", encoding, PAYLOAD_BYTES, multi_branching_flag, client);

```

The first argument is the author's secret, which is used by a [pseudo-random number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) (PRNG) to generate the author's [signature keys](#signature-keys) and message identifiers.

The second argument is the encoding type of your messages, usually set to `utf-8`. `PAYLOAD_BYTES` is required for splitting up your message, as each Tangle transaction can only hold `PAYLOAD_BYTES`, but your message can be bigger.
    ​
The last argument defines what type of tree structure you wish to use for your branches. For more information about tree structures, see [Sequencing with branches](../guides/multi-branch-sequence.md).

### Signature keys

Only authors have signature keys to sign messages and prove ownership of the channel.
​
To sign messages, the `Author` object uses the Ed25519 signature, which is a signature scheme in the EdDSA family. 

The private key is a 256-bit random number, and the public key is a 256-bit number deterministically calculated from a private key.

More information on the signature can be found in the [RFC803](https://tools.ietf.org/html/rfc8032).

To generate the private signature keys, the `Author` object uses a pseudo-random number generator and a secret string. The public half of these keys is then used to generate the channel address.

## Announcing a channel

A channel does not exist until it has been announced.

To announce the channel, an author must first create and send an [`Announce`](../references/message-types.md) message, using the `send_announce()` method.

```rust
let announcement = author.send_announce();
```
Calling this method will automatically send the announcement over your transportation client. In our case we will publish it on the Tangle.


## Next steps

After announcing a channel, you can start interacting with others, using the following guides:

- [Creating a subscriber](../guides/creating-a-subscriber.md)
- [Sending links](../guides/sending-links.md)
- [Linking messages](../guides/linking-messages.md)
- [Publishing public data](../guides/publishing-public-data.md)
- [Publishing encrypted data](../guides/publishing-encrypted-data.md)

# Creating a subscriber

**Subscribers use the communication channel to find messages on a channel and process them. In this guide, you learn how to create a new subscriber.**

To create a subscriber, you need an instance of the `Subscriber` object, which you can use to [manage subscriptions to masked payloads](../references/message-types.md#managing-subscriptions-to-masked-payloads-as-a-subscriber) and [publish anonymous data](../references/message-types.md#publishing-anonymous-data-as-an-author-or-subscriber).

Subscribers can have one of the following encryption keys to use for sending `Subscribe` messages:

- A pre-shared key
- An X25519 key pair

The X25519 keys are generated when the `Subscriber` object is created using another generated ed25519 key and a `secret`.

Before we can make a `Subscriber` object, we need a Transportation method. For simplicity, these guides will always use the Tangle.

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


## Creating the Subscriber
Our Subscriber will use the client we created in the previous step. 
```rust
use iota_streams::app_channels::api::tangle::Subscriber;
use iota_streams::app::transport::tangle::PAYLOAD_BYTES;

let encoding = "utf-8";
let mut subscriber = Subscriber::new("MYSUBSCRIBERSECRETSTRING", encoding, PAYLOAD_BYTES, client);
```

The first argument is the subscriber's `secret`, which is used by the [pseudo-random number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) (PRNG) to generate the encryption key pair and to generate message identifiers.

The second argument is the encoding type of your messages, usually set to `utf-8`. `PAYLOAD_BYTES` is required for splitting up your message, as each Tangle transaction can only hold `PAYLOAD_BYTES`, but your message can be bigger.



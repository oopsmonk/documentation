# Creating a subscriber

**Subscribers use the communication channel to find messages on a channel and process them. In this guide, you learn how to create a new subscriber.**

To create a subscriber, you need an instance of the `Subscriber` object, which you can use to [manage subscriptions to masked payloads](../references/message-types.md#managing-subscriptions-to-masked-payloads-as-a-subscriber) and [publish anonymous data](../references/message-types.md#publishing-anonymous-data-as-an-author-or-subscriber).

Subscribers can have one of the following encryption keys to use for sending `Subscribe` messages:

- A pre-shared key
- An X25519 key pair

The X25519 keys are generated when the `Subscriber` object is created using another generated ed25519 key and a `secret`.

```rust
use iota_streams::app_channels::api::tangle::Subscriber;
use iota_streams::app::transport::tangle::PAYLOAD_BYTES;

let encoding = "utf-8";
let mut subscriber = Subscriber::new("MYSUBSCRIBERSECRETSTRING", encoding, PAYLOAD_BYTES);
```

The first argument is the subscriber's `secret`, which is used by the [pseudo-random number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) (PRNG) to generate the encryption key pair and to generate message identifiers.

The second argument is the encoding type of your messages, usually set to `utf-8`. `PAYLOAD_BYTES` is required for splitting up your message, as each Tangle transaction can only hold `PAYLOAD_BYTES`, but your message can be bigger.



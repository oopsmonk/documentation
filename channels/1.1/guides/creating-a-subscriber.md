# Creating a subscriber

**Subscribers use the communication channel to find messages on a channel and process them. In this guide, you learn how to create a new subscriber.**

To create a subscriber, you need an instance of the `Subscriber` object, which you can use to [manage subscriptions to masked payloads](../references/message-types.md#managing-subscriptions-to-masked-payloads-as-a-subscriber) and [publish anonymous data](../references/message-types.md#publishing-anonymous-data-as-an-author-or-subscriber).

Subscribers can have one of the following encryption keys to use for sending `Subscribe` messages:

- A pre-shared key
- An NTRU key pair

The NTRU keys can be generated when the `Subscriber` object is created.

```rust
let mut subscriber = Subscriber::new("MYSUBSCRIBERSECRETSTRING", true);
```

The first argument is the subscriber's secret, which is used by a [pseudo-random number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) (PRNG) to generate the encryption key pair and to generate message identifiers.

The second argument defines whether the subscriber has an NTRU key pair. This argument must be true if you want to be able to publish `Subscribe` messages.




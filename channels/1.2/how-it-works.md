# How Channels works

**Channels is a built-in [Streams](root://iota-streams/1.0/overview.md) protocol for building secure messaging applications that have a single owner and one or more subscribers.**

![Flowchart for starting a channel](images/announce-flowchart.png)

## Roles

Each channel has **one owner, called the author** who is responsible for creating it by publishing an [`Announce`](references/message-types.md) message on a communication channel.
​
Once the author has created a channel, **one or more subscribers** can communicate asynchronously with both each other and the author by publishing messages on it.

## Communication channels and links

Messages can be published on any communication channel such as HTTP and addressed by a link.

The link consists of the channel address and the message identifier, which are both used to find messages on the channel.

The channel address is what identifies a channel. Each message in the same channel has the same channel address, which is generated from the author's signature keys. This allows the author to sign messages and prove ownership of the channel.

The message identifier differentiates individual messages on a channel and is used to link messages to others.

## Messages

The contents of each message is defined by its [type](references/message-types.md), which contains information about how it should be cryptographically processed.

For example, an author's message may contain a masked payload as well as a signature. This content must be processed in a specific way that allows subscribers to decrypt it and verify the signature.

## States

Each message contains important information that may be necessary to process future messages.

Therefore, the author and subscribers store this information in their local states.

![Author state](images/author-state.png)

For both the author and subscribers, the state contains references to the messages that have already been processed as well as the cryptographic result of processed messages, which is called the spongos state.

An author's state may also include:

- A private signature key, which is used to sign a message
- A private encryption key, which is used by subscribers to create `Subscribe` messages
- The encryption keys of any trusted subscribers. These keys are used to create `Keyload` messages.

A subscriber's state may include:

- A private encryption key, which is used to process `Keyload` messages
- The author's public encryption key, which may be used when creating `Keyload` and `Subscribe` messages
- The author's current public signature key, which is used to verify signatures in signed messages

## Next steps
​
[Design your own messaging workflow](guides/designing-the-workflow.md).
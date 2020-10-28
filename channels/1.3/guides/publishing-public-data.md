# Publishing public payloads

**The author and subscribers can publish public data in public payloads. This topic explains the process of publishing public payloads for both roles.**

The author can publish public payloads in both `SignedPacket` and `TaggedPacket` messages.

Subscribers can publish public payloads only in `TaggedPacket` messages.

The difference between these message types is that `TaggedPacket` messages are anonymous, whereas `SignedPacket` messages are authenticated by the author's signature.

## Linking

When publishing public payloads in `SignedPacket` messages, those messages should be linked to an `Announce` message so that subscribers can verify the signature.

![Annonce message linked to a SignedPacket message](../images/signedpacket-workflow.png)

When publishing public payloads in `TaggedPacket` messages, those messages may be linked to any other message type.

For example, you could send lots of anonymous `TaggedPacket` messages where the first one is linked to the `Announce` message and the others all link to each other. Then, to authenticate all of those messages as the author, you could publish a `SignedPacket` message and link it to the latest `TaggedPacket` message.

See [Linking messages](../guides/linking-messages.md) for more information.
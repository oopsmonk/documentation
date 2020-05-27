# Publishing encrypted data

**The author and subscribers can publish encrypted data in masked payloads. This topic explains the process of publishing masked payloads for both roles.**

The author can publish masked payloads in both `SignedPacket` and `TaggedPacket` messages.

The difference between these message types is that `TaggedPacket` messages are anonymous, whereas `SignedPacket` messages are authenticated by the author's signature. 

As the owner of the channel, the author can choose to [authorize subscribers](../guides/authorizing-subscribers.md) to decrypt masked payloads and to send their own anonymous ones in `TaggedPacket` messages.

To do so, the author generates a session key, which is used to encrypt and decrypt the masked payloads.

This session key is encrypted with the authorized subscribers' public encryption keys and published in a `Keyload` message for them to decrypt and use.

:::info:
Subscribers cannot publish masked payloads or decrypt the author's masked payloads without the author's permission (a valid session key).
:::

As a result, each `Keyload` message essentially acts as the start of a private channel within the main one, allowing you to create fine-grained permissions to content. 

![Keyload message linked to an Announce message](../images/keyload-workflow.png)



### On the channel

If the author is created with an NTRU key pair, subscribers can publish  `Subscribe` messages on the channel to request access to a session key.

![Subscribe message linked to an Announce message](../images/subscribe-workflow.png)

After publishing a `Subscribe` message, the subscriber sends the author the message identifier. The author then decides whether to publish a `Keyload` message for that subscriber.

:::info:
A single `Keyload` message may contain a session key for more than one subscriber.

You can use the `share_keyload_for_everyone()` method to generate a session key for all known subscribers.
:::

If the subscribers who published the `Subscribe` messages no longer plans on reading encrypted messages on the channel, they can notify the author by publishing `Unsubscribe` messages. By notifying the author of their intent to unsubscribe, subscribers reduce the amount of computation that the author must do to generate future session keys. It's in the author's interest to listen for these messages.

### Outside of the channel

Instead of allowing subscribers to request access to a session key, you can choose authorized subscribers before announcing the channel. These subscribers may come from an external source such as a list of members' email addresses in a database.

To set up subscribers before announcing the channel, you can choose them in advance and either establish a pre-shared key or request their NTRU keys.

The author can then later use these keys to publish a `Keyload` message.

## Linking

Because the `Announce` message contains the author's public encryption key, `Subscribe` messages should always be linked to it.

`Unsubscribe` messages should always be linked to the corresponding `Subscribe` message because it contains the information that the author needs to verify the message.

See [Linking messages](../guides/linking-messages.md) for more information.
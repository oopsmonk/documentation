# Generating new signature keys

**The author's signature keys are for one-time use, therefore the author will eventually run out of them. This topic explains how to generate new signature keys so you can continue signing messages on a channel.**

Because subscribers verify the author's signature by using the channel address as the public signature key, any new signature keys will result in invalid signatures.

Therefore, to prove to subscribers that the new signatures are still valid on the channel, the author must sign and publish a `ChangeKey` message.

```rust
let change_key = author.change_key();
```

By publishing a `ChangeKey` message, the author's state is updated with new signature keys.

## Linking

The `ChangeKey` message should be linked to either an `Announce` message or a previous `ChangeKey` message so that subscribers can use a previous public signature key to verify the new one.

See [Linking messages](../guides/linking-messages.md) for more information.

## Next steps

Once your messaging workflows are ready, you're ready to code your application.

Try our guide for [building your first Channels app](../tutorials/build-a-messaging-app.md).
# Linking messages to others

**So that receivers know whether they are processing messages in the correct order, all messages, except the `Announce` message (the first message in a channel), must be linked to another through its message identifier. This topic provides advice for linking messages.**

The way that messages are linked affects whether receivers (the author and subscribers) have the correct information in their [states](../how-it-works.md#states) to be able to process messages correctly.

By linking a message to another, you declare it as a dependency. For example, to allow subscribers to verify a signature in a `SignedPacket` message, that message relies on another that contains the public key such as the `Announce` message. In this case, you could link the signed message to either of those messages that contain the latest public key.

In this example, the subscriber would need to process the `Announce` message before being able to process the `SignedPacket` message.

```rust
let announcement_link = match Address::from_str(&channel_address, &announce_message_identifier){
        Ok(announcement_link) => announcement_link,
        Err(()) => bail!("Failed to create Address from {}:{}", &channel_address, &announce_message_identifier),
    };

// Create a `SignedPacket` message and link it to the message identifier of the `Announce` message
let message = author.sign_packet(&announcement_link, &public_payload, &empty_masked_payload)?;
```


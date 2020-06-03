# Sending links to subscribers

**To let subscribers know about messages on a channel, you must send them the link (channel address and the message identifier). This topic explains how to send links to subscribers.**

All message types include the `link` property, which you can use to get the channel address (`appinst`) and message identifier (`msgid`).

```rust
let announcement = author.announce();
let channel_address = announcement.link.appinst;
let message_identifier = announcement.link.msgid;
```

How you send this link is up to you. For example, if your application is a mobile app, you could send the link through a push notification.

After you send the link, subscribers can then convert it to a link type such as the `Address` type for the Tangle, and use it to get the message from the commmunication channel.

```rust
use iota_streams::app_channels::api::tangle::{Address};

let announcement_link = match Address::from_str(&channel_address, &announce_message_identifier){
        Ok(announcement_link) => announcement_link,
        Err(()) => bail!("Failed to create Address from {}:{}", &channel_address, &announce_message_identifier),
    };
```
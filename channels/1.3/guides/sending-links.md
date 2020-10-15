# Sending links to subscribers

**To let subscribers know about messages on a channel, you must send them the link (channel address and the message identifier). This topic explains how to send links to subscribers.**

All message types include the `link` property, which you can use to get the channel address (`appinst`) and message identifier (`msgid`).

Authors can always request its appinst by calling `author.channel_address()?`. Once a Subscriber has processed an `announce` message, it can do the same on itself using `subscriber.channel_address()?`

However, in order to form a proper `link`, you still need a `msgid` from the specific message you wish to read. These can always be obtained from a `x.send_` method.

```rust
let announcement = author.send_announce()?;
let channel_address = announcement.appinst;
let message_identifier = announcement.msgid;
```

How you send this link is up to you. For example, if your application is a mobile app, you could send the link through a push notification.

After you send the link, subscribers can then convert it to a link type such as the `Address` type for the Tangle, and use it to get the message from the commmunication channel.

```rust
use iota_streams::app_channels::api::tangle::Address;

let announcement_link = match Address::from_str(&channel_address, &announce_message_identifier){
    Ok(announcement_link) => announcement_link,
    Err(()) => bail!("Failed to create Address from {}:{}", &channel_address, &announce_message_identifier),
};
```
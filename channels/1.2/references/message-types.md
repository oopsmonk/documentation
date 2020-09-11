# Message types

**This topic lists the different message types and how to use them.**

Messages can be one of seven types, which can be created and published only by particular roles.

## Managing a channel as an author

The following message types are used by the author to manage the keys to a channel:

|**Message type**| **Description**| **How and when it's used**|
|:-----------|:-----------|:---------------------------------------|
|![Announce](../images/announce.png)| Starts the channel by publishing the author's public signature key and optional public encryption key | Subscribers use the public signature key to verify signatures in `SignedPacket` and `ChangeKey` messages. Subscribers can also use the public encryption key to encrypt their own public encryption keys and publish them in `Subscribe` messages.|
|![Keyload](../images/keyload.png)| Publishes a session key that's encrypted with the public encryption keys of authorized subscribers|Gives authorized subscribers access to decrypt the author's masked payloads in `SignedPacket` and `TaggedPacket` messages and to publish their own masked payloads in `TaggedPacket` messages|

## Managing subscriptions to masked payloads as a subscriber

The following message types are used by subscribers to communicate with the author about access to masked payloads:

|**Message type**| **Description**|  **How and when it's used**|
|:-----------|:-----------|:---------------------------------------|
|![Subscribe](../images/subscribe.png)|Encrypts the subscriber's public encryption key with the author's public encryption key and publishes it| Keeps subscribers anonymous and allows the author to decrypt their public encryption keys to use them to generate and publish session keys in  `Keyload` messages
|![Unsubscribe](../images/unsubscribe.png)| Publishes the subscriber's intent to unsubscribe from the channel|Allows the author to generate future session keys that don't include that subscriber's key, saving computational power

## Publishing signed data as an author

The following message type is used by the author to publish public or masked payloads that are signed:

|**Message type**| **Description**|  **How and when it's used**|
|:-----------|:-----------|:---------------------------------------|
|![SignedPacket](../images/signedpacket.png)|Publishes a signed payload that can be public and/or masked | The signature is used to prove the identity of the author|

## Publishing anonymous data as an author or subscriber

|**Message type**| **Description**|  **How and when it's used**|
|:-----------|:-----------|:---------------------------------------|
|![TaggedPacket](../images/taggedpacket.png)| Publishes public and masked payloads that are authenticated with a [message authentication code](https://searchsecurity.techtarget.com/definition/message-authentication-code-MAC). |The MAC code is used to prove that the message is unchanged. These messages are anonymous, unless the author publishes a `SignedPacket` message and links it to one of them|

## Creating messages

The `Author` and `Subscriber` objects implement a method for each message type that their roles can create.

For example, both roles include a `tagged_packet()` method for creating `TaggedPacket` messages.

## Processing messages

The author and subscribers process messages according to their type, using a corresponding `unwrap()` method.
​
The `unwrap()` method uses the author's or subscriber's state to process a message and extract the message's content.
​
For example, when a subscriber processes a `Keyload` message, the `unwrap_keyload()` method uses the subscriber's state to decrypt the session key. Then, the result of processing the `Keyload` message would be added to the subscriber's spongos state, which can be used to decrypt payloads in future `TaggedPacket` and `SignedPacket` messages.
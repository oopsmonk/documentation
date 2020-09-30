# Build your first Channels application

**This tutorial guides you through the process of building an application, using the Channels protocol. At the end of the tutorial, you will have an example application that publishes a signed message to the Tangle about an API's breaking changes.**

![API workflow](../images/api-workflow.png)

:::info:Just want to run some code?
A full CLI example, including masked payloads is available on [GitHub](https://github.com/JakeSCahill/channels-examples).
:::

## Prerequisites

To complete this tutorial, you need the following:
- [Rust nightly](https://www.rust-lang.org/tools/install)
- (Optional) An IDE that supports Rust autocompletion. We recommend [Visual Studio Code](https://code.visualstudio.com/Download) with the [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer) extension

## References

If you're new to Rust, or don't understand something in the code, the following resources might be useful:

- [Rust Book](https://doc.rust-lang.org/book/)
- [Rust documentation](https://doc.rust-lang.org/std/) (you can also open the documentation offline with the `rustup doc` command)
- IOTA Streams API documentation (use the `cargo doc --open` command to open the API documentation in your default web browser)
- [Types of Channels message](../how-it-works.md#message-types)

## Step 1. Create your project

The best way to start a new project is to use the [Cargo](https://doc.rust-lang.org/book/ch01-03-hello-cargo.html) build tool because it handles a lot of tasks for you such as building your code and downloading and building the dependencies.

In this step, you use Cargo to create a new project and install the dependencies.

1. Use Cargo to create a new project. You can replace `author` with your own project name if you want.

    ```bash
    cargo new author
    ```

    This command creates a new directory that's named after your project.

    Inside that directory is a `Cargo.toml` file, which contains your project's configuration settings.

2. Open the `Cargo.toml` file, and add the following dependencies under the `[DEPENDENCIES]` section

    ```bash
    anyhow = { version = "1.0", default-features = false }
    iota-streams = { git = "https://github.com/iotaledger/streams", branch  = "develop"}
    iota-core = { git = "https://github.com/iotaledger/iota.rs", rev = "03cf531" }
    ```

Now you have all the dependencies, you're ready to start coding.

Your project should look like this:

```
src/
    main.rs
Cargo.toml
```

## Step 2. Announce the API channel

In this step, you write a function that announces a new channel. This channel is the one on which your API author will publish messages for subscribers to read.

1. In the `src` directory, create a new directory called `api_author` and create two files inside it: `mod.rs` and `announce.rs`

    Your project should now look like this:

    ```
    src/
        main.rs
        api_author/
            mod.rs
            announce.rs
    Cargo.toml
    ```

2. In the `announce.rs` file, import the dependencies

    ```rust
    use iota_streams::app_channels::api::tangle::{Author, Transport, Address};
    use anyhow::{Result};
    ```

3. Create a function called `start_a_new_channel`

    ```rust
    pub fn start_a_new_channel<T: Transport>(author: &mut Author, client: &mut T, send_opt: T::SendOptions) -> Result<Address> {
    }
    ```

    :::info:
    In Rust, it's best practice to follow the convention of using underscores to separate words (snake_case) in the names of functions and variables.
    :::   

4. Create the channel

    ```rust
    let announcement = author.announce()?;
    client.send_message_with_options(&announcement, send_opt)?;
    println!("Channel published");
    ```

    :::info:
    The [`?`](https://doc.rust-lang.org/edition-guide/rust-2018/error-handling-and-panics/the-question-mark-operator-for-easier-error-handling.html) operator is for handling any errors that may be produced while creating the message.
    :::

    The `send_message_with_options()` method uses the IOTA client library to convert messages into bundles and send the resulting transactions to a node.

    This method returns an error only if the bundle was not sent to the IOTA node. Therefore, if you see no error, the bundle was sent.

5. Return the `Announce` message link which contains the channel address (`appinst`) and the announce message identifier (`msgid`)

    ```rust
     Ok(announcement.link)
    ```

    As an author, you must [send the link](../guides/sending-links.md) to anyone who wants to read the message. In this tutorial, you'll do this by passing them to the subscriber as command-line arguments.

6. In the `mod.rs` file, add the following to expose this module and the `send_message` module (to be defined below) to the rest of your project

    ```rust
    pub mod announce;
    pub mod send_message;
    ```

## Step 3. Publish a public payload about breaking changes

In this step, you write a function that creates and publishes an alert about breaking changes to the API. The message will be signed and public to allow all subscribers to read it and verify that the API sent it.

1. In the `api_author` directory, create a new file called `send_message.rs`

    Your project should now look like this:

    ```
    src/
        main.rs
        api_author/
            mod.rs
            announce.rs
            send_message.rs
    Cargo.toml
    ```

2. In the `send_message.rs` file, import the dependencies

    ```rust
    use iota_streams::ddml::types::Bytes;
    use iota_streams::app_channels::api::tangle::{
        Author, Address, Transport
    };
    use anyhow::{Result, bail};
    ```

3. Create a function called `send_signed_message` to take the message and publish it

    ```rust
    pub fn send_signed_message<T: Transport>(author: &mut Author, channel_address: &String, announce_message_identifier: &String, public_payload: &String, client: &mut T, send_opt: T::SendOptions ) -> Result<Address> where T::SendOptions: Copy {
    }
    ```

    As well as the author, this method takes a public payload to publish on the channel, and the message identifier of the `Announce` message to link to.

    For more information about linking, see [Linking messages](../guides/linking-messages.md).

4. Convert the public payload to a `Bytes` type to be able to send it to a node

    ```rust
    let public_payload = Bytes(public_payload.as_bytes().to_vec());
    ```

5. Convert the channel address and the `Announce` message identifier to a link of `Address` type to be able to connect it to the message about breaking changes

    ```rust
    let announcement_link = match Address::from_str(&channel_address, &announce_message_identifier){
        Ok(announcement_link) => announcement_link,
        Err(()) => bail!("Failed to create Address from {}:{}", &channel_address, &announce_message_identifier),
    };
    ```

6. Create a `SignedPacket` message, using the payloads and the announcement link

    ```rust
    let empty_masked_payload = Bytes("".as_bytes().to_vec())
    let message = author.sign_packet(&announcement_link, &public_payload, &empty_masked_payload)?;
    println!("Sending signed message");
    ```

    The `sign_packet()` method expects a public payload and a masked payload. Here, the masked payload is empty because it can't be encrypted without first creating a `Keyload` message.

    See [Publishing encrypted data](../guides/publishing-encrypted-data.md) for more information.

7. Publish the message on the channel

    ```rust
    client.send_message_with_options(&message.0, send_opt)?;
    println!("Published signed message");
    ```

8. Publish the `Sequence` message on the channel (You can skip this step if your are not using multi branching. See [Multi branching using Sequencing](../guides/multi-branch-sequence.md) for more information.)

    ```rust
    let sequence = message.1.unwrap();
    client.send_message_with_options(&sequence, send_opt)?;
    println!("Published sequence message");
    ```

    `message.1` is not available when we are not using multi branching on the author, thus we need to unwrap the `Option` first.

9. Return the `Sequence` message identifier

    ```rust
     Ok(sequence.link)
    ```
    If you are not using multi branching, there is no need to publish the message in step 8. In that case you return the signed message link instead
    ```rust
     Ok(message.0.link)
    ```

## Step 4. Create the author

In this step, you create the main function that calls the ones you just created.

1. In the `src/main.rs` file, import the dependencies, including the functions in the `api_author` module that you just created

    ```rust
    use iota_streams::{
        app_channels::api::tangle::{Author}
    };

    mod api_author;
    use crate::api_author::announce::start_a_new_channel;
    use crate::api_author::send_message::send_signed_message;
    use crate::api_author::get_subscribers::get_subscriptions_and_share_keyload;
    use crate::api_author::send_masked_payload::send_masked_payload;

    use iota_streams::app::{
        transport::tangle::{
            PAYLOAD_BYTES,
            client::{
                SendTrytesOptions,
                RecvOptions
            }
        }
    };

    use iota::{client as iota_client};
    ```

2. In the `main()` function, connect to a node and change the default settings to use remote proof of work

    ```rust
    let mut client = iota_client::Client::get();
    iota_client::Client::add_node("https://nodes.devnet.iota.org:443").unwrap();

    let mut send_opt = SendTrytesOptions::default();
    send_opt.min_weight_magnitude = 9;
    send_opt.local_pow = false;
    
    let encoding = "utf-8";
    ```

3. Create an instance of the `Author` object

    ```rust
    let multi_branching_flag = true;
    let mut author = Author::new("MYAUTHORSECRETSTRINGAPWOQ9", encoding, PAYLOAD_BYTES, multi_branching_flag);
    ```

    Depending on the `multi_branching_flag` here, you have to send an extra message in step 3.8 for your message to be read. 
    For more information about creating an author, see [Creating a new channel](../guides/creating-a-new-channel.md).

    :::danger:Do not share the secret string
    In production applications, you should change the author's secret string.

    The same secret string will always result in the same seed. Therefore, you should not share it with anyone, otherwise you risk giving others ownership of your channel.
    :::

4. Get the author's channel address and convert it to a string of trytes so you can later print it to the console

    ```rust
    let channel_address = author.channel_address().to_string();
    ```

    The channel address can also be obtained through the announce message link obtained below (`appinst` field). 

5. Call your module's functions to publish the `Announce` and `SignedPacket` messages

    ```rust
    // announce_message is a link, thus it contains the channel address (appinst) and message identifier (msgid)
    let announce_message = start_a_new_channel(&mut author, &mut client, send_opt).unwrap();
    let announce_msgid = announce_message.msgid.to_string();
  
    let public_payload = "BREAKINGCHANGES";

    // signed_message is a link, thus it contains the channel address (appinst) and message identifier (msgid)
    let signed_message = send_signed_message(&mut author, &channel_address, &announce_msgid, &public_payload.to_string(), &mut client, send_opt).unwrap();

6. Print the command for subscribing to the channel to the console

    ```rust
    println!("");
    println!("Now, in a new terminal window, use the subscriber to publish a `Subscribe` message on the channel");
    println!("");
    println!("cargo run --release --bin subscriber {} {} {}", channel_address, announce_msgid, signed_message.msgid);
    println!("");
    ```

    The subscriber needs all this information to get the messages from the channel.

## Step 5. Set up the subscriber

In this step, you write a function to read the API author's message from the Tangle and verify it. 

1. Inside the `src` directory, create a new directory called `bin`

2. Inside the `bin` directory, create a file called `subscriber.rs`

    Your project should now look like this:

    ```
    src/
        main.rs
        api_author/
            mod.rs
            announce.rs
        bin/
            subscriber.rs
    Cargo.toml
    ```

3. Add the following at the top of the file to import your dependencies

    ```rust
    use iota::client as iota_client;

    use iota_streams::app_channels::{
        api::tangle::{
            Address, Transport, Subscriber
        }, message
    };
    use iota_streams::app::transport::tangle::{
        PAYLOAD_BYTES,
        client::{
            SendTrytesOptions,
            RecvOptions,
        }
    };

    use anyhow::{Result, ensure, bail};
    use std::env;
    ```

4. Define a new function called `find_message_link_opt_sequence`

    ```rust
    fn find_message_link_opt_sequence<T: Transport>(subscriber: &mut Subscriber, channel_address: &String, message_identifier: &String, client: &mut T, recv_opt: T::RecvOptions) -> Result<Address> where T::RecvOptions: Copy {
    }
    ```
    With this method we will be transforming the channel address and message identifier into a valid link (of type `Address`) for us to find on the Tangle.
    The implementation of the link changes based on the authors choice of single and multi branching,

5. Create the initial message link based on channel address and message identifier

    ```rust
    let mut message_link = match Address::from_str(&channel_address, &message_identifier){
        Ok(message_link) => message_link,
        Err(()) => bail!("Failed to create Address link from {}:{}", &channel_address, &message_identifier),
    };
    ```
6. If we are on multi branching, get and parse the `Sequence` messages by checking the header

    ```rust
    if subscriber.get_branching_flag() == 1 {
        let msg = client.recv_messages_with_options(&message_link, recv_opt)?;
        for tx in msg.iter() {
            let preparsed = tx.parse_header()?;
            ensure!(
                preparsed.check_content_type(&message::SEQUENCE),
                "Wrong message type: {}",
                preparsed.header.content_type
            );
            println!("Found a sequence message, unwrapping message location");
            message_link = subscriber.unwrap_sequence(preparsed.clone())?;
            break;
        }
    }
    Ok(message_link)
    ```

    You need to iterate through messages here because the Tangle may contain more than one `Sequence` message with your channel address and message identifier.
    For example, an author may have sent the same `Sequence` message more than once, or someone else may have reattached the `Sequence` message.

    However, if we are on single branch, all that we need is the `message_link`. On multi branch, the `Sequence` message points to another message. 
7. Define a new function called `get_announcement`

    ```rust
    fn get_announcement<T: Transport>(subscriber: &mut Subscriber, channel_address: &String, announce_message_identifier: &String, client: &mut T, recv_opt: T::RecvOptions) -> Result<()> where T::RecvOptions: Copy, {
    }
    ```

8. Use the `find_message_link_opt_sequence` function to generate a usable link, and use the `client` object to get the message from the Tangle 
    ```rust
    let announcement_link = find_message_link_opt_sequence(subscriber, channel_address, announce_message_identifier, client, recv_opt)?;
    let list = client.recv_messages_with_options(&announcement_link, recv_opt)?;
    ```

9. Iterate through the returned messages and make sure that they are `Announce` messages by checking the header

    ```rust
    for tx in list.iter() {
        let header = tx.parse_header()?;
        ensure!(header.check_content_type(&message::ANNOUNCE), "Content type should be announce type");
        subscriber.unwrap_announcement(header.clone())?;
        println!("Found and verified {} message", header.content_type());
        break;
    }
    Ok(())
    ```

    :::info:
    The `unwrap_announcement()` method verifies any `Announce` messages that it finds by validating the signature against the channel address.

    This method also saves the author's information in the subscriber's [state](../how-it-works.md#states) so that you can use it to read other messages without having to unwrap the announcement again.
    :::

10. Define a new function called `get_messages`, which is similar to the `get_announcement` function, except it finds and verifies `SignedPacket` messages

    ```rust
    fn get_signed_messages<T: Transport>(subscriber: &mut Subscriber, channel_address: &String, signed_message_identifier: &String, client: &mut T, recv_opt: T::RecvOptions) -> Fallible<()> where T::RecvOptions: Copy {
        
        let message_link = find_message_link_opt_sequence(subscriber, channel_address, signed_message_identifier, client, recv_opt)?;
        let list = client.recv_messages_with_options(&message_link, recv_opt)?;

        for tx in list.iter() {
            let header = tx.parse_header()?;
            ensure!(header.check_content_type(&message::SIGNED_PACKET), "Content type should be signed type");

            // First element of the tuple returned is the public key
            // Second and third are the public and masked payloads respectively
            let (public_payload, masked_payload) = match subscriber.unwrap_signed_packet(header.clone()) {
              Ok(result) => (result.1, result.2),
             Err(error) => bail!(error),
            };

            let pub_msg = String::from_utf8(public_payload.0).unwrap();
            let priv_msg = String::from_utf8(masked_payload.0).unwrap();

            println!("Found and verified messages");
            println!("Public message: {}, private message: {}", pub_msg, priv_msg);
            break;
        }
        Ok(())
    }
    ```

11. In the `main()` function, add the code to connect to a node, and call the functions

    ```rust
    // Create a new subscriber
    // REPLACE THE SECRET WITH YOUR OWN
    let encoding = "utf-8";
    let mut subscriber = Subscriber::new("MYSUBSCRIBERSECRETSTRING", encoding, PAYLOAD_BYTES);

    // Connect to a node
    let mut client = iota_client::Client::get();
    iota_client::Client::add_node("https://nodes.devnet.iota.org:443").unwrap();

    // Get the arguments that were passed to the subscriber
    let args: Vec<String> = env::args().collect();

    let channel_address = &args[1];
    let announce_message_identifier = &args[2];
    let signed_message_identifier = &args[3];

    let recv_opt = RecvOptions::default();

    match get_announcement(&mut subscriber, &channel_address, &announce_message_identifier, &mut client, recv_opt){
        Ok(()) => (),
        Err(error) => println!("Failed with error {}", error),
    }

    match get_signed_messages(&mut subscriber, &channel_address, &signed_message_identifier, &mut client, recv_opt){
        Ok(()) => (),
        Err(error) => println!("Failed with error {}", error),
    }
    ```

    :::danger:Do not share the secret string
    In production applications, you should change the subscriber's secret string.

    The same secret string will always result in the same seed. Therefore, you should not share it with anyone, otherwise you risk giving others ownership of your subscriber's messages.
    :::

:::success:Congratulations :tada:
You've got an API author application that publishes an alert on your channel, and you've got a subscriber application that reads and verifies the message.
:::

## Next steps

Take a look at the [full example](https://github.com/JakeSCahill/channels-examples) and get involved by discussing your own ideas in the #streams-discussion channel on [Discord](https://discord.iota.org/).

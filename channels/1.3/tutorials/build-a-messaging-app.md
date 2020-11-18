# Build your first Channels application

**This tutorial guides you through the process of building an application, using the Channels protocol. At the end of the tutorial, you will have an example application that publishes a signed message to the Tangle about an API's breaking changes.**

![API workflow](../images/api-workflow.png)

:::info:Just want to run some code?
A full CLI example, including masked payloads is available on [GitHub](https://github.com/kwek20/channels-examples.git).
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
    iota-streams = { git = "https://github.com/iotaledger/streams", branch  = "master"}
    iota-core = { git = "https://github.com/iotaledger/iota.rs", branch = "iota-1.0" }
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
    pub fn start_a_new_channel<T: Transport>(author: &mut Author<T>) -> Result<Address> {
    }
    ```

    :::info:
    In Rust, it's best practice to follow the convention of using underscores to separate words (snake_case) in the names of functions and variables.
    :::   

4. Create the channel

    ```rust
    // Create an `Announce` message to start the channel
    let announce_result = author.send_announce()?;
    println!("Channel published");
    ```

    :::info:
    The [`?`](https://doc.rust-lang.org/edition-guide/rust-2018/error-handling-and-panics/the-question-mark-operator-for-easier-error-handling.html) operator is for handling any errors that may be produced while creating the message.
    :::

    This method returns an error only if the bundle was not sent to the IOTA node. Therefore, if you see no error, the bundle was sent.

5. Return the `Announce` message link which contains the channel address (`appinst`) and the announce message identifier (`msgid`)

    ```rust
     Ok(announce_result)
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
    pub fn send_signed_message<T: Transport>(author: &mut Author<T>, channel_address: &String, announce_message_identifier: &String, public_payload: &String) -> Result<Address> {

    ```

    As well as the author, this method takes a public payload to publish on the channel, and the message identifier of the `Announce` message to link to.

    For more information about linking, see [Linking messages](../guides/linking-messages.md).

4. Convert the public payload to a `Bytes` type to be able to send it to a node

    ```rust
    let public_payload = Bytes(public_payload.as_bytes().to_vec());
    ```

5. Convert the channel address and the `Announce` message identifier to a link of `Address` type to be able to link it to the message about breaking changes

    ```rust
    let announcement_link = match Address::from_str(&channel_address, &announce_message_identifier){
        Ok(announcement_link) => announcement_link,
        Err(()) => bail!("Failed to create Address from {}:{}", &channel_address, &announce_message_identifier),
    };
    ```

6. Create a `SignedPacket` message, using the payloads and the announcement link

    ```rust
    let empty_masked_payload = Bytes("".as_bytes().to_vec())
    let (msg, seq) = author.send_signed_packet(&announcement_link, &public_payload, &empty_masked_payload)?;
    ```

    The `send_signed_packet()` method expects a public payload and a masked payload. Here, the masked payload is empty because it can't be encrypted without first creating a `Keyload` message.

    See [Publishing encrypted data](../guides/publishing-encrypted-data.md) for more information.
7. Return the message identifier

    ```rust
     Ok(seq.unwrap_or(msg))
    ```
    If you are using [multi branching](../guides/multi-branch-sequence.md), you need to return the sequence message. Otherwise you return the signed message link instead.


## Step 4. Create the author

In this step, you create the main function that calls the ones you just created.

1. In the `src/main.rs` file, import the dependencies, including the functions in the `api_author` module that you just created

    ```rust
    use iota_streams::app_channels::api::tangle::Author;

    mod api_author;
    use crate::api_author::announce::start_a_new_channel;
    use crate::api_author::send_message::send_signed_message;

    use iota_streams::app::{
        transport::tangle::{
            PAYLOAD_BYTES,
            client:: {
                Client,
                SendTrytesOptions
            }
        }
    };

    use iota::client as iota_client;
    ```

2. In the `main()` function, connect to a node and change the default settings to use remote proof of work

    ```rust
    let mut send_opt = SendTrytesOptions::default();
    // default is 14
    send_opt.min_weight_magnitude = 9;
    send_opt.local_pow = false;

    let url = "https://nodes.devnet.iota.org:443";

    // Connect to an IOTA node
    let client: Client = Client::new(send_opt, iota_client::ClientBuilder::new().node(url).unwrap().build().unwrap());
    
    ```
    In case you dont need to change any options, and the node you use is at the same computer and default port (14265), you can quickly make a client instance.
    ```rust
    let client = Client::default();
    ```
    Alternatively; you may start with just an URL using the following:
    ```rust
    let client = Client::new_with_node(url);
    ```

3. Create an instance of the `Author` object

    ```rust
    let encoding = "utf-8";
    let multi_branching_flag = true;
    let mut author = Author::new("MYAUTHORSECRETSTRINGAPWOQ9", encoding, PAYLOAD_BYTES, multi_branching_flag, client);
    ```
    For more information about creating an author, see [Creating a new channel](../guides/creating-a-new-channel.md).

    :::danger:Do not share the secret string
    In production applications, you should change the author's secret string.

    The same secret string will always result in the same seed. Therefore, you should not share it with anyone, otherwise you risk giving others ownership of your channel.
    :::

4. Get the author's channel address and convert it to a string of trytes so you can later print it to the console

    ```rust
    let channel_address = author.channel_address().unwrap().to_string();
    ```
    The channel address can also be obtained through the announce message link obtained below (`appinst` field).


5. Call your module's functions to publish the `Announce` and `SignedPacket` messages

    ```rust
    // announce_message is a link, thus it contains the channel address (appinst) and message identifier (msgid)
    let announce_message = start_a_new_channel(&mut author).unwrap();
    let announce_msgid = announce_message.msgid.to_string();

    let public_payload = "BREAKINGCHANGES";

    // signed_message is a link, thus it contains the channel address (appinst) and message identifier (msgid)
    let signed_message = send_signed_message(&mut author, &channel_address, &announce_msgid, &public_payload.to_string()).unwrap();

6. Print the command for subscribing to the channel to the console

    ```rust
    println!("");
    println!("Now, in a new terminal window, use the subscriber to publish a `Subscribe` message on the channel");
    println!("");
    println!("cargo run --release --bin subscriber {} {} {}", 
        channel_address, 
        announce_msgid, 
        signed_message.msgid);
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

    use iota_streams::app_channels::api::tangle::{
        Address, Transport, Subscriber
    };
    use iota_streams::app::transport::tangle::{
        PAYLOAD_BYTES,
        client::{
            Client,
            SendTrytesOptions
        }
    };

    use anyhow::{Result, bail};
    use std::env;
    ```

4. Define a new function called `create_message_link`

    ```rust
    fn create_message_link(channel_address: &String, message_identifier: &String) -> Result<Address> {
    }
    ```
    With this method we will be changing the address and identifier into a valid link for us to find on the Tangle.
    The implementation of the link changes based on the authors choice of single and multi branching,

5. Create the initial message link based on address and identifier

    ```rust
    let message_link = match Address::from_str(&channel_address, &message_identifier){
        Ok(message_link) => message_link,
        Err(()) => bail!("Failed to create Address from {}:{}", &channel_address, &message_identifier),
    };
    ```
6. Return the message link for use in the Client

    ```rust
    Ok(message_link)
    ```
7. Define a new function called `get_announcement`

    ```rust
    fn get_announcement<T: Transport>(subscriber: &mut Subscriber<T>, channel_address: &String, announce_message_identifier: &String) -> Result<()> {
    }
    ```

8. Use the `create_message_link` function to generate a usable link, and use the `client` object to get the message from the Tangle 
    ```rust
    // Convert the channel address and message identifier to a link
    let announcement_link = match create_message_link(&channel_address, &announce_message_identifier){
        Ok(announcement_link) => announcement_link,
        Err(error) => bail!(error),
    };
    ```

9. Receive the `Announce` message

    ```rust
    println!("Receiving announcement message");
    subscriber.receive_announcement(&announcement_link)?;

    Ok(())
    ```

    :::info:
    The `receive_announcement()` method verifies any `Announce` messages that it finds by validating the signature against the channel address.

    This method also saves the author's information in the subscriber's [state](../how-it-works.md#states) so that you can use it to read other messages without having to unwrap the announcement again.
    :::

10. Define a new function called `get_signed_messages`, which is similar to the `get_announcement` function, except it finds and verifies `SignedPacket` messages

    ```rust
    fn get_signed_messages<T: Transport>(subscriber: &mut Subscriber<T>, channel_address: &String, signed_message_identifier: &String) -> Result<()> {
        // Convert the channel address and message identifier to a link
        let message_link = match create_message_link(&channel_address, &signed_message_identifier){
            Ok(message_link) => message_link,
            Err(error) => bail!(error),
        };

        // First returned value is the senders public key. We wont be using that in this tutorial
        let (_, public_payload, masked_payload) = subscriber.receive_signed_packet(&message_link)?;
        println!("Found and verified message");
        println!("Public message: {:?}, private message: {:?}", 
            String::from_utf8(public_payload.0), String::from_utf8(masked_payload.0));
        Ok(())
    }
    ```

11. In the `main()` function, add the code to connect to a node, and call the functions

    First we create the `Client`, which is in exactly the same way as the `Author`

    ```rust
    // Change the default settings to use a lower minimum weight magnitude for the Devnet
    let mut send_opt = SendTrytesOptions::default();
    // default is 14
    send_opt.min_weight_magnitude = 9;
    send_opt.local_pow = false;

    let url = "https://nodes.devnet.iota.org:443";

    // Connect to an IOTA node
    let client: Client = Client::new(send_opt, iota_client::ClientBuilder::new().node(url).unwrap().build().unwrap());
    ```

    Then we create our Subscriber instance, and collect the details we received from the Author in order to start the program.
    ```rust
    let encoding = "utf-8";
    let mut subscriber = Subscriber::new("MYSUBSCRIBERSECRETSTRING", encoding, PAYLOAD_BYTES, client);

    let args: Vec<String> = env::args().collect();

    let channel_address = &args[1];
    let announce_message_identifier = &args[2];
    let signed_message_identifier = &args[3];
    ```

    And finally, we call the methods we created!
    ```rust
    match get_announcement(&mut subscriber, &channel_address.to_string(), &announce_message_identifier.to_string()){
        Ok(()) => (),
        Err(error) => println!("Failed with error {}", error),
    }

    match get_signed_messages(&mut subscriber, &channel_address.to_string(), &signed_message_identifier.to_string()){
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

Take a look at the [full example](https://github.com/kwek20/channels-examples.git) and get involved by discussing your own ideas in the #streams-discussion channel on [Discord](https://discord.iota.org/).

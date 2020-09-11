# Building a Streams application

**This topic guides you through the process of building a Streams application. At the end of the article, you will have an understanding of how to build your own Streams application.**

## Define what your application will do

The first step of any application is to define what you want it to do. At this stage you should do the following:

- Describe the roles that users will have in your application
- Choose the cryptography that you will use in messages

Using this information, you can start to map out your message types.

### Describe the roles

The role of users can affect the actions that they do in an application.

For example, in Channels, users can be an author or a subscriber. The author is the owner of the application and controls all aspects of it, including who has access to encrypted data. On the other hand, subscribers have a passive role. Without the author's authorization, subscribers can only send public data or verify the author's signature in signed messages.

The actions that each role can do depends a lot on the cryptography that your application uses.

### Choose the cryptography

Cryptography is what makes Streams so powerful. Built into the framework are the following cryptographic tools:

- Sponge-based Spongos automaton for authenticated encryption, hashing, pseudo-random number generation
- [Ed25519 signature scheme](https://tools.ietf.org/html/rfc8032)
- [X25519 Diffie-Hellman key exchange](https://tools.ietf.org/html/rfc7748)

## Describe your message types

After laying out the users' roles and the cryptography that you want to use, you can start to give your application some shape by describing the message types.

Message types define the rules for processing messages and are written in a custom syntax called [Streams DDML](#streams-ddml-messaging).

Streams DDML is a cryptographic message definition language that we built for Streams messages.

Streams DDML builds on the idea of [Protocol Buffers](https://en.wikipedia.org/wiki/Protocol_Buffers) by adding keywords that indicate how a certain message field should be processed.

Streams DDML is highly extensible so that it's easy to add new keywords for your own applications.

## Write some methods to create, publish, and process messages

After creating your message types, you can write the methods for creating, publishing, and processing them.

## Next steps

We'll be adding more information about building Streams applications in the near future.

In the meantime, take a look at the [Channels protocol](root://channels/1.2/overview.md) and get involved by discussing your own ideas in the #streams-discussion channel on [Discord](https://discord.iota.org/).




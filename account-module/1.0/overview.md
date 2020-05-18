# Account module

**The account module is a stateful package that simplifies IOTA payments without the worry of withdrawing from spent addresses or the need to promote and reattach pending transactions.**

With the account module, you can:

- Store pending transactions locally
- Handle the promotion and reattachment of pending transactions with a predefined strategy
- Keep track of expired addresses to avoid withdrawing from spent addresses
- Listen for different events, for example every new deposit, or every confirmed outgoing transaction

## Limitations

To benefit from the account module, both the sender and receiver must use it to send transactions.

## Supported languages

### **Official support** ###

---------------

#### **Go** ####
[Link](/getting-started/get-started-go.md)
---

#### **Java** ####
[Link](/getting-started/get-started-java.md)
---

#### **JavaScript** ####
[Link](/getting-started/get-started-js.md)
---

---------------

## Blog posts

---------------
#### **Stateful Client Libraries: Part 1** ####
[Part 1](https://blog.iota.org/stateful-client-libraries-part1-30b334372a37)

An overview of the account module.
---

#### **Stateful Client Libraries: Part 2** ####
[Part 2](https://blog.iota.org/stateful-client-libraries-part-2-d15752922780)

An overview of conditional deposit addresses.
---------------

## Source code

The source code for this project is hosted on [Github](https://github.com/iotaledger/iota.js/tree/next/packages/account).

## Next steps

[Learn how the account module works](/how-it-works.md).
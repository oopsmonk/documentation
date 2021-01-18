# Accounts

**IOTA accounts allow you to prove your ownership of IOTA tokens or messages. This section introduces you to accounts.**

## Hiearchical Deterministic Wallets

Following our Chrysalis updates, IOTA adopted full support for Hierarchical Deterministic (HD) Wallets. An HD wallet is a digital wallet that automatically generates a hierarchical tree-like structure of private/public addresses (or keys), thereby addressing the problem of the user having to generate them on their own.

The benefit of users having the HD wallet is two-fold:

- Increased privacy - since blockchains are public ledgers, where all transactions and balances can be seen by anyone, having multiple addresses would not allow others to know your exact balance
- Increased security - the user who has access to an address’s private keys would have access to the funds on an address. Since you’d have diversified your funds over multiple addresses, others would need to get multiple private keys to get access to all your crypto assets

## Keys

Once you’ve used an IOTA address to receive funds, a new one would be generated for you to use. These addresses, also known as public keys, are still governed by a single key pair. This means that any previous addresses you’ve used are still completely usable and that you wouldn’t lose control of them. The funds on each of these addresses can only be accessed by using its matching private key.

- The key pair that governs all your addresses is known as the Extended [Key Pair](https://www.ledger.com/academy/blockchain/what-are-public-keys-and-private-keys), consisting of the **Extended Public Key** and the **Extended Private Key.** The most important of the two would be the Extended Private Key. This key is the base from which all of your addresses’ private keys are derived. Or in other words: **the Extended Private Key is the master key to all the Private Keys belonging to an account**. 
- The Extended Public Key can instead be used to view the balance of all your different addresses 

## Next steps

[Learn more about seeds](../accounts/seeds.md).
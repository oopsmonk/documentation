# Generating an address

**This topic describes the steps involved in generating an address for a seed.**

Addresses are generated from the following:

- **A seed:** The master key to addresses and their private keys
- **An index:** A number, starting from 0 that results in a completely new address 
- **A security level:** A number that affects how long private keys are, how secure a spent address is against brute-force attacks, and how many transactions are needed to contain signatures

All addresses are **deterministic**, meaning that the same seed, index, and security level will always generate the same address. For details about the cryptography involved in generating addresses, see [How addresses are generated](../cryptography/addresses.md).

## Choosing an index

When generating an address, you can choose any index, but for simplicity, it's best practice to start from 0.

```js
iota.getNewAddress(seed, { index: 0, securityLevel: securityLevel, total: 1 })
```

:::info:
It's important to keep track of the indexes of any addresses that you've generated to avoid withdrawing from [spent addresses](../references/glossary.md#spent-address).
:::

## Choosing a security level

Addresses can have a security level of 1, 2, or 3, and each one generates a different address for each index.

The greater the security level, the longer the address's private key, which results in a longer and more secure signature of the same length.

| **Security Level** | **Private key and signature length in trytes** |
| :-------------- | :-------------------------- |
| 1              | 2,187 (not recommended)|
| 2              | 4,374 (used by Trinity)         |
| 3              | 6,561 (most secure)           |

The security level of an address corresponds to the same number of transactions that are needed to contain the signature. For example, when an address has a security level of 3, its signature is 6,561 trytes long, but the `signatureMessageFragment` field of a single transaction can contain only 2,187 trytes. As a result, you would need to fragment the other 4,374 trytes of the signature over 2 additional zero-value transactions. For details of the transactions fields, see [Transactions](../understanding-iota/transactions.md)

:::info:
Each transaction must contain a proof of work. Therefore, the greater the security level, the more proof of work that must be done to transfer IOTA tokens from the address.
:::

If you're building an application where your users aren't familiar with IOTA and you are concerned about them depositing into spent addresses, you may want to use security level 3 as a precaution.

If you're building an application that relies on fast transactions, you may want to use security level 2. This way, you can benefit from smaller bundles, less proof of work, and faster transaction signing.

If your application is running on a power-constrained device, you may want to use security level 2 to reduce the amount of energy needed to create and sign transactions.

<iframe height="400px" width="100%" src="https://repl.it/@jake91/Generate-an-address?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Next steps

The sample code in this topic uses the JavaScript client library. For tutorials in other languages see the [Core client library](root://core/1.0/overview.md) documentation.

To continue learning about how to transfer IOTA tokens, see [Getting test tokens](../clients/getting-test-tokens.md).


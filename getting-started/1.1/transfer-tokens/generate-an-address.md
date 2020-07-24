# Generate two addresses

**In this tutorial, you learn how to generate new addresses. You will generate two addresses: One to send IOTA tokens to from a faucet and one to transfer those IOTA tokens to, using code.**

Generating an address involves the following steps:

1. Define your seed
2. Choose a security level
3. Choose an index

## Prerequisites

To complete this tutorial, you need the following:

- A [developer environment for Node.js](../first-steps/set-up-env.md)
- [A seed](../transfer-tokens/create-a-seed.md)

In this tutorial, you'll connect to a node that's run by the IOTA Foundation in the Devnet: A development network.

## Step 1. Define your seed

Your seed is the master key to your addresses.

You must keep this seed safe because anyone who has it can use it to generate your addresses, prove ownership of them by signing a value transaction, and ultimately steal your IOTA tokens.

For simplicity, this example hard codes the seed in the JavaScript file. But for security, you should be more careful, for example by reading it from an encrypted file.

```js
const Iota = require('@iota/core');

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
});

const seed =
    'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';
```

## Step 2. Choose a security level

Addresses can have a security level of 1, 2, or 3, and each one generates a different address for each index.

The greater the security level, the longer the address's private key, which results in a longer and more secure signature of the same length.

| **Security Level** | **Private key and signature length in trytes** |
| :-------------- | :-------------------------- |
| 1              | 2,187 (not recommended)|
| 2              | 4,374 (used by Trinity)         |
| 3              | 6,561 (most secure)           |

The security level of an address corresponds to the same number of transactions that are needed to contain the signature. For example, when an address has a security level of 3, its signature is 6,561 trytes long, but the `signatureMessageFragment` field of a single transaction can contain only 2,187 trytes. As a result, you would need to fragment the other 4,374 trytes of the signature over 2 additional zero-value transactions. For details of the transactions fields, see [Transaction fields](../references/transaction-fields.md)

:::info:
Each transaction must contain a proof of work. Therefore, the greater the security level, the more proof of work that must be done to transfer IOTA tokens from the address.
:::

If you're building an application where your users aren't familiar with IOTA and you are concerned about them depositing into spent addresses, you may want to use security level 3 as a precaution.

If you're building an application that relies on fast transactions, you may want to use security level 2. This way, you can benefit from smaller bundles, less proof of work, and faster transaction signing.

If your application is running on a power-constrained device, you may want to use security level 2 to reduce the amount of energy needed to create and sign transactions.

 ```js
const securityLevel = 2;
```

## Step 3. Choose an index

When generating an address, you can choose any index. Each index changes the resulting address.

For simplicity, it's best practice to start from 0 because it's important to keep track of the indexes of any addresses that you've generated to avoid withdrawing from [spent addresses](../accounts/addresses.md#one-time-address).

```js
let index = 0;
```

## Step 4. Generate your address

Use the [`getNewAddress()`](https://github.com/iotaledger/iota.js/blob/next/api_reference.md#module_core.getNewAddress) method to generate an unspent address.

The `total` parameter is for specifying how many addresses to generate. In this case, you need two.

```js
iota.getNewAddress(seed, { index: index, securityLevel: securityLevel, total: 2 })
    .then(address => {
        console.log('Your address is: ' + address);
    })
    .catch(err => {
        console.log(err)
    });
```

Starting from the given index, the connected node checks if the address is spent by doing the following:

- Search its view of the Tangle for input transactions that withdraw from the address
- Search for the address in the list of spent addresses

If an address with the given index is spent, the index is incremented until the IOTA node finds one that isn't spent.

In the console, you should see two addresses.

```
Your addresses are: WKJDF9LVQCVKEIVHFAOMHISHXJSGXWBJFYEQPOQKSVGZZFLTUUPBACNQZTAKXR9TFVKBGYSNSPHRNKKHA,CHMZRJOHZ9VMVMRGPBVELECEZNFYSIFWC9QHXZCKICGHPEYESDKZJSPRASKKQ9VTDQXRXIJGVMCQTHJJZ
```

:::success:Congratulations :tada:
You've just generated new addresses that belong to your seed!
:::

## Run the code

We use the [REPL.it tool](https://repl.it) to allow you to run sample code in the browser.

Click the green button to run the sample code in this tutorial and see the results in the window.

<iframe height="600px" width="100%" src="https://repl.it/@jake91/generate-two-addresses?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Next steps

[Get some test IOTA tokens](../transfer-tokens/transfer-iota-tokens.md) for one of your new addresses.

Examples of this tutorial are also available in the following languages:

- [C](root://core/1.0/tutorials/c/generate-an-address.md)
- [Go](root://core/1.0/tutorials/go/generate-an-address.md)
- [Python](root://core/1.0/tutorials/python/generate-an-address.md)
- [Java](root://core/1.0/tutorials/java/generate-an-address.md)


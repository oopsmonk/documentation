# Helping a transaction to become confirmed

**A transaction in the Tangle may remain in a pending state for many reasons. This topic introduces you to the concepts of reattaching, rebroadcasting, or promoting transactions to help them to become confirmed.**

## Reattaching a transaction

Sometimes, transactions are attached to a part of the Tangle that is no longer considered valid. As a result, that transaction will never be referenced by a [milestone](../references/glossary.md#milestone), thus it will never be confirmed.

To reattach a bundle means to create a new one and attach it to a different part of the Tangle. This way, you give your transaction another chance at being included in the consensus.

You may want to reattach a bundle if its transactions have been pending for more than ten minutes. After this time, it is unlikely to be referenced by a milestone.

When you reattach a bundle, you keep most of the original bundle's fields the same, but you request new tip transactions (the new part of the Tangle), and do the proof of work again. As a result, the only fields that change are the following:

- `hash`
- `trunkTransaction`
- `branchTransaction`
- `attachmentTimestamp`
- `nonce`

When you reattach a bundle that transfers IOTA tokens, only one will ever be confirmed. The others will remain pending because they will lead to double spends (spending the same IOTA tokens twice in different transactions).

## Rebroadcasting a transaction

While your transactions are being sent to a node, it may go offline. In this case, the IOTA node may not forward your transactions to its neighbors, and the rest of the network won't ever see your transactions. As a result, that transaction will never be referenced by a milestone, thus it will never be confirmed.

To rebroadcast a bundle means to send the same bundle to a node again. This way, you give your transactions another chance at being forwarded to the rest of the network.

## Promoting a transaction

To promote a bundle means to increase its chances of being selected during tip selection by sending a zero-value transaction that references both its tail transaction and the latest milestone.

Promoting a bundle is often more effective than reattaching a bundle, unless the bundle you're promoting leads to an inconsistent state (double spend) or is older than the last 6 milestones.
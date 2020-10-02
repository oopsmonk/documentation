# Private Tangle

**A private Tangle is an IOTA network that you control and that contains only nodes that you know. A private Tangle uses the same technology as the public IOTA networks, except you control it by running an open-source implementation of the Coordinator called Compass. You can use Compass to allow nodes in your own IOTA network to reach a consensus on Compass' milestones instead of the Coordinator's ones.**

You may want to set up a private Tangle for the following reasons:

- **Explore the technology:** If you have little or no experience with IOTA, you can set up your own private Tangle to help you understand the technology and how you can benefit from it.

- **Set up a faster IOTA network:** If your use cases need a faster network speed than the public IOTA networks can currently provide, you can set up your own private Tangle to increase the number of transactions per second. For example, you could lower the value of the [minimum weight magnitude](root://getting-started/1.1/first-steps/sending-transactions.md#doing-proof-of-work) to make proof of work quicker.

- **Develop and test an application:** If you want to develop or test an application on IOTA, you may want to do so on a private Tangle so that your transactions aren't visible to the public. Having a private Tangle also has the added benefit of being able to reset the network to start all tests from the same point.

- **Showcase the technology:** If you want to show your ideas to others, you may want to set up a private Tangle so you can make sure that everything runs smoothly during your presentation.

## Source code

Go to the Compass source code on [Github](https://github.com/gohornet/hornet/blob/master/plugins/coordinator/plugin.go)

## Further reading 

- [IOTA papers discussing the Tangle and other protocol features](https://www.iota.org/research/academic-papers)
- [A series of posts discussing the removal of the Coordinator](https://blog.iota.org/coordinator-part-1-the-path-to-coordicide-ee4148a8db08)

## Next steps

[Set up a private Tangle](tutorials/install-compass.md).

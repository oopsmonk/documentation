# Best practices for running a node

**When you run a node, you have lots of different options for setting up a reliable architecture. This article gives you some advice that we often give to our partners.**

## Nodes

To increase the chances of your application connecting to an available node, it's often best practice to run one or more local nodes.

To host these nodes it's best to make sure that the host device has enough computational power to run reliably. For example, a good benchmark is to run each node on an instance of a virtual private server such as an [Amazon Web Services (AWS) R5 Large server](https://aws.amazon.com/ec2/instance-types/r5/) with 16 GB RAM and two virtual CPUs.

### Proof of work

When you're setting up your nodes, you have the option to allow them to do [proof of work](root://getting-started/0.1/transactions/proof-of-work.md). When this feature is enabled, client applications can ask your node to do proof of work. This option is called remote proof of work.

![Remote proof of work](images/remote-pow.png)

Proof of work takes time and uses your node's computational power. So, depending on how often you send transactions to your nodes, you may want to keep this feature disabled by default.

This way, client applications can use [other options for proof of work](root://getting-started/0.1/transactions/proof-of-work.md#minimum-weight-magnitude#options-for-doing-proof-of-work) such as doing it themselves (local PoW) or outsourcing it to a [PoW proxy server](root://proof-of-work-proxy/1.0/overview.md).

![Local proof of work](images/local-pow.png)

## Load balancer

So that no single node is overloaded, it's best practice to make sure that the client's API calls are distributed among all nodes.

To evenly distribute the API calls among all your nodes, you can run a reverse proxy server that will act as a load balancer.

This way, you can even have one domain name for your reverse proxy server that all nodes will send their API calls to. But, on the backend, the nodes with the most spare computational power will process the request and return the response to the reverse proxy server.

## Integrations support

If you want to share your own recommendations, or if you want help integrating IOTA into your own architecture, get in touch with our team at: integrations@iota.org
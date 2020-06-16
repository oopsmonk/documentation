# Run a Hornet node from the APT repository

**In this tutorial, you install and run Hornet as a service on Linux Ubuntu, using the APT repository. This tutorial has been tested on [Ubuntu 18.04](http://releases.ubuntu.com/18.04).**

## Prerequisites

To complete this tutorial, you need the following:

- A [Linux Ubuntu operating system](https://ubuntu.com/download#download)
- 2 GB RAM
- A dual-core CPU
- SSD storage
- A public IP address
- Ports 15600 and 14626 must be exposed to the Internet

The amount of storage you need will depend on whether you plan on pruning transactions from your local database.

## Step 1. Install the APT repository

In this step, you install the Hornet node software from the Hornet APT repository.

This repository is maintained by the Hornet developers. It installs Hornet as a [systemd](https://en.wikipedia.org/wiki/Systemd) service under a user called `hornet`.

1. Import the public key that is used to sign the software release

    ```bash
    wget -qO - https://ppa.hornet.zone/pubkey.txt | sudo apt-key add -
    ```

2. Add the Hornet APT repository to your APT sources

    ```bash
    sudo sh -c 'echo "deb http://ppa.hornet.zone stable main" >> /etc/apt/sources.list.d/hornet.list'
    ```

3. Install Hornet

    ```bash
    sudo apt update
    sudo apt install hornet
    ```

4. Enable the systemd service

    ```bash
    sudo systemctl enable hornet.service
    ```

In the `/var/lib/hornet` directory, you now have all the configuration files.
    
## Step 2. Start your node

In this step, you use the systemd service to start running Hornet on the Mainnet.

```bash
sudo service hornet start
journalctl -fu hornet
```

When Hornet starts for the first time, it downloads the latest local snapshot data from https://ls.manapotion.io/, and processes it, storing the transactions in the `mainnetdb` directory.

```
2020-06-02T11:13:43+02:00       INFO    Snapshot        Downloading snapshot from https://ls.manapotion.io/export.bin
Downloading... 421 MB/685 MB (52 MB/s)2020-06-02T11:13:43+02:00       INFO    Snapshot        Downloading snapshot from https://ls.manapotion.io/export.bin
```

To stop displaying the log messages press **Ctrl**+**C**. Hornet will continue running in the background.

## Step 3. Check that Hornet is synchronized

A node is considered synchronized when the `latestMilestoneIndex` (LMI) field is equal to the `latestSolidSubtangleMilestoneIndex` (LSMI) field:

- `latestMilestoneIndex`: Index of the latest milestone that the IOTA node has received from its neighbors. This field is accurate only when the IOTA node is connected to synchronized neighbors.

- `latestSolidSubtangleMilestoneIndex`: Index of the latest solid milestone that's in the IOTA node's ledger

Open a web browser on the same device as your Hornet node and go to localhost:8081.

![A synchronized node's dashboard](../images/synced-node.png)

This is the Hornet dashboard.

A green icon indicates that your node is synchronized.

If your node is not synchronized, see [Troubleshooting](../references/troubleshooting.md) for help.

For more information about the dashboard, see [Setting up your dashboard](../guides/setting-up-dashboard.md).

:::success: Congratulations :tada:
You have a synchronized Hornet node.
:::

## Managing your node

This section is a reference for managing your node as a systemd service.

### Displaying the log messages

```bash
journalctl -fu hornet
```

### Restarting Hornet

```bash
sudo systemctl restart hornet
```

### Stopping Hornet

```bash
sudo systemctl stop hornet
```

## Next steps

Try using one of the client libraries to send transactions to the nodes in your private Tangle:

- [C](root://core/1.0/getting-started/get-started-c.md)

- [Go](root://core/1.0/getting-started/get-started-go.md)

- [Java](root://core/1.0/getting-started/get-started-java.md)

- [JavaScript](root://core/1.0/getting-started/get-started-js.md)

- [Python](root://core/1.0/getting-started/get-started-python.md)

If you want to continue learning how to customize and secure your node, see the Guides section, or continue with the [next tutorial](../tutorials/set-up-reverse-proxy.md).
# Build Hornet from source

**In this tutorial, you build an executable file from the Hornet source code on GitHub. This tutorial has been tested on [Ubuntu 18.04](http://releases.ubuntu.com/18.04).**

## Prerequisites

To complete this tutorial, you need the following:

- A [Linux Ubuntu operating system](https://ubuntu.com/download#download)
- 2 GB RAM
- A dual-core CPU
- SSD storage
- A public IP address
- Ports 15600 and 14626 must be exposed to the Internet

The amount of storage you need will depend on whether you plan on pruning transactions from your local database.

## Step 1. Install the dependencies

In this step, you install the dependencies that are needed to build Hornet.

1. Install Go

    ```bash
    sudo add-apt-repository ppa:longsleep/golang-backports
    sudo apt update
    sudo apt install golang-go
    ```

2. Check that Go is installed

    ```bash
    go version
    ```

    You should see something like the following:

    ```bash
    go version go1.14.2 linux/amd64
    ```

3. Install Git

    ```bash
    sudo apt install git
    ```

4. Check that Git is installed

    ```bash
    git --version
    ```

    You should see something like the following:

    ```bash
    git version 2.17.1
    ```

5. Install the build tools for optimizing remote proof of work

    ```bash
    sudo apt install build-essential
    ```

## Step 2. Build Hornet

In this step, you use the open source code on GitHub to build an executable file from the Hornet node software.

1. Clone the `hornet` repository

    ```bash
    git clone https://github.com/gohornet/hornet.git
    ```

2. Change into the `hornet` directory

    ```bash
    cd hornet
    ```

    This directory now contains all the configuration files.

3. Build the executable file, using the build script

    ```bash
    ./scripts/build_hornet.sh
    ```

    This script appends the current Git commit hash to the version number, making it easier for you to identify which version you are using.

    The build may take a minute or so to finish. When the build is finished, you should have an executable file called `hornet`.

    :::info: Faster proof of work
    If your device uses a new x86_64 (amd64) architecture and you expect your node to do remote proof of work, add the `-tags=pow_avx` option to the `go build` command in the `build_hornet.sh` file. This option builds the executable file in a way that allows your node to use an optimized algorithm for remote proof of work.
    :::

4. Make sure that the build was successful

    ```bash
    ./hornet --version
    ```

    You should see a version number and a Git commit hash such as the following:

    ```bash
    HORNET 0.4.0-7c7c2d1
    ```

:::success: Congratulations :tada:
You've built Hornet from source.
:::

## Next steps

To run Hornet, you just need to execute the `hornet` file: `./hornet`.

For more information about configuring Hornet, see the following guides:

- [Securing your API](../guides/securing-your-api.md)
- [Enabling remote proof of work](../guides/allowing-remote-pow.md)
- [Configuring local snapshots](../guides/configuring-snapshots.md)
- [Managing fixed neighbors](../guides/managing-neighbors.md)
- [Setting up your dashboard](../guides/setting-up-dashboard.md)

Try using one of the client libraries to send transactions to the nodes in your private Tangle:

- [C](root://core/1.0/getting-started/get-started-c.md)

- [Go](root://core/1.0/getting-started/get-started-go.md)

- [Java](root://core/1.0/getting-started/get-started-java.md)

- [JavaScript](root://core/1.0/getting-started/get-started-js.md)

- [Python](root://core/1.0/getting-started/get-started-python.md)
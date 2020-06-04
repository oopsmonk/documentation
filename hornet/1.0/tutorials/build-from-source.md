# Build Hornet from source

**In this tutorial, you build an executable file from the Hornet source code on GitHub. This tutorial has been tested on [Ubuntu 18.04](http://releases.ubuntu.com/18.04).**

## Prerequisites

To complete this tutorial, you need the following:

- A [Linux Ubuntu operating system](https://ubuntu.com/download#download)
- 1 GB RAM
- A public IP address
- Ports 15600 and 14626 must be exposed to the Internet

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

3. Build the executable file for Hornet

    ```bash
    go build -tags=pow_avx
    ```

    The `-tags=pow_avx` option builds the executable in a way that allows the node to use an optimized algorithm for remote proof of work.

    This process may take a minute or so.

    When the process is finished, you should have an executable file called `hornet`.

4. Make sure that the build was successful

    ```bash
    ./hornet --version
    ```

    You should see a version number such as the following:

    ```bash
    HORNET 0.4.0
    ```

:::success: Congratulations :tada:
You've built Hornet from source.
:::

## Next steps

To run Hornet, you just need to execute the `hornet` file: `./hornet`.

Try using one of the client libraries to send transactions to the nodes in your private Tangle:

- [C](root://core/1.0/getting-started/get-started-c.md)

- [Go](root://core/1.0/getting-started/get-started-go.md)

- [Java](root://core/1.0/getting-started/get-started-java.md)

- [JavaScript](root://core/1.0/getting-started/get-started-js.md)

- [Python](root://core/1.0/getting-started/get-started-python.md)

If you want to continue learning how to customize and secure your node, see the [Guides](../guides/securing-your-node.md) section, or continue with the [next tutorial](../tutorials/set-up-reverse-proxy.md).
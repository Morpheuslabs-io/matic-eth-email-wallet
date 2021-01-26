# Matic & ETH & Email Wallet

This dApp demonstrates a web wallet that can be connected with ETH networks or with Matic network via Metamask or via email address.
It can be used to transfer ETH or MATIC coins to another address.

## Installation

`yarn`

## Start

`yarn start`

## Metamask connected to Matic

To get Metamask connected to Matic, please set the `Custom RPC` with the following info:

- `Network Name`: `Matic Mumbai Testnet` or `Matic Mainnet`
- `New RPC URL`: `https://rpc-mumbai.maticvigil.com` or `https://rpc-mainnet.maticvigil.com`
- `Chain ID`: `80001` or `137`
- `Currency symbol`: `MATIC`
- `Block explorer URL`: `https://mumbai-explorer.matic.today` or `https://explorer-mainnet.maticvigil.com`

## Login with email address

In addition to `connect to Metamask Wallet`, the interface also provides another login solution
by entering the email address. When clicking the `Submit` button, a login link is sent to the
provided email address. This login link, which is powered by the `https://magic.link/`, is portable
to anywhere. This means that, anyone who has this link can access the provided wallet.

The email-based login session persists for several days. This means that, after the first time login,
whenever entering again the same email, the login will occur immediately.

The login session can be cleared away by clicking `disconnect` button (on the top corner)

The currently-supported ETH network is `ropsten`.

## Test case

One of the interesting test cases is as follows:

- Enter email to login
- Open the mail box and click the provided link
- Return to the browser tab of this wallet
- At here, we should be logged in
- Copy the wallet address provided
- Refresh the browser tab
- At here, we should see again the login interface
- Set Metamask to connect to `Ropsten` testnet
- Click `Connect to Metamask Wallet` to get the app connected to Metamask
- At here, we can try transferring some test ETH to the email-provided address copied from the above step
- Refresh the browser tab
- Enter the same email address again
- At here, we should be auto logged in
- Check if we can receive the transferred amount or not

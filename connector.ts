import { AuthereumConnector } from '@web3-react/authereum-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { FrameConnector } from '@web3-react/frame-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import { LatticeConnector } from '@web3-react/lattice-connector';
import { LedgerConnector } from '@web3-react/ledger-connector';
import { MagicConnector } from '@web3-react/magic-connector';
import { NetworkConnector } from '@web3-react/network-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { TorusConnector } from '@web3-react/torus-connector';
import { TrezorConnector } from '@web3-react/trezor-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

const POLLING_INTERVAL = 12000
const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.RPC_URL_1 as string,
  4: process.env.RPC_URL_4 as string,
  1723: process.env.RPC_URL_1723 as string
   
}

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4,1723, 5, 42] });

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1], 4: RPC_URLS[4]  },
  defaultChainId: 1
})

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  chainId: 1723,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true
})


export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'Fess',
  supportedChainIds: [1, 3, 4, 5, 42, 10,1723, 137, 69, 420, 80001]
})

export const ledger = new LedgerConnector({ chainId: 1, url: RPC_URLS[1], pollingInterval: POLLING_INTERVAL })

export const trezor = new TrezorConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: 'hss785785@gmail.com',
  manifestAppUrl: 'http://localhost:1234'
})

export const lattice = new LatticeConnector({
  chainId: 1723,
  appName: 'web3-react',
  url: RPC_URLS[1723]
})

export const frame = new FrameConnector({ supportedChainIds: [1] })

export const authereum = new AuthereumConnector({ chainId: 1723 })


export const fortmatic = new FortmaticConnector({ apiKey: process.env.FORTMATIC_API_KEY as string, chainId: 4 })

export const magic = new MagicConnector({
  apiKey: process.env.MAGIC_API_KEY as string,
  chainId: 4,
  email: 'hss785785@gmail.com'
})

export const portis = new PortisConnector({ dAppId: process.env.PORTIS_DAPP_ID as string, networks: [1,100] })

export const torus = new TorusConnector({ chainId: 1 });

// injected

import { MaticPOSClient } from '@maticnetwork/maticjs'

import { MATIC_NETWORK, MATIC_CONTRACT } from './config'

const matic = new MaticPOSClient({
  network: MATIC_NETWORK.network,
  version: MATIC_NETWORK.version,
  parentProvider: window.ethereum,
  maticProvider: window.ethereum, //MATIC_NETWORK.rpcProvider,
  posRootChainManager: MATIC_CONTRACT.ROOT_CHAIN_MANAGER,
})

export default matic

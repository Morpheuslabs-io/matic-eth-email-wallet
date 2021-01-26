import { Magic } from 'magic-sdk'

import { MAGIC_API_KEY, MAGIC_NETWORK } from './config'

export default new Magic(MAGIC_API_KEY, {
  network: MAGIC_NETWORK
})

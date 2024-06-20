
// seeded random
import { prng_alea } from 'https://cdn.jsdelivr.net/npm/esm-seedrandom/+esm'

// prng_alea call being memoised is bad (todo fix at lower-level)
export const seeded = prng_alea("seed");
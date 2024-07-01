
// seeded random
import { prng_alea } from 'https://cdn.jsdelivr.net/npm/esm-seedrandom/+esm'

// prng_alea call being memoised is bad (todo fix at lower-level)
export const seeded = prng_alea("seed");

// todo use s/t like this instead:
// https://news.ycombinator.com/item?id=40840616 (+ see other comments)
// but I do need to look at interop with JS here


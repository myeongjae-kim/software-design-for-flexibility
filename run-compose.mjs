import {compose} from './compose.mjs'

const g = (x) => ['bar', x]
const f = (x) => ['foo', x]

console.log(compose(f,g)('z'))

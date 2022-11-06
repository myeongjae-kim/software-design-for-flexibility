import {parallelCombine} from "./parallel-combine.mjs"

console.log(parallelCombine((x,y) => [x,y], (x,y,z) => ['foo', x, y, z], (u, v, w) => ['bar', u, v, w])('a', 'b', 'c'))

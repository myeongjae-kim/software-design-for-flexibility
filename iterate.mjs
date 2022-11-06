import {compose} from "./compose.mjs"

const identity = (x) => x;

export const iterate = (n) => (f) => {
  if (n === 0) {
    return identity;
  } else {
    return compose(f, iterate(n - 1)(f));
  }
}

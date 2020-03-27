import { Path } from '@robinedman/slate'

export const input = {
  path: [1, 1, 2],
  another: [0],
}

export const test = ({ path, another }) => {
  return Path.compare(path, another)
}

export const output = 1

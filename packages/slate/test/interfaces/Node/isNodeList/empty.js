import { Node } from '@robinedman/slate'

export const input = []

export const test = value => {
  return Node.isNodeList(value)
}

export const output = true

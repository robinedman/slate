import { Text } from '@robinedman/slate'

export const input = [
  {
    text: '',
  },
]

export const test = value => {
  return Text.isTextList(value)
}

export const output = true

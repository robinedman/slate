/** @jsx jsx  */

import { Node } from '@robinedman/slate'
import { jsx } from '@robinedman/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text key="a" />
      <text key="b" />
    </element>
  </editor>
)

export const test = value => {
  return Array.from(Node.texts(value, { from: [0, 1] }))
}

export const output = [[<text key="b" />, [0, 1]]]

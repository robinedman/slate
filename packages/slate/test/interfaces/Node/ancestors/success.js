/** @jsx jsx  */

import { Node } from '@robinedman/slate'
import { jsx } from '@robinedman/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)

export const test = value => {
  return Array.from(Node.ancestors(value, [0, 0]))
}

export const output = [
  [input, []],
  [input.children[0], [0]],
]

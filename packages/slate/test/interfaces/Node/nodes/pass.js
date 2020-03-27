/** @jsx jsx  */

import { Node } from '@robinedman/slate'
import { jsx } from '@robinedman/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <element>
        <text key="a" />
      </element>
    </element>
  </editor>
)

export const test = value => {
  return Array.from(Node.nodes(value, { pass: ([n, p]) => p.length > 1 }))
}

export const output = [
  [input, []],
  [
    <element>
      <element>
        <text key="a" />
      </element>
    </element>,
    [0],
  ],
  [
    <element>
      <text key="a" />
    </element>,
    [0, 0],
  ],
]

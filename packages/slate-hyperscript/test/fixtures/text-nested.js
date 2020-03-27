/** @jsx jsx */

import { jsx } from '@robinedman/slate-hyperscript'

export const input = (
  <text b>
    <text a>word</text>
  </text>
)

export const output = {
  text: 'word',
  a: true,
  b: true,
}

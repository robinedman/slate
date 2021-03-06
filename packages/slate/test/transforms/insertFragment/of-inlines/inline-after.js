/** @jsx jsx */

import { Transforms } from '@robinedman/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertFragment(
    editor,
    <fragment>
      <inline>fragment</inline>
    </fragment>
  )
}

export const input = (
  <editor>
    <block>
      <text />
      <inline>word</inline>
      <cursor />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <text />
      <inline>word</inline>
      <text />
      <inline>
        fragment
        <cursor />
      </inline>
      <text />
    </block>
  </editor>
)

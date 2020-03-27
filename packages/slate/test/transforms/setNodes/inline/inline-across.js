/** @jsx jsx */

import { Editor, Transforms } from '@robinedman/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.setNodes(
    editor,
    { key: true },
    { match: n => Editor.isInline(editor, n) }
  )
}

export const input = (
  <editor>
    <block>
      <text />
      <inline>
        <anchor />
        word
      </inline>
      <text />
    </block>
    <block>
      <text />
      <inline>
        another
        <focus />
      </inline>
      <text />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <text />
      <inline key>
        <anchor />
        word
      </inline>
      <text />
    </block>
    <block>
      <text />
      <inline key>
        another
        <focus />
      </inline>
      <text />
    </block>
  </editor>
)

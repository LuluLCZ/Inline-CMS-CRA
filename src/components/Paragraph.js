import React from 'react'
import { BlocksControls, InlineTextarea } from 'react-tinacms-inline'
import '../styles/paragraph.css'

/**
 * 1. Define the Block Component
 */
function Paragraph({ index }) {
  return (
    <BlocksControls index={index} focusRing={{ offset: { x: -10, y: -18 } }} insetControls>
      <div className="paragraph__background">
        <div className="wrapper wrapper--narrow">
          <p className="paragraph__text">
            <InlineTextarea name="text" focusRing={false} />
          </p>
        </div>
      </div>
    </BlocksControls>
  )
}

/**
 * 2. Define the Block
 */
export const paragraphBlock = {
  Component: Paragraph,
  template: {
    label: 'Paragraph',
    defaultItem: {
      text:
        'This is a new paragraph, just click on it to edit it',
    },
    fields: [],
  },
}
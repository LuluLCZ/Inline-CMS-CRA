import React from 'react'
import { BlocksControls, InlineTextarea } from 'react-tinacms-inline'
import '../styles/features.css'

function Feature({ index, data }) {
  return (
    <BlocksControls index={index}>
      <div className="feature">
        <h3  style={{color: data.text_color_title || '#000'}}>
          <InlineTextarea name="heading" focusRing={false} />
        </h3>
        <p style={{color: data.text_color_body || '#000'}}>
          <InlineTextarea name="supporting_copy" focusRing={false} />
        </p>
      </div>
    </BlocksControls>
  )
}

export const featureBlock = {
  Component: Feature,
  template: {
    label: 'Feature',
    defaultItem: {
      _template: 'feature',
      heading: 'Marie Skłodowska Curie',
      supporting_copy:
        'Rich in mystery muse about vastness is bearable only through love Ut enim ad minima veniam at the edge of forever are creatures of the cosmos. ',
        text_color: 'white'
    },
    fields: [
        {
            name: 'text_color_title',
            label: "Title Text Color",
            component: 'select',
            options: ['black', 'white', 'yellow', 'blue']
        },
        {
            name: 'text_color_body',
            label: "Body Text Color",
            component: 'select',
            options: ['black', 'white', 'yellow', 'blue']
        }

    ],
  },
}
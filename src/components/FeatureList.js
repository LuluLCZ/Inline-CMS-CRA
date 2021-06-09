import React from 'react'
import { BlocksControls, InlineBlocks } from 'react-tinacms-inline'
import '../styles/features.css'
import { featureBlock } from './Feature';

/**
 * 1. Define the Block Component
 */
function FeatureList({ index, data }) {
  return (
      <div className="FeatureList" style={{backgroundColor: data.background_color || 'transparent'}} >
        <BlocksControls  index={index} focusRing={{ offset: { x: -10, y: -18 } }} insetControls>
        <div className="wrapper">
            <InlineBlocks name="features" blocks={FEATURE_BLOCKS} />
        </div>
        </BlocksControls>
      </div>
  )
}

/**
 * 2. Define the FeatureList Block
 */
export const featureListBlock = {
  Component: FeatureList,
  template: {
    label: 'Feature List',
    defaultItem: {
      _template: 'features',
      features: [
        {
          _template: 'feature',
          heading: 'heading 1',
          supporting_copy: 'supporting copy',
        },
        {
          _template: 'feature',
          heading: 'heading 2',
          supporting_copy: 'supporting copy',
        },
        {
          _template: 'feature',
          heading: 'heading 3',
          supporting_copy: 'supporting copy',
        },
      ],
    },
    fields: [
        {
            name: 'background_color',
            label: 'Background Color',
            component: 'color',
            widget: 'block',
            colors: ['#051e26', '#f2dfc6', '#cfdcc8', '#ebbbbb', '#8a1414'],
        },
    ],
  },
}

/**
 * 3. Define the block options
 * for FeatureList to render, we will add
 * a block to this next
 */
const FEATURE_BLOCKS = {
    feature: featureBlock,
}
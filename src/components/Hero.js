import React from 'react';
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline'
import '../styles/hero.css';

export function Hero({ text_color, background_color, align }) {
  return (
    <div
      className="hero"
      style={{
        color: text_color || 'white',
        backgroundColor: background_color || 'aliceblue',
        textAlign: align,
        justifyContent: align === 'left' ? 'start' : align,
      }}
    >
      <div className="wrapper wrapper--narrow">
        <h1>
          <InlineTextarea name="headline" focusRing={false} />
        </h1>
        <p>
          <InlineTextarea name="subtext" focusRing={false} />
        </p>
      </div>
    </div>
  )
}

export const heroBlock = {
  Component: ({ index, data }) => (
    <BlocksControls 
      index={index}
      focusRing={{ offset: { x: -10, y: -18 } }}
      insetControls
    >
      <Hero {...data}/>
    </BlocksControls>
  ),
  template: {
    label: 'Hero',
    defaultItem: {
      headline: 'Suspended in a Sunbeam',
      subtext: 'Dispassionate extraterrestrial observer',
      /**
       * 4. Update defaults with style values
       */
      background_color: '#051e26',
      text_color: '#fffaf4',
      align: 'center',
    },
    fields: [
      /**
       * 5. Add fields to edit styles in modal
       */
      {
        name: 'background_color',
        label: 'Background Color',
        component: 'color',
        widget: 'block',
        colors: ['#051e26', '#f2dfc6', '#cfdcc8', '#ebbbbb', '#8a1414'],
      },
      {
        name: 'text_color',
        label: 'Text Color',
        component: 'select',
        options: ['white', 'black'],
      },
      {
        name: 'align',
        label: 'Alignment',
        component: 'select',
        options: ['center', 'left'],
      },
    ],
  },
}

import React from 'react'
import H2 from './H2'
import P from './P'
import Code from './Code'

export default () => (
  <>
    <div className="w-full h-px bg-cool-gray-200 mb-16" />
    <H2>Properties</H2>
    <P>
      Asides from the possibility to add a `className` and `style` prop, the
      only available property is `intensity`. You can use this to control how
      strong the gooey effect is applied. It has three possible values: 'weak',
      'medium' (which is the default) and 'strong'.
    </P>
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo '}</span>
      <span className="text-purple-700">{'intensity'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'weak'}</span>
      <span className="text-blue-700">{'">'}</span>
      <span className="text-cool-gray-500"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
  </>
)

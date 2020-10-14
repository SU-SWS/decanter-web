import React from 'react'
import SbEditable from 'storyblok-react'
import OneColumn from './OneColumn'
import TwoColumn from './TwoColumn'
import ThreeColumn from './ThreeColumn'

const Section = (props) => {

  return (
    <SbEditable content={props.blok}>
      <OneColumn {...props} />
      <TwoColumn {...props} />
      <ThreeColumn {...props} />
    </SbEditable>
  )

}

export default Section

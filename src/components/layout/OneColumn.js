import React from 'react'
import SbEditable from 'storyblok-react'
import Components from '../components';


const OneColumn = (props) => (
  <SbEditable content={props.blok}>
    {props.blok.primary_column && props.blok.primary_column.map((blok) => React.createElement(Components(blok.component), {
      key: blok._uid,
      blok: blok
    }))}
  </SbEditable>
)

export default OneColumn

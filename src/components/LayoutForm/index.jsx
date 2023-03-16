import React from 'react'
import { StyleLayoutForm } from './styled'

const LayoutForm = ({width,title,children}) => {
  console.log(width)
  return (
    <StyleLayoutForm width={width}>
        <h2>{title}</h2>
        {children}
    </StyleLayoutForm>
  )
}

export default LayoutForm
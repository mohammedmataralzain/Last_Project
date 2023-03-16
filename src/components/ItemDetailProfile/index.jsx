import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../contexts/ModelContext'
import Edit from '../Edit'
import { StyledModal } from '../Modal'
const StyleItemDetailProfile = styled.div`
    display: flex;
`
const ItemDetailProfile = ({title,type,updateIsPopOpen,show,handleClose,click,view}) => {
  const data = useGlobalContext()
  return (
    <StyleItemDetailProfile>
        <h4>{title}</h4>
        <div onClick={() => data.updateIsPopOpen(type)}>
            <Edit />
          </div>
          <StyledModal
            show={data.state[type]}
            type={type}
          >
            {view}
          </StyledModal>
    </StyleItemDetailProfile>
  )
}

export default ItemDetailProfile
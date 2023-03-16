import React from 'react'
import DetailPersonalItem from '../DetailPersonalItem'
import { StyleDetailsPersonalHome } from './styled'

const DetailsPersonalHome = () => {
  return (
    <StyleDetailsPersonalHome>    
    <DetailPersonalItem title="Availability Badge" icon1={false}/>
    <DetailPersonalItem title="Hours per week" icon1={false}>
    <p>More than 30 hrs/week</p>
    <p>No contract-to-hire preference set</p>
    </DetailPersonalItem>
   
    <DetailPersonalItem title="Profile Visibility" icon1={false}>

    <p>Public</p>
    </DetailPersonalItem>
    <DetailPersonalItem title="Job Preference" icon1={false}>
    <p>No preference set</p>

    </DetailPersonalItem>
    <DetailPersonalItem title="My Categories" icon1={false}>
        <p>Web Development</p>
    </DetailPersonalItem>
</StyleDetailsPersonalHome>
  )
}

export default DetailsPersonalHome
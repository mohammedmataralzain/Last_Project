import DetailPersonalItem from "../DetailPersonalItem"
import { StyleDetailsPersonal } from "./styled"


const DetailsPersonal = () => {
  return (
    <StyleDetailsPersonal>     
         <DetailPersonalItem title="Video introduction" icon2={false}/>
         <DetailPersonalItem title="Hours per week" icon1={false}>
         <p>More than 30 hrs/week</p>
         <p>No contract-to-hire preference set</p>
         </DetailPersonalItem>
        
         <DetailPersonalItem title="Languages">

         <p>English: Basic</p>
         </DetailPersonalItem>
         <h4>Verifications</h4>
         <DetailPersonalItem title="Military Veteran " icon2={false}/>
         <DetailPersonalItem title="Education" icon2={false}/>
    </StyleDetailsPersonal>
  )
}

export default DetailsPersonal
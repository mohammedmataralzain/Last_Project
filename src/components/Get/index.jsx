

import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../JobCard";



const  Get  = () => {
 
  const [fetchedData, setFetchedData] = useState([]);
   useEffect(() => {
     let url = "http://localhost:3000/jobs"
     const getData = async () => {
       const jobs = await axios.get(
         url
       );
       setFetchedData(jobs.data);
     };
     getData();
   }, []);


   
  console.log(fetchedData)
     return <div>{fetchedData.map((job,index) => <JobCard key={index} {...job}/>)}</div>;
   
 
   
 }

 export default Get;
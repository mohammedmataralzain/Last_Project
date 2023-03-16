import axios from "axios";
import  { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../contexts/ModelContext";
import { StyledButton } from "../style";
import { StyleChangeHourlyRate } from "./styled";


const ChangeHourlyRate = ({type}) => {
  const data = useGlobalContext()

  const [title, setTitle] = useState("");
  const [overView, setOverView] = useState("");
  const [newHourlyRate, setNewHourlyRate] = useState("");
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/personalInformation"
        );
        if (response) {
          setTitle(response.data[0].title);
          setOverView(response.data[0].overview);
          setNewHourlyRate(response.data[0].hourlyRate);
        }
      } catch (err) {
      }
    })();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setNewHourlyRate(value);
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const res = await axios.put(
          "http://localhost:3000/personalInformation/1",
          {
            title: title,
            overview :overView,
            hourlyRate:newHourlyRate,
          }
        );
        if (res) {
          setRefresh(true);
          
        }

      } catch (error) {
        console.log(error);
      }
    })();
  
  };
 
  const CalculateAmountAfterService = () => {
    if(newHourlyRate <= 500) {
        return newHourlyRate * 0.8;
    }
    else {
        return newHourlyRate * 0.9;
    }

  };

  
  return (
    <StyleChangeHourlyRate  title="Change hourly rate">
      <h4>Change hourly rate</h4>
      <p>
        Please note that your new hourly rate will only apply to new contracts.
      </p>
      <p>
        The Upwork Service Fee is 20% when you begin a contract with a new
        client. Once you bill over $500 with your client, the fee will be 10%.
      </p>
      <p>Your profile rate: $10.00/hr</p>
      <form onSubmit={(e) =>handleSubmit(e)}>
        <div className="row">
          <div>
            <h5> Hourly Rate</h5>
            Total amount the client will see
          </div>
          <div>
            $
            <input
              type="number"
              value={newHourlyRate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <h5> 20% Upwork Service Fee</h5>
          </div>
          <div>
            $
            <input
              type="number"
              disabled
              value={-60.0}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <h5> You'll Receive</h5>
            The estimated amount you'll receive after service fees
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              viewBox="0 0 14 14"
              role="img"
              width="1.5rem"
            >
              <path
                fillRule="evenodd"
                d="M7 0a7 7 0 100 14A7 7 0 007 0zm3.017 4.981c0 1.57-1.128 2.278-2.52 2.52l-.131 1.03h-.96l-.251-2.015.059-.06c1.608-.06 2.327-.588 2.327-1.44v-.023c0-.72-.551-1.236-1.462-1.236-.804 0-1.464.36-2.064 1.008l-.9-.948c.72-.827 1.644-1.39 3-1.39 1.738 0 2.902.983 2.902 2.53v.024zm-3.958 6.284V9.598h1.606v1.667H6.059z"
              ></path>
            </svg>
          </div>
          <div>
            $
            <input
              type="number"
              value={CalculateAmountAfterService()}
            />
          </div>
        </div>
        <StyledButton
        backGround="#ffffff"
        width="12rem"
        color="green"
        type="button"
        onClick={() => data.closeIsPopOpen(type)}
      >
        Cancel
      </StyledButton>
      <StyledButton  backGround="green"
        width="12rem"
        color="#ffffff"
        onClick={() => data.closeIsPopOpen(type)}
        borderColor="green" type="submit" >submit</StyledButton>
      </form>
      {refresh ? <Navigate to={"/redirect"} /> : ""}
     
    </StyleChangeHourlyRate>
  );
};

export default ChangeHourlyRate;


import ChangeHourlyRate from "../ChangeHourlyRate";
import ItemDetailProfile from "../ItemDetailProfile";
import Overview from "../Overview";
import { StyleDetailsProfile } from "./styled";
import EditTitle from "../EditTitle";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailsProfile = () => {
  const [title, setTitle] = useState("");
  const [overView, setOverView] = useState("");
  const [hourlyRate, setHourlyRate] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/personalInformation"
        );
        if (response) {
          setTitle(response?.data[0]?.title);
          setOverView(response?.data[0]?.overview);
          setHourlyRate(response?.data[0]?.hourlyRate);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(title);

  return (
    <>
      <StyleDetailsProfile>
        <div className="top">
          <ItemDetailProfile
            title={title}
            type="isPopOpen1"
            view={<EditTitle type="isPopOpen1" />}
          />
          <ItemDetailProfile
            title={`${hourlyRate}$/hr`}
            type="isPopOpen2"
            view={<ChangeHourlyRate type="isPopOpen2" />}
          />
        </div>
        <ItemDetailProfile
          title={overView}
          type="isPopOpen3"
          view={<Overview type="isPopOpen3" />}
        />
      </StyleDetailsProfile>
    </>
  );
};

export default DetailsProfile;

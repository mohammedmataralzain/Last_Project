import React from "react";
import Dropdown from "../DropDown";

const Filters = () => {
  const data = [
    {
      title: "Category",
      items: {
        type : "input",
         placeHolder : "Select Categories"
    },
    },
    {
      title: "Experience level",
      items: ["Entry Level (25493)", "Intermediate (110059)", "Expert (65606)"],
    },
    {
      title: "Number of proposals",
      items: ["Less than 5 (28354)","5 to 10 (37768)","10 to 15 (30183)", "15 to 20 (23129)", "20 to 50 (59428)"],
    },
    {
      title: "Client info",
      items: ["My previous clients (0)", "Payment verified (134002)"],
    },
    {
      title: "Client history",
      items: ["No hires (84312)", "1 to 9 hires (43995)", "10+ hires (72957)"],
    },
    {
      title: "Client location",
      items: {
        type : "input",
         placeHolder : "Select client location"
    }
    },
    {
      title: "Client time zones",
      items: {
        type : "input",
         placeHolder : "Select client time zones"
    }
    },
    {
      title: "Project length",
      items: ["Less than one month (48555)","1 to 3 months (30130)" ,"3 to 6 months (16109)", "More than 6 months (28940)"],
    },
    {
      title: "Hours per week",
      items: ["Less than 30 hrs/week (94716)" ,"More than 30 hrs/week (24579)"],
    },
    {
      title: "Connects needed",
      items: ["2 or less connects (21982)", "4 connects (59277)", "6 connects (52134)"],
    },
  ];
  return (
    <div>
        <h2>Filter By</h2>
      {data.map((currentElement) => (
        <Dropdown title={currentElement.title} items={currentElement.items} />
      ))}
      <input type="checkbox" />
      Contract-to-hire roles (0)
    </div>
  );
};

export default Filters;

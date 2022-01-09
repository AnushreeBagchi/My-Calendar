import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Div } from "../../utils/utils";

const Header = () => {
  const dispatch = useDispatch();
  const currentDate = new Date();

  const getMonthAndYear = (date) => {
    const month = date.toLocaleString('default', { month: 'long' });
    const year =  date.getFullYear();
    return month + ' ' +year;
  }

//   const [selectedMonthAndYear, setValue] = React.useState(getMonthAndYear(currentDate));


  return (
    <Div>
     {getMonthAndYear(currentDate)}
    </Div>
  );
};

export default  Header ;
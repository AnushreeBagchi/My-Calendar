import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Div,
  Button,
  ArrowBackIosIcon,
  ArrowForwardIosIcon,
  MenuIcon,
  Typography,
} from "../../utils/utils";
import { dateSelected } from "../../state/state";
import "./Header.css";
import { format } from 'date-fns';


const Header = () => {
  const dispatch = useDispatch();
  const currentDate = new Date();

  const getMonthAndYear = (date) => {
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return month + " " + year;
  };

  //   const [selectedMonthAndYear, setValue] = React.useState(getMonthAndYear(currentDate));

  const navigationButtonClicked = (date) => {
    dispatch(
      dateSelected({
        // date: date.toDateString(),
        date: format(date, 'dd-MM-yyyy'),
        day: date.getDay(),
      })
    );
  };


  return (
    <Div className="header">
      <Div className="menuDiv">
        <MenuIcon className="menu alignCenter" />
        <span className="logo alignCenter headerTexts">Calendar</span>
      </Div>

      <Div className="navigationIcons header">
        <ArrowBackIosIcon className="alignCenter" />
        <Button
          className="alignCenter  "
          variant="text"
          onClick={() => navigationButtonClicked(new Date())}
        >
          Today
        </Button>
        <ArrowForwardIosIcon className="alignCenter" />
        <Div className="currentMonth headerTexts">
          {getMonthAndYear(currentDate)}
        </Div>
      </Div>
    </Div>
  );
};

export default Header;

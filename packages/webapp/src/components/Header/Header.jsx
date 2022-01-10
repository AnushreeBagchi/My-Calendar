import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Div,
  Button,
  ArrowBackIosIcon,
  ArrowForwardIosIcon,
  MenuIcon,
} from "../../utils/utils";
import { dateSelected } from "../../state/state";
import "./Header.css";
import { format, subDays, addDays, parse } from "date-fns";

const Header = () => {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const gridDateString = useSelector((state) => state.state.selectedDate);
  const selectedGridDate = gridDateString ? parse(gridDateString, 'dd-MM-yyyy', new Date()) : currentDate;
  const getMonthAndYear = (date) => {
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return month + " " + year;
  };

  //   const [selectedMonthAndYear, setValue] = React.useState(getMonthAndYear(currentDate));

  const navigationButtonClicked = (date) => {
    dispatch(
      dateSelected({
        date: format(date, "dd-MM-yyyy"),
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
        <ArrowBackIosIcon
          className="alignCenter"
          onClick={() => navigationButtonClicked(subDays(selectedGridDate, 7))}
        />
        <Button
          className="alignCenter"
          variant="text"
          onClick={() => navigationButtonClicked(new Date())}
        >
          Today
        </Button>
        <ArrowForwardIosIcon
          className="alignCenter"
          onClick={() => navigationButtonClicked(addDays(selectedGridDate, 7))}
        />
        <Div className="currentMonth headerTexts">
          {getMonthAndYear(currentDate)}
        </Div>
      </Div>
    </Div>
  );
};

export default Header;

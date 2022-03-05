import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  NativeSelect,
  TextField,
  AccessAlarmIcon,
  Div,
  LocationOnIcon,
  PeopleAltIcon,
} from "../../utils/utils.jsx";
import { format } from "date-fns";
import { TIMESTAMP } from "../Constants";
import "./ComposeTask.css";
import { useDispatch } from "react-redux";
import { eventCreated } from "../../state/state.js";

const ComposeTask = ({
  open,
  handleClose,
  composeTaskTime,
  composeTaskDate,
}) => {

  const [startTime, setStartTime] = React.useState();
  const [endTime, setEndTime] = React.useState();
  const [eventTitle, setEventTitle] = React.useState();
  const [eventLocation, setEventLocation] = React.useState();
  const [eventGuests, setEventGuests] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    getdropDownTime(composeTaskTime);
  }, [composeTaskTime]);

  const getdropDownTime = (composeTaskTime) => {
    let dropDownTime;
    if (composeTaskTime) {
      dropDownTime = composeTaskTime.includes('AM') ? composeTaskTime.replace('AM', '').concat(':00').concat('am') : composeTaskTime.replace('PM', '').concat(':00').concat('pm');
    }
    setStartTime(dropDownTime);
    setEndTime(dropDownTime);
  }

  const onTimeChange = (dropdown, time) => {
    dropdown === 'startTimeChange' ? setStartTime(time) : setEndTime(time);
  }

  const onCreateClick = () => {
    dispatch(eventCreated({
      eventTitle,startTime, composeTaskDate, endTime, eventLocation, eventGuests
    }));
    handleClose();
  }

  return (
    <Dialog open={open}>
      <DialogTitle>Compose Event</DialogTitle>
      <TextField
        variant="standard"
        placeholder="Add title"
        className="title"
        onChange={(e)=> setEventTitle(e.target.value)}
      ></TextField>
      <DialogContent>
        <Div className="dateTimeDiv">
          <AccessAlarmIcon className="clockIcon" color="primary" />
          {format(composeTaskDate, "EEEE, MMMM dd ")}
          <NativeSelect value={startTime} className="startTimeDropdown" onChange={(e) => onTimeChange('startTimeChange', e.target.value)}>
            {TIMESTAMP.map((time) => (
              <option key={time} value={time} >
                {time}
              </option>
            ))}
          </NativeSelect>
          -
          <NativeSelect value={endTime} className="endTimeDropdown" onChange={(e) => onTimeChange('endTimeChange', e.target.value)}>
            {TIMESTAMP.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </NativeSelect>
        </Div>
        <Div className="locationDiv">
          <LocationOnIcon color="primary" className="locationIcon" />
          <TextField
            variant="standard"
            placeholder="Add location"
            className="location"
            onChange={(e)=> setEventLocation(e.target.value)}
          ></TextField>
        </Div>
        <Div className="guestDiv">
          <PeopleAltIcon color="primary" className="locationIcon" />
          <TextField
            variant="standard"
            placeholder="Add guests"
            className="guests"
            onChange={(e)=> setEventGuests(e.target.value)}
          ></TextField>
        </Div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onCreateClick}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComposeTask;

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

const ComposeTask = ({
  open,
  handleClose,
  composeTaskTime,
  composeTaskDate,
}) => {
  const startTime = React.useState();
  const endTime = React.useState();

  console.log(composeTaskTime.toLowerCase());
  composeTaskTime = "1:00am";

  return (
    <Dialog open={open}>
      <DialogTitle>Compose Event</DialogTitle>
      <TextField
        variant="standard"
        placeholder="Add title"
        className="title"
      ></TextField>
      <DialogContent>
        <Div className="dateTimeDiv">
          <AccessAlarmIcon className="clockIcon" color="primary" />
          {format(composeTaskDate, "EEEE, MMMM dd ")}
          <NativeSelect value={composeTaskTime} className="startTimeDropdown">
            {TIMESTAMP.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </NativeSelect>
          -
          <NativeSelect value={composeTaskTime} className="endTimeDropdown">
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
          ></TextField>
        </Div>
        <Div className="guestDiv">
          <PeopleAltIcon color="primary" className="locationIcon" />
          <TextField
            variant="standard"
            placeholder="Add guests"
            className="guests"
          ></TextField>
        </Div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComposeTask;

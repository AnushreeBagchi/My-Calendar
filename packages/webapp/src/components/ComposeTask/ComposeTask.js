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
      <DialogContent className="dialogContent">
        <AccessAlarmIcon className="clockIcon"></AccessAlarmIcon>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComposeTask;

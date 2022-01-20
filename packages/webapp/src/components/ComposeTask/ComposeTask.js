import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  NativeSelect,
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
      <DialogContent>
          {format(composeTaskDate, "EEEE, MMMM dd ")}
          <NativeSelect
            value={composeTaskTime}
            className="startTimeDropdown"
          >
            {TIMESTAMP.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </NativeSelect>
          -
          <NativeSelect
            value={composeTaskTime}
            className="endTimeDropdown"
          >
            {TIMESTAMP.map((time) => (
              <option key={time}value={time}>{time}</option>
            ))}
          </NativeSelect>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ComposeTask;

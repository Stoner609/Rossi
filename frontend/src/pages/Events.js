import React, { Component } from "react";

import Backdrop from "../components/Backdrop/Backdrop";
import Model from "../components/Model/Model";
import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false
  };

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modelConfirmHandler = () => {
    this.setState({ creating: false });
  };

  modelCancelHandler = () => {
    this.setState({ creating: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Model
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.modelCancelHandler}
            onConfirm={this.modelConfirmHandler}
          >
            <p>Model Content</p>
          </Model>
        )}
        <div className="events-control">
          <p>Share your own Events!</p>
          <button className="btn" onClick={this.startCreateEventHandler}>
            Create Event
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;

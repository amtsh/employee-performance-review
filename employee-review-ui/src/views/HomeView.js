import React, { Component } from "react";
import "./../App.css";
import { getIn } from "./../utils/helpers";
import { ROUTE_ROOT_VIEW } from "./../Routes";

import { ReviewsAssignedList } from "../containers";

class HomeView extends Component {
  componentWillMount() {
    const { session } = this.props;
    const employeeEmail =
      getIn("email", session) ||
      getIn("email", this.props.history.location.state);

    if (!employeeEmail) {
      this.props.history.push(ROUTE_ROOT_VIEW);
    }
  }

  render() {
    return (
      <div>
        <ReviewsAssignedList
          email={
            getIn("email", this.props.session) ||
            getIn("email", this.props.history.location.state)
          }
        />
      </div>
    );
  }
}

export default HomeView;

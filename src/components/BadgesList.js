import React, { Component } from "react";

class BadgesList extends Component {
  state = {};
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.Badges.map((Badge) => {
          return (
            <li key={Badge.id}>
              <p>
                {Badge.firstName} {Badge.lastName}
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;

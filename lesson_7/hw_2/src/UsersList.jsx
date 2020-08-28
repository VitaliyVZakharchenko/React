import React, { Component } from "react";
import User from "./User";
import Pagination from "./Pagination";

class UsersList extends Component {
  state = {
    currentPage: 0,
    itemsPerPage: 3,
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };
  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };
  render() {
    const { users } = this.props;
    const { currentPage, itemsPerPage } = this.state;

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const usersToShow = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          goNext={this.goNext}
          goPrev={this.goPrev}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={users.length}
        />
        <ul className="users">
          {usersToShow.map((user) => {
            return <User key={user.id} name={user.name} age={user.age} />;
          })}
        </ul>
      </div>
    );
  }
}

export default UsersList;
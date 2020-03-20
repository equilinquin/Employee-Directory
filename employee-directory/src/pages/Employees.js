import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import EmployeeTable from "../components/EmployeeTable";
import API from "../utils/API";

class Employees extends Component {
  state = {
    SearchArr: [],
    users: [],
    sorted: "asc"
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = query => {
    API.employeeList(query)
      .then(res => this.setState({ users: res.data.results, searchArr: res.data.results }))
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const filter = event.target.value;
  //   const filterUsers = this.state.users.filter(item => {
  //     let values = Object.values(item)
  //       .join("")
  //       .toLowerCase();
  //     return values.indexOf(filter.toLowerCase()) !== -1;
  //   });
  //   this.setState({ searchArr: filterUsers });
  // };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    const filter = event.target.value;
    const filterUsers = this.state.users.filter(item => {
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ searchArr: filterUsers });
  };

  handleSort = event => {
    event.preventDefault();
    const user = this.state.users;
      user.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
  };

  render() {
    return (
      <Wrapper>
        <Header
          searchArr={this.state.searchArr}
          handleFormSubmit={this.handleFormSubmit}
          //handleInputChange={this.handleInputChange}
          handleSort={this.handleSort}
        />
        <EmployeeTable 
          users={this.state.users}
        />
      </Wrapper>
    );
  }
}

export default Employees;

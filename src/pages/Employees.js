import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import EmployeeTable from "../components/EmployeeTable";
import API from "../utils/API";

class Employees extends Component {
  state = {
    searchArr: [],
    searchStr: "",
    users: [],
    sorted: "asc"
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = query => {
    API.employeeList(query)
      .then(res =>
        this.setState({ users: res.data.results, searchArr: res.data.results })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({
      searchStr: event.target.value
    });
  };

  //When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    const filterUsers = this.state.searchArr.filter(item => {
      if (
        item.name.first
          .toLowerCase()
          .startsWith(this.state.searchStr.toLowerCase()) ||
        this.state.searchStr.length === 0
      ) {
        return item;
      }
    });
    this.setState({ users: filterUsers });
  };

  handleSort = this.handleSort.bind(this);

  handleSort(event) {
    const users = this.state.users;
    this.setState({
      users: users.sort((a, b) => {
        if (event.target.name === "firstname") {
          if (this.state.sorted === "asc") {
            const nameA = a.name.first.toLowerCase();
            const nameB = b.name.first.toLowerCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          }
        };
        if(event.target.name === "location") {
          if(this.state.sorted === "asc") {
            const locationA = a.location.state.toLowerCase();
            const locationB = b.location.state.toLowerCase();
            if(locationA < locationB) {
              return -1;
            }
            if(locationA > locationB) {
              return 1;
            }
            return 0;
          }
        }
      })
    });
    this.setState({ sorted: this.state.sorted === "asc" ? "desc" : "asc" });
  }

  render() {
    return (
      <Wrapper>
        <Header
          searchArr={this.state.searchArr}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleSort={this.handleSort}
        />
        <EmployeeTable users={this.state.users} />
      </Wrapper>
    );
  }
}

export default Employees;

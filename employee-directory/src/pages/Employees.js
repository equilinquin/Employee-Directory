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
  };

  searchEmployees = query => {
    API.employeeList(query)
      .then(res => this.setState({ users: res.data.results, searchArr: res.data.results}))
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    // console.log(event.target.value);
    this.setState({
      searchStr: event.target.value
    })
    //const filter = event.target.value;
    // const filterUsers = this.state.users.filter(item => {
    //   let values = Object.values(item)
    //     .join("")
    //     .toLowerCase();
    //   return values.indexOf(filter.toLowerCase()) !== -1;
    // });
    // this.setState({ searchArr: filterUsers });
  };

  //When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("test");
    console.log(this.state.searchStr);

    const filterUsers = this.state.searchArr.filter(item => {
      if(item.name.first.toLowerCase().startsWith(this.state.searchStr.toLowerCase()) || this.state.searchStr.length === 0){
        return item;
      }
//      let values = Object.values(item)
 //       .join("")
  //      .toLowerCase();
   //   return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ users: filterUsers });
  };

  
  handleSort(event) {
    console.log(event.target.name)
    console.log("test")

  
    
      this.setState({
        users: this.state.users.sort((a,b) => {
          if(event.target.name === "firstname") {

            if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
              return -1;
            } else if (b.name.first.toLowerCase() > a.name.first.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          }
        })
      })

  
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
        <EmployeeTable 
          users={this.state.users}
        />
      </Wrapper>
    );
  }
}

export default Employees;

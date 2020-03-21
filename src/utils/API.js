import axios from "axios";

export default {
    employeeList: () => {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};
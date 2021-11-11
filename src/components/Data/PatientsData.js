import React, { Component } from "react";
import axios from "axios";

const url =
  "https://us-central1-odontomanager-95368.cloudfunctions.net/app/api/patients";

class PatientsData extends Component {
  state = {
    data: [],
  };

  getData = () => {
    axios.get(url).then((response) => {
      this.setState({ data: response.data });
      console.log(response.data);
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <br />

        <br />
        <br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((patient) => {
              return (
                <tr>
                  <td>{patient.id}</td>
                  <td>{patient.patient_data.name}</td>
                  <td>{patient.patient_data.birthDate}</td>
                  <td>{patient.patient_data.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PatientsData;

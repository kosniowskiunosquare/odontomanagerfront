import React from "react";
import Layout from "../layout/Layout";
import { Paper, Typography } from "@mui/material";
import PatientsData from "../Data/PatientsData";

const Patients = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Layout />
      <div style={{ height: 100 }}></div>
      <Paper
        sx={{
          p: 3,
          margin: "auto",
          maxWidth: 900,
          height: "600 vh",
          flexGrow: 2,
          borderRadius: 5,
        }}
      >
        <Typography variant="h3">Patients List</Typography>
        <PatientsData></PatientsData>
      </Paper>
    </>
  );
};

export default Patients;

import React from "react";
import Grid from "@mui/material/Grid";
import LinkButton from "./LinkButton";
import '../../styles/GlobalStyles.css';
import "./AppBar.css";

const AppBar = (props) => {
  const { pages } = props;
  return (
    <Grid id="app-bar" container justifyContent="center" alignItems="center" columnSpacing={10}>
      {
        pages.map(pageName => (
          <Grid item key={pageName}>
            <LinkButton pageName={pageName}/>
          </Grid>
        ))
      }
    </Grid>
  );
};

export default AppBar;

import React, { Component } from 'react';
import { AppBar} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export class Success extends Component {
  // Function to handle the "Continue" button click
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          {/* AppBar */}
          <AppBar position="static" style={{ backgroundColor: '#1976d2', padding: '10px' }}>
            <h2 style={{ margin: 0, textAlign: 'center', color: 'white' }}>Success</h2>
          </AppBar>
          <h1>Thank You for your submission</h1>
          <p>You will get an email with firther instructions</p>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Success;

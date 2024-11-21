import React, { Component } from 'react';
import { AppBar, TextField, Button } from '@mui/material';
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

export class FormUserDetails extends Component {
  // Function to handle the "Continue" button click
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          {/* AppBar */}
          <AppBar position="static" style={{ backgroundColor: '#1976d2', padding: '10px' }}>
            <h2 style={{ margin: 0, textAlign: 'center', color: 'white' }}>Enter User Details</h2>
          </AppBar>

          {/* Form Container */}
          <div style={styles.container}>
            {/* First Name */}
            <TextField
              label="Enter Your First Name"
              variant="outlined"
              fullWidth
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              InputLabelProps={{ style: { fontSize: 14 } }} // Adjusting label font size
            />

            {/* Last Name */}
            <TextField
              label="Enter Your Last Name"
              variant="outlined"
              fullWidth
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              InputLabelProps={{ style: { fontSize: 14 } }}
            />

            {/* Email */}
            <TextField
              label="Enter Your Email"
              variant="outlined"
              fullWidth
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              InputLabelProps={{ style: { fontSize: 14 } }}
            />

            {/* Continue Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={this.continue}
              style={styles.button}
            >
              Continue
            </Button>
          </div>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    fontWeight: 'bold',
  },
};

export default FormUserDetails;

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

export class FormPersonalDetails extends Component {
  // Function to handle the "Continue" button click
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };


  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

render() {
  const { values, handleChange } = this.props;

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {/* AppBar */}
        <AppBar position="static" style={{ backgroundColor: '#1976d2', padding: '10px' }}>
          <h2 style={{ margin: 0, textAlign: 'center', color: 'white' }}>Enter Personal Details</h2>
        </AppBar>

        {/* Form Container */}
        <div style={styles.container}>
          {/* Occupation */}
          <TextField
            label="Enter Your Occupation"
            variant="outlined"
            fullWidth
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
            margin="normal"
            InputLabelProps={{ style: { fontSize: 14 } }} // Adjusting label font size
          />

          {/* City */}
          <TextField
            label="Enter Your City"
            variant="outlined"
            fullWidth
            onChange={handleChange('city')}
            defaultValue={values.city}
            margin="normal"
            InputLabelProps={{ style: { fontSize: 14 } }}
          />

          {/* Bio */}
          <TextField
            label="Enter Your Bio"
            variant="outlined"
            fullWidth
            onChange={handleChange('bio')}
            defaultValue={values.bio}
            margin="normal"
            InputLabelProps={{ style: { fontSize: 14 } }}
          />

          {/* Buttons */}
          <div style={styles.buttonContainer}>
            {/* Continue Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={this.continue}
              style={styles.button}
            >
              Continue
            </Button>

            {/* Back Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={this.back}
              style={styles.button}
            >
              Back
            </Button>
          </div>
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
      backgroundColor: '#f9f9f9', // Slightly off-white background for contrast
    },
    buttonContainer: {
      display: 'flex', // Arrange buttons side by side
      justifyContent: 'space-between', // Equal spacing between buttons
      marginTop: '20px',
    },
    button: {
      padding: '10px 20px',
      fontWeight: 'bold',
      fontSize: '14px', // Adjust font size for buttons
      textTransform: 'uppercase', // Add consistent styling to button text
    },
  };
  

export default FormPersonalDetails;

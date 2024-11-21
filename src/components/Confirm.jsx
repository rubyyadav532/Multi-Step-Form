import React, { Component } from 'react';
import { AppBar, List, ListItem, ListItemText, Button } from '@mui/material';
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

export class Confirm extends Component {
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
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          {/* AppBar */}
          <AppBar position="static" style={{ backgroundColor: '#1976d2', padding: '10px' }}>
            <h2 style={{ margin: 0, textAlign: 'center', color: 'white' }}>Confirm User Data</h2>
          </AppBar>

          {/* Form Container */}
          <div style={styles.container}>
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>

            {/* Buttons */}
            <div style={styles.buttonContainer}>
              {/* Continue Button */}
              <Button
                variant="contained"
                color="primary"
                onClick={this.continue}
                style={styles.button}
              >
                Confirm & Continue
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

export default Confirm;

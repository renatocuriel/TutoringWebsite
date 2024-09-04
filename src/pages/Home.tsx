import React from 'react';
import { Container, Grid2, Typography, Button, Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>


    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFFFFF', // White background
    padding: '20px',
  },
  heroSection: {
    textAlign: 'center',
    padding: '50px 0',
  },
  heroText: {
    color: '#2C5234', // Dark green color
    fontSize: '36px',
    fontWeight: 'bold',
  },
  heroImage: {
    width: '200px', // Adjust size as needed
    height: 'auto',
    borderRadius: '50%',
    marginTop: '20px',
  },
  aboutSection: {
    textAlign: 'center',
    margin: '40px 0'
  },
  sectionTitle: {
    fontSize: '28px',
    color: 'darkgreen !important',
  },
  aboutText: {
    fontSize: '18px',
    color: '#333333',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 20px',
  }
};

export default Home;
  
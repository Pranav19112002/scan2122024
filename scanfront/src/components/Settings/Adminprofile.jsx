import { Typography } from '@mui/material';
import React from 'react';

function Adminprofile() {
  const admin = JSON.parse(localStorage.getItem('currentadmin'));

  if (!admin) {
    return (
      <div>
        <Typography variant="h3" sx={{ color: 'red', fontFamily: 'cursive' }}>
          Admin not found
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h3" sx={{ color: 'green', fontFamily: 'cursive' }}>
        Current Admin
      </Typography>
      <h3>Email: {admin.email}</h3>
      <h3>Password: {admin.password}</h3>
    </div>
  );
}

export default Adminprofile;
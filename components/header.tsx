'use client';
import { AppBar, Link, TextField, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Link href="/">
          <Typography variant="h6" component="h1">
            Kill Tony DB
          </Typography>
        </Link>
        <TextField
          variant="outlined"
          label="Search"
          onChange={(event) => console.log(event.target.value)}
        />
      </Toolbar>
    </AppBar>
  );
}

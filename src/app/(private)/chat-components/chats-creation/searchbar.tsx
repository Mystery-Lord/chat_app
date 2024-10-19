import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { IoSearch } from "react-icons/io5";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    //marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

export default function SearchBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar 
        sx={{ 
          justifyContent: 'flex-start', 
          backgroundColor: 'transparent', 
          padding: '0 !important',  
          minHeight: 'auto'              
        }}
      >
        <Search>
          <SearchIconWrapper>
            <IoSearch />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="search..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              fontWeight: "300"
            }}
          />
        </Search>
      </Toolbar>
    </Box>
  );
}

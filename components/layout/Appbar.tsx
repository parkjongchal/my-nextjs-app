import MuiToolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import React, {FC} from 'react';
import Typography from '@mui/material/Typography';
import Sign from './Sign';
import {styled} from '@mui/material';

const Toolbar = styled(MuiToolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingX: 40,
  disableGutters: true,
}));
const AppBar: FC<React.PropsWithChildren> = () => {
  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <Typography
          alignSelf="center"
          fontWeight="semiBold"
          variant="h6"
          noWrap
          component="div"
        >
          My NextJs Study Room
        </Typography>
        <Sign />
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;

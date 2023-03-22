import MuiToolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import React, {FC} from 'react';
import Typography from '@mui/material/Typography';
import Sign from './Sign';

const AppBar: FC<React.PropsWithChildren> = () => {
  return (
    <MuiAppBar position="fixed">
      <MuiToolbar>
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
      </MuiToolbar>
    </MuiAppBar>
  );
};

export default AppBar;

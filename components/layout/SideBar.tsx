import {Collapse, List} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MenuItem from './MenuItem';
import React, {FC} from 'react';
import Offset from './Offset';
import {useLayoutContext} from '@/context/LayoutContextProvider';

const SideBar: FC<React.PropsWithChildren> = () => {
  const {collapseMenus} = useLayoutContext();

  return (
    <MuiDrawer variant="permanent">
      <Offset />
      <List disablePadding>
        <MenuItem href="/" title="Home" />
        <MenuItem title="One Depth">
          <Collapse
            in={collapseMenus['One Depth'] ?? false}
            timeout="auto"
            unmountOnExit
          >
            <MenuItem href="/" title="Two Depth" isSubMenu />
          </Collapse>
        </MenuItem>
      </List>
    </MuiDrawer>
  );
};

export default SideBar;

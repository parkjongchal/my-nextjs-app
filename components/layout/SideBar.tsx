import {Collapse, List, styled} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MenuItem from './MenuItem';
import React, {FC} from 'react';
import Offset from './Offset';
import {useLayoutContext} from '@/context/LayoutContextProvider';

const Drawer = styled(MuiDrawer)(({theme}) => ({
  width: 200,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  paddingTop: 20,
  '& .MuiDrawer-paper': {
    drawerWidth: 200,
    width: 200,
    paddingTop: 20,
    zIndex: theme.zIndex.appBar - 1,
  },
}));

const SideBar: FC<React.PropsWithChildren> = () => {
  const {collapseMenus} = useLayoutContext();

  return (
    <Drawer variant="permanent">
      <Offset />
      <List disablePadding>
        <MenuItem href="/" title="Home" />
        <MenuItem title="대메뉴">
          <Collapse
            in={collapseMenus['대메뉴'] ?? false}
            timeout="auto"
            unmountOnExit
          >
            <MenuItem href="/" title="소메뉴" isSubMenu />
          </Collapse>
        </MenuItem>
      </List>
    </Drawer>
  );
};

export default SideBar;

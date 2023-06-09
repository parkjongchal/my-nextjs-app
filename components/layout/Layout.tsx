import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {FC, useState} from 'react';
import {Container, styled} from '@mui/material';
import {
  LayoutContentItem,
  LayoutContext,
} from '@/context/LayoutContextProvider';
import SideBar from '@/components/layout/SideBar';
import Offset from '@/components/layout/Offset';
import Appbar from '@/components/layout/Appbar';

const Main = styled('main')(() => ({
  flexGrow: 1,
  overflow: 'auto',
}));

const MuiContainer = styled(Container)(() => ({
  height: 'calc(100vh - 60px)',
  minWidth: 1080,
  ['@media (min-width:1280px)']: {
    maxWidth: 1240,
  },
  ['@media (min-width:1440px)']: {
    maxWidth: 1720,
  },
  ['@media (min-width:1920px)']: {
    maxWidth: 1800,
  },
}));

const Layout: FC<React.PropsWithChildren> = ({children}) => {
  const [collapseMenus, setCollapseMenus] = useState<LayoutContentItem>({});
  const setCollapseMenu = async (menu: string) => {
    const newCollapseMenus = {...collapseMenus};
    newCollapseMenus[menu] = !newCollapseMenus[menu] ?? false;
    await setCollapseMenus(newCollapseMenus);
  };
  return (
    <LayoutContext.Provider value={{collapseMenus, setCollapseMenu}}>
      <Box display="flex">
        <CssBaseline />
        <Appbar />
        <SideBar />
        <Main>
          <Offset />
          <MuiContainer>{children}</MuiContainer>
        </Main>
      </Box>
    </LayoutContext.Provider>
  );
};

export default Layout;

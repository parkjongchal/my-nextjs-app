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
          <Container disableGutters>{children}</Container>
        </Main>
      </Box>
    </LayoutContext.Provider>
  );
};

export default Layout;

import {
  ListItemText,
  Typography,
  ListItemButton,
  IconButton,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useRouter} from 'next/router';
import React, {FC} from 'react';
import {ExpandLess, ExpandMore} from '@mui/icons-material';
import {useLayoutContext} from '@/context/LayoutContextProvider';

interface MenuItemProps {
  href?: string;
  title: string;
  isSubMenu?: boolean;
}

const MenuItem: FC<React.PropsWithChildren<MenuItemProps>> = ({
  href,
  title,
  isSubMenu,
  children,
}) => {
  const router = useRouter();
  const {collapseMenus, setCollapseMenu} = useLayoutContext();
  const handleClick = async () => {
    if (href) {
      await router.push({pathname: href});
    } else {
      await setCollapseMenu(title);
    }
  };
  const open = collapseMenus[title] ?? false;

  const MenuListItem = styled(ListItemButton)(({theme}) => ({
    paddingLeft: 20,
    height: 56,
    ...(isSubMenu && {
      backgroundColor: theme.palette.grey.A100,
    }),
    ...(!isSubMenu &&
      (open || href === router.pathname) && {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.grey.A200,
      }),
    '&:hover': {
      backgroundColor: theme.palette.grey['300'],
    },
  }));

  return (
    <>
      <MenuListItem onClick={handleClick}>
        <ListItemText
          primary={
            <Typography
              variant={isSubMenu ? 'body2' : 'body1'}
              fontWeight={open || href === router.pathname ? 'bold' : 'regular'}
            >
              {title}
            </Typography>
          }
        />
        {!href && (
          <IconButton>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
        )}
      </MenuListItem>
      {children}
    </>
  );
};

export default MenuItem;

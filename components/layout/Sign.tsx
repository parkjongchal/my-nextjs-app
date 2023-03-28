import React, {FC} from 'react';
import {Avatar, Box, IconButton, Stack} from '@mui/material';
import {useSession, signIn, signOut} from 'next-auth/react';
import {Login, Logout} from '@mui/icons-material';
import NextLink from '@/components/common/NextLink';

const Sign: FC<React.PropsWithChildren> = () => {
  const {data: session} = useSession();
  const stringAvatar = (name: string) => {
    return {
      sx: {
        width: 36,
        height: 36,
        fontSize: 16,
        alignSelf: 'center',
        cursor: 'pointer',
        mr: 2,
      },
      children: `${name.split(' ')[0][0].toUpperCase()}`,
    };
  };
  return (
    <Stack direction="row">
      {session && (
        <Box alignSelf="center">
          <NextLink href="me">
            <Avatar {...stringAvatar(session?.user?.name ?? '')} />
          </NextLink>
        </Box>
      )}
      <IconButton onClick={() => (session ? signOut() : signIn())}>
        {session ? (
          <Logout fontSize="large" sx={{color: '#FFFFFF'}} />
        ) : (
          <Login fontSize="large" sx={{color: '#FFFFFF'}} />
        )}
      </IconButton>
    </Stack>
  );
};

export default Sign;

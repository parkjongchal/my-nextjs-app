import React, {FC} from 'react';
import {Box, styled, Typography} from '@mui/material';

const TitleBox = styled(Box)(() => ({
  marginTop: 15,
  marginBottom: 15,
  display: 'flex',
  justifyContent: 'space-between',
}));

interface TitleProps {
  title: string;
}
const Title: FC<React.PropsWithChildren<TitleProps>> = ({title, children}) => (
  <TitleBox>
    <Typography
      variant="h4"
      fontWeight="bold"
      component="div"
      alignSelf="center"
    >
      {title}
    </Typography>
    {children}
  </TitleBox>
);

export default Title;

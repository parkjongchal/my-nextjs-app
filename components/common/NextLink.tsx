import {styled} from '@mui/material';
import Link from 'next/link';
import React, {FC} from 'react';
import {UrlObject} from 'url';

const StyleLink = styled(Link)(() => ({
  color: 'inherit',
  textDecoration: 'inherit',
}));

interface Props {
  href: string | UrlObject;
}
const NextLink: FC<React.PropsWithChildren<Props>> = ({href, children}) => (
  <StyleLink href={href}>{children}</StyleLink>
);

export default NextLink;

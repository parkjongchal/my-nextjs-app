import {FC} from 'react';
import {gql} from '@apollo/client';
import {NextPageContext} from 'next';
import {getQueryNumberOrDefault} from '@/utils/query';
import {calcOffset} from '@/utils/offset';
import apolloClient from '@/apollo_client';
import {Box} from '@mui/material';
import {OperationVariables} from '@apollo/client/core/types';

const FETCH_COUPONS = gql`
  query ($limit: Int, $offset: Int, $where: profiles_bool_exp) {
    profiles(
      limit: $limit
      offset: $offset
      where: $where
      order_by: [{id: desc}]
    ) {
      id
      email
      name
    }

    profiles_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

interface Data {
  profiles: {
    id: number;
    email: string;
    name: string;
  }[];
  profiles_aggregate: {
    aggregate: {
      count: number;
    };
  };
}

export async function getServerSideProps({query}: NextPageContext) {
  const page = getQueryNumberOrDefault(query.page, 1);
  const limit = getQueryNumberOrDefault(query.limit, 10);
  const offset = calcOffset(limit, page);

  const where: OperationVariables = {};

  const {data} = await apolloClient.query<Data>({
    query: FETCH_COUPONS,
    variables: {
      limit,
      offset,
      where,
    },
  });

  return {
    props: {
      page,
      limit,
      data,
    },
  };
}

interface Props {
  limit: number;
  page: number;
  data: Data;
}

const Hasura: FC<Props> = ({limit, page, data}: Props) => {
  console.log(limit, page);
  return <Box>{data.profiles[0].email}</Box>;
};

export default Hasura;

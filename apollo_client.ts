import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
});

const cache = new InMemoryCache({});

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: httpLink,
  cache,
});

export default apolloClient;

import React, { Component } from 'react';

import App from './App';

//To get data from postgraphile server
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

//creating the Apollo Client
export const client = new ApolloClient({
  link: new HttpLink( { uri: 'http://data.coderbunker.com/graphql' } ),
  cache: new InMemoryCache()
});

export default class RootContainer extends Component {
    render() {
      return (
        <ApolloProvider client={client}>
          <App/>
        </ApolloProvider>
      )
    }
}
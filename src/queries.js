import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://data.coderbunker.com/graphql' }),
  cache: new InMemoryCache(),
});

// YOU CAN USE UNDERSCORE BEFORE THE FUNCTION NAME SO YOU KNOW IT'S COMING FROM HERE

export const _allOrganizations = () =>
  client.query({
    query: gql`
      query {
        allOrganizations {
          edges {
            node {
              orgname
              since
              activity
              peopleCount
              projectCount
              ongoingProjectCount
              totalHours
              totalGross
              totalInvestment
              activePeopleCount
              totalEngMonths
              lastRefresh
              lastUpdate
            }
          }
        }
      }
    `,
  });

export const _allMonthlyGrosses = () =>
  client.query({
    query: gql`
    query {
      allMonthlyGrosses(orderBy: [ENTRY_YEAR_DESC, ENTRY_MONTH_DESC]) {
        edges {
          node {
            entryYear
            entryMonth
            label
            entryMonthName
            total
            currency
            vendorName
            lastRefresh
            lastUpdate
          }
        }
      }
    }
    `,
  });
        

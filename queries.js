import gql from 'graphql-tag';

export const getSignIns = gql`
query getSignIns{
  signIns {
    id
    worker
    remote
  }
}`

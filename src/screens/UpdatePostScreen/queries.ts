import { gql } from '@apollo/client';


export const getPost = gql`query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    description
    
    createdAt
    updatedAt
    __typename
  }
}
`
import { gql } from '@apollo/client';

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id

      name
      username
      bio
      website
      nofPosts
      nofFollowers
      nofFollowings
      image

      createdAt
      updatedAt
    }
  }
`;


export const updateUser = gql`mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id

    name
    username
    bio
    website
    image

    createdAt
    updatedAt
    __typename
  }
}
`;


export const deleteUser = gql`mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    
    createdAt
    updatedAt
    __typename
  }
}
`;
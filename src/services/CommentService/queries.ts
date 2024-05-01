import { gql } from '@apollo/client';

export const getPost = gql`query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      nofComments
      
      createdAt
      updatedAt
      __typename
    }
  }
  `

export const createComment = gql`mutation CreateComment(
    $input: CreateCommentInput! 
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      comment
      userID
      postID
      Post {
        id
        nofComments
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        image
        username
        name
      }
      createdAt
      updatedAt
      __typename
    }
  }`;

export const updatePost = gql`mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      nofComments
      
      createdAt
      updatedAt
      __typename
    }
  }`;

import { useMutation, useQuery } from '@apollo/client';

import {
    CreateCommentMutation,
    CreateCommentMutationVariables, GetPostQuery, GetPostQueryVariables, UpdatePostMutation,
    UpdatePostMutationVariables
} from '../../API';

import { updatePost, createComment, getPost } from './queries';

import { useAuthContext } from '../../contexts/AuthContext';
import { Alert } from 'react-native';

const useCommentService = (postId: string) => {
    const { userId } = useAuthContext();

    const { data: postData } = useQuery<GetPostQuery, GetPostQueryVariables>(getPost, {
        variables: {
            id: postId
        }
    });

    const post = postData?.getPost;

    const [doUpdatePost] = useMutation<
        UpdatePostMutation,
        UpdatePostMutationVariables
    >(updatePost);

    const [doCreateComment] = useMutation<
        CreateCommentMutation,
        CreateCommentMutationVariables
    >(createComment, {
        refetchQueries: ['CommentsByPost'],
    });

    const incrementNofComments = (amount: 1 | -1) => {
        if (!post) {
            Alert.alert("Failed to load post. Try again later")
            return;
        }

        doUpdatePost({
            variables: {
                input: {
                    id: post.id,
                    nofComments: post.nofComments + amount,
                },
            },
        });
    };

    const onCreateComment = async (newComment: string) => {
        if (!post) {
            Alert.alert("Failed to load post. Try again later")
            return;
        }

        console.log('newComment', newComment, post.id, userId)

        try {
            await doCreateComment({
                variables: {
                    input: {
                        postID: post.id,
                        userID: userId,
                        comment: newComment,
                    },
                },
            });
            incrementNofComments(1);
        } catch (e) {
            Alert.alert('Error submitting an comment', (e as Error).message);
        }
    };

    return {
        onCreateComment
    }
}

export default useCommentService;
import { useMutation, useQuery } from '@apollo/client';

import {
    CreateLikeMutation,
    CreateLikeMutationVariables,
    DeleteLikeMutation, DeleteLikeMutationVariables,
    LikesForPostByUserQuery, LikesForPostByUserQueryVariables,
    Post,
    UpdatePostMutation,
    UpdatePostMutationVariables
} from '../../API';

import { createLike, deleteLike, likesForPostByUser, updatePost } from './queries';

import { useAuthContext } from '../../contexts/AuthContext';


const useLikeService = (post: Post) => {
    const { userId } = useAuthContext();

    const { data: dataAllLikes } = useQuery<
        LikesForPostByUserQuery,
        LikesForPostByUserQueryVariables
    >(likesForPostByUser, { variables: { postID: post.id } });

    const postLikes = dataAllLikes?.likesForPostByUser?.items || [];
    const userLike = postLikes?.filter(item => item?.userID === userId)[0];


    const [doUpdatePost] = useMutation<
        UpdatePostMutation,
        UpdatePostMutationVariables
    >(updatePost);

    const [doCreateLike] = useMutation<
        CreateLikeMutation,
        CreateLikeMutationVariables
    >(createLike, {
        variables: { input: { userID: userId, postID: post.id } },
        refetchQueries: ['LikesForPostByUser'],
    });

    const [doDeleteLike] = useMutation<
        DeleteLikeMutation,
        DeleteLikeMutationVariables
    >(deleteLike);

    const incrementNofLikes = (amount: 1 | -1) => {
        doUpdatePost({
            variables: {
                input: {
                    id: post.id,
                    nofLikes: post.nofLikes + amount,
                },
            },
        });
    };

    const onAddLike = () => {
        doCreateLike();
        incrementNofLikes(1);
    }

    const onDeleteLike = () => {
        if (!userLike) {
            return;
        }
        doDeleteLike({ variables: { input: { id: userLike.id } } });
        incrementNofLikes(-1);
    }

    const toggleLike = () => {
        if (userLike) {
            onDeleteLike();
        } else {
            onAddLike();
        }
    }

    return {
        toggleLike,
        isLiked: !!userLike,
        postLikes
    }
}

export default useLikeService;
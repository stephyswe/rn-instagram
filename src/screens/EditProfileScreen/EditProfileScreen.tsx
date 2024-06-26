import {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {useLazyQuery, useMutation, useQuery} from '@apollo/client';
import {deleteUser as deleteCognitoUser, signOut} from 'aws-amplify/auth';
import {v4 as uuidV4} from 'uuid';
import {uploadData} from 'aws-amplify/storage';

import styles from './styles';

import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserInput,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UsersByUsernameQuery,
  UsersByUsernameQueryVariables,
} from '../../API';

import {deleteUser, getUser, updateUser, usersByUsername} from './queries';

import {useAuthContext} from '../../contexts/AuthContext';

import ApiErrorMessage from '../../components/ApiErrorMessage';
import CustomInput, {IEditableUser} from './CustomInput';

import {DEFAULT_USER_IMAGE} from '../../config';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);
  const {control, handleSubmit, setValue} = useForm<IEditableUser>();
  const navigation = useNavigation();

  const {userId} = useAuthContext();

  const {data, loading, error} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );
  const user = data?.getUser;

  const [getUsersByUsername] = useLazyQuery<
    UsersByUsernameQuery,
    UsersByUsernameQueryVariables
  >(usersByUsername);

  const [doUpdateUser, {loading: updateLoading, error: updateError}] =
    useMutation<UpdateUserMutation, UpdateUserMutationVariables>(updateUser);

  const [doDelete, {loading: deleteLoading, error: deleteError}] = useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(deleteUser);

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('username', user.username);
      setValue('bio', user.bio);
      setValue('website', user.website);
    }
  }, [user, setValue]);

  const onSubmit = async (formData: IEditableUser) => {
    const input: UpdateUserInput = {
      id: userId,
      ...formData,
    };

    if (selectedPhoto?.uri) {
      // upload the photo
      input.image = await uploadMedia(selectedPhoto.uri);
    }

    await doUpdateUser({
      variables: {input},
    });
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const uploadMedia = async (uri: string) => {
    try {
      let blob;
      let extension;

      // For file URIs
      const response = await fetch(uri);
      blob = await response.blob();
      extension = blob.type.replace('image/', '');

      // upload the file (blob) to S3
      const s3Response = await uploadData({
        key: `${uuidV4()}.${extension}`,
        data: blob,
      }).result;

      // return key
      return s3Response.key;
    } catch (error) {
      Alert.alert('Error uploading the image', (error as Error).message);
    }
  };

  const confirmDelete = () => {
    Alert.alert('Are you sure?', 'Deleting your user profile is permanent', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes, delete',
        style: 'destructive',
        onPress: startDeleting,
      },
    ]);
  };

  const startDeleting = async () => {
    if (!user) {
      return;
    }
    // delete from DB
    await doDelete({
      variables: {input: {id: userId}},
    });

    try {
      await deleteCognitoUser();
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  const validateUsername = async (username: string) => {
    // query the database based on the usersByUsername

    try {
      const response = await getUsersByUsername({variables: {username}});
      if (response.error) {
        Alert.alert('Failed to fetch username');
        return 'Failed to fetch username';
      }

      const users = response.data?.usersByUsername?.items;
      if (users && users.length > 0 && users?.[0]?.id !== userId) {
        return 'Username is already taken';
      }
    } catch (e) {
      Alert.alert('Failed to fetch username');
    }
    // if there are any users with this username, then return the error

    return true;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error || updateError || deleteError) {
    return (
      <ApiErrorMessage
        title="Error fetching or updating the user"
        message={error?.message || updateError?.message || deleteError?.message}
      />
    );
  }

  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user?.image || DEFAULT_USER_IMAGE}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change profile photo
      </Text>

      <CustomInput
        name="name"
        control={control}
        rules={{required: 'Name is required'}}
        label="Name"
      />
      <CustomInput
        name="username"
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should be more then 3 characters',
          },
          validate: validateUsername,
        }}
        label="Username"
      />
      <CustomInput
        name="website"
        control={control}
        rules={{
          pattern: {
            value: URL_REGEX,
            message: 'Invalid url',
          },
        }}
        label="Website"
      />
      <CustomInput
        name="bio"
        control={control}
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio should be less than 200 characters',
          },
        }}
        label="Bio"
        multiline
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        {updateLoading ? 'Submitting...' : 'Submit'}
      </Text>

      <Text onPress={confirmDelete} style={styles.textButtonDanger}>
        {deleteLoading ? 'Deleting...' : 'DELETE USER'}
      </Text>
    </View>
  );
};

export default EditProfileScreen;

import {useState} from 'react';
import {View, TextInput, Image, StyleSheet, Alert, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useMutation} from '@apollo/client';
import {uploadData} from 'aws-amplify/storage';
import {v4 as uuidV4} from 'uuid';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import colors from '../../theme/colors';

import {CreateNavigationProp, CreateRouteProp} from '../../types/navigation';

import {createPost} from './queries';

import {
  CreatePostInput,
  CreatePostMutation,
  CreatePostMutationVariables,
} from '../../API';

import {useAuthContext} from '../../contexts/AuthContext';

import Button from '../../components/Button';
import Carousel from '../../components/Carousel';
import VideoPlayer from '../../components/VideoPlayer';

const CreatePostScreen = () => {
  const {userId} = useAuthContext();
  const navigation = useNavigation<CreateNavigationProp>();

  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  const [doCreatePost] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(createPost);

  const route = useRoute<CreateRouteProp>();
  const {image, images, video} = route.params;

  let content;
  if (image) {
    content = (
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
        resizeMode={'contain'}
      />
    );
  } else if (images) {
    content = <Carousel images={images} />;
  } else if (video) {
    content = <VideoPlayer uri={video} />;
  }

  const submit = async () => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const input: CreatePostInput = {
      type: 'POST',
      description,
      image: undefined,
      images: undefined,
      video: undefined,
      nofComments: 0,
      nofLikes: 0,
      userID: userId,
    };

    // upload media files to S3 and get the key
    if (image) {
      input.image = await uploadMedia(image);
    } else if (images) {
      const imageKeys = await Promise.all(images.map(img => uploadMedia(img)));
      input.images = imageKeys.filter(key => key) as string[];
    } else if (video) {
      input.video = await uploadMedia(video);
    }

    try {
      await doCreatePost({variables: {input}});

      navigation.popToTop();
      navigation.navigate('HomeStack');
    } catch (e) {
      Alert.alert('Error uploading the post', (e as Error).message);
      setIsSubmitting(false);
    }
  };

  // Function to get file URI from content URI
  /* const getFileUriFromContentUri = async (contentUri: string) => {
    const filePath = `${RNFS.TemporaryDirectoryPath}/${uuidV4()}`; // Generate a temporary file path
    await RNFS.copyAssetsFileIOS(contentUri, filePath, 0, 0); // Copy the content URI to the temporary file path
    return filePath; // Return the temporary file path
  }; */

  /* const fetchResourceFromURI = async (uri: any) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  }; */

  const uploadMedia = async (uri: string) => {
    try {
      let blob;
      let extension;

      // video handling (not complete)
      if (uri.startsWith('content://')) {
        /*  const path = RNFetchBlob.fs.asset(uri); 
        blob = await RNFetchBlob.fs.readFile(path, 'base64'); 
        extension = '.mp4';
        blob.type = extension */
        return;
      } else {
        // For file URIs
        const response = await fetch(uri);
        blob = await response.blob();
      }

      extension = blob.type.replace('image/', '');

      // upload the file (blob) to S3
      const s3Response = await uploadData({
        key: `${uuidV4()}.${extension}`,
        // Alternatively, path: ({identityId}) => `protected/${identityId}/album/2024/1.jpg`
        data: blob,
        options: {
          onProgress: ({transferredBytes, totalBytes}) => {
            if (totalBytes) {
              setProgress(transferredBytes / totalBytes);
            }
          },
        },
      }).result;

      // return key
      return s3Response.key;
    } catch (error) {
      Alert.alert('Error uploading the image', (error as Error).message);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.root}>
      <View style={styles.content}>{content}</View>

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description..."
        style={styles.input}
        placeholderTextColor={colors.grey}
        multiline
      />

      <Button
        text={isSubmitting ? 'Submitting...' : 'Submit'}
        onPress={submit}
      />

      {isSubmitting && (
        <View style={styles.progressContainer}>
          <View style={[styles.progress, {width: `${progress * 100}%`}]} />
          <Text>Uploading {Math.floor(progress * 100)}%</Text>
        </View>
      )}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  input: {
    marginVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    color: colors.black,
  },
  content: {
    width: '100%',
    aspectRatio: 1,
  },
  progressContainer: {
    backgroundColor: colors.lightgrey,
    width: '100%',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
  progress: {
    backgroundColor: colors.primary,
    position: 'absolute',
    height: '100%',
    alignSelf: 'flex-start',
    borderRadius: 25,
  },
});

export default CreatePostScreen;

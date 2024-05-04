import {useEffect, useState} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import {getUrl} from 'aws-amplify/storage';

import Carousel from '../Carousel';
import DoublePressable from '../DoublePressable';
import VideoPlayer from '../VideoPlayer';

import styles from './styles';

import {Post} from '../../API';

interface IContent {
  post: Post;
  isVisible: boolean;
  toggleLike: any;
}

const Content = ({post, isVisible, toggleLike}: IContent) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imagesUri, setImagesUri] = useState<string[] | null>(null);
  const [videoUri, setVideoUri] = useState<string | null>(null);

  useEffect(() => {
    downloadMedia();
  }, []);

  const downloadMedia = async () => {
    if (post.image) {
      if (post.image?.startsWith('http')) {
        return;
      }
      // download the image
      const getUrlResult = await getUrl({
        key: post.image,
        options: {
          validateObjectExistence: false, // Check if object exists before creating a URL
        },
      });

      setImageUri(getUrlResult.url.toString());
    } else if (post.images) {
      const uris = await Promise.all(
        post.images.map(async img => {
          const getUrlResult = await getUrl({
            key: img,
            options: {
              validateObjectExistence: false, // Check if object exists before creating a URL
            },
          });
          return getUrlResult.url.toString();
        }),
      );
      setImagesUri(uris);
    } else if (post.video) {
      const getUrlResult = await getUrl({
        key: post.video,
        options: {
          validateObjectExistence: false, // Check if object exists before creating a URL
        },
      });
      setVideoUri(getUrlResult.url.toString());
    }
  };

  if (imageUri) {
    return (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{uri: post.image?.startsWith('http') ? post.image : imageUri}}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (imagesUri) {
    return <Carousel images={imagesUri} onDoublePress={toggleLike} />;
  } else if (post.video) {
    return (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default Content;

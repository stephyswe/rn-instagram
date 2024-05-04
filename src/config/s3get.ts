import { getUrl } from 'aws-amplify/storage';


export const storageGet = async (images: string[] | string, setFunction: any) => {
    const getImageUrl = async (img: string) => {
        const getUrlResult = await getUrl({
            key: img,
            options: {
                validateObjectExistence: false,
            },
        });
        return getUrlResult.url.toString();
    };

    if (Array.isArray(images)) {
        const uris = await Promise.all(images.map(async img => await getImageUrl(img)));
        setFunction(uris);
    } else {
        const imageUrl = await getImageUrl(images);
        setFunction(imageUrl);
    }
}

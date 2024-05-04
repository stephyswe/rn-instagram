import { getUrl, remove } from 'aws-amplify/storage';


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

export const storageRemove = async (images: string[] | string) => {
    const getImageUrl = async (img: string) => {
        await remove({
            key: img,
            options: {
                accessLevel: 'guest', // defaults to `guest` but can be 'private' | 'protected' | 'guest'
            },
        });
    };

    if (Array.isArray(images)) {
        await Promise.all(images.map(async img => await getImageUrl(img)));
    } else {
        await getImageUrl(images);
    }
};



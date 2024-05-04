import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
    post: {},
    textBlack: {
        color: colors.black
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    userName: {
        fontWeight: fonts.weight.bold,
        color: colors.black,
    },
    threeDots: {
        marginLeft: 'auto',
        color: colors.black
    },
    footer: {
        padding: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    icon: {
        marginHorizontal: 5,
    },
    text: {
        color: colors.black,
        lineHeight: 18,
    },
    bold: {
        fontWeight: fonts.weight.bold,
    },
});

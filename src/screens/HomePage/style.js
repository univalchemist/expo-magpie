import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    contentStyle: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContainer: {
        width: width / 2,
        marginBottom: 30,
    },
    activeButton: {
        backgroundColor: '#FAD6A5',//#CFFFE5
    },
    button: {
        marginTop: '0%',
        width: '100%'
    },
    buttonColor: {
        color: 'black',
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'flex-end',
        textAlign: 'center'
    },
})
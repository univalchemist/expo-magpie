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
        backgroundColor: '#CFFFE5',//#CFFFE5
    },
    disableButton: {
        backgroundColor: 'grey',
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
    joinBtnTxtColor: {
        color: 'black',
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'flex-end',
        textAlign: 'center'
    },
    declineBtnTxtColor: {
        color: 'white',
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'flex-end',
        textAlign: 'center'
    },
})
import { StyleSheet, Dimensions } from 'react-native';
import { PRIMARYCOLOR } from '../../../global/style';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    contentStyle: {
        flex: 1,
        alignItems: 'center',
    },
    bodyContent: {
        backgroundColor: 'transparent',
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    bodyHeaderTxt: {
        fontWeight: 'bold',
        fontSize: 18
    },
    bodyFoot: {
        paddingBottom: 5, 
        paddingHorizontal: 5, 
        position: 'absolute', 
        bottom: 50
    },
    joinTxt: {
        color: PRIMARYCOLOR.BLUE,
        fontSize: 20,
        textAlign: 'center'
    },
    activeButton: {
        backgroundColor: PRIMARYCOLOR.ORANGE,
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
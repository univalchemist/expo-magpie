import { StyleSheet } from 'react-native';
import { PRIMARYCOLOR } from '../../global/style';
export const styles = StyleSheet.create({
    activeButton: {
        backgroundColor: PRIMARYCOLOR.ORANGE,
    },
    button: {
        marginTop: '0%',
        width: '100%'
    },
    buttonColor: {
        color: 'black',
        flex: 1,
        justifyContent: 'flex-end',
        textAlign: 'center'
    },
    logoBody: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    formBody: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    bodyFoot: { 
        flex: 1, 
        alignItems: 'center' 
    },
    getStartTxtBody: {
        position: 'absolute', 
        bottom: 20 
    },
    getStartTxt: {
        fontSize: 18
    }
})
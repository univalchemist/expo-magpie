import { StyleSheet, Dimensions } from 'react-native';
import { PRIMARYCOLOR } from '../../../global/style';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    contentStyle: {
        flex: 1,
        alignItems: 'center',
    },
    bodyHeaderTxt: {
        fontWeight: 'bold',
        fontSize: 18
    },
    bodyContent: {
        backgroundColor: 'transparent', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1 
    },
    startTxt: {
        color: PRIMARYCOLOR.BLUE,
        fontSize: 18
    } 
})
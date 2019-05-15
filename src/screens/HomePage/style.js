import { StyleSheet, Dimensions } from 'react-native';
import { DEVICE, PRIMARYCOLOR } from '../../global/style';
export const styles = StyleSheet.create({
    contentStyle: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContainer: {
        backgroundColor: 'transparent',
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    itemContainer: {
        width: DEVICE.WIDTH / 2,
        marginBottom: 30,
    },
    itemImg: {
        flex: 1,
        flexDirection: 'column',
        width: DEVICE.WIDTH / 2,
        height: DEVICE.WIDTH / 2 + 80
    },
    itemSelectBtn: {
        position: 'absolute',
        bottom: -20,
        left: DEVICE.WIDTH / 8,
        width: 90,
        height: 45,
        backgroundColor: PRIMARYCOLOR.ORANGE,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 5,
    },
    bodyFoot: {
        height: 55,
        paddingBottom: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    submitBtn: {
        height: 30,
        backgroundColor: PRIMARYCOLOR.ORANGE,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 5,
    },
    captureBtn: {
        height: 40,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 5,
    },
    winnerTxt: {
        color: PRIMARYCOLOR.BLUE,
        fontSize: 20,
        textAlign: 'center'
    },
    congratulationTxt: {
        color: PRIMARYCOLOR.GREY,
        fontSize: 20,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    activeButton: {
        backgroundColor: PRIMARYCOLOR.ORANGE,
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
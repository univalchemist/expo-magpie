import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Text, Thumbnail } from "native-base";
const goback = (props) => {
    props.navigation.goBack()
}
export const HeaderContainer = (props) => {
    return (
        <Header style={[styles.header, props.style]}>
            <Left style={styles.left}>
                {
                    props.goBack &&
                    <Button
                        iconLeft
                        transparent
                        onPress={() => goback(props)}>
                        <Icon name="chevron-left" type='Feather' style={{ color: 'black' }} />
                        <Text style={styles.rightTxtStyle}>{props.backText}</Text>
                    </Button>

                }
                {
                    props.leftText &&
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.rightTxtStyle}>{props.leftText}</Text>
                    </View>
                }

            </Left>
            <Body style={styles.body}>

            </Body>
            <Right style={styles.right}>
                {props.right &&
                    <Button transparent onPress={props.onTapRight}>
                        <Text uppercase={false} style={styles.rightTxtStyle}>{props.rightText}</Text>
                    </Button>}

            </Right>
        </Header>
    )
}
const styles = StyleSheet.create({
    header: {
        elevation: 0,
        backgroundColor: 'transparent',
        shadowColor: 'transparent',
        borderBottomColor: 'transparent',
        borderBottomWidth: 0
    },
    body: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    textTitle: {
        marginTop: 5,
        alignSelf: 'center',
        color: 'black',
    },
    left: {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    right: {
        flex: 4,
        backgroundColor: 'transparent',
    },
    rightTxtStyle: {
        color: 'red',
        fontSize: 12,
    }
})

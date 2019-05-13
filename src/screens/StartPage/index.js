import React from 'react';
import { View, Text, Dimensions, Image, PermissionsAndroid, Platform, SafeAreaView } from 'react-native';

import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import images from '../../../assets/images';
import { styles } from './style';
class Start extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            image: {}
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }
    submit = () => {
        this.props.navigation.navigate('HomeScreen');
    }
    render() {
        const { visible } = this.state;
        const deviceWidth = Dimensions.get('window').width - 50;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Image resizeMode="cover" source={images.logo_bird} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Image resizeMode="cover" source={images.logo_title} />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, width: deviceWidth }}>
                        <Item style={{ marginBottom: 20 }}>
                            <Input placeholder="Phone Number" style={{ flex: 1 }} />
                        </Item>
                        <Item style={{ marginBottom: 20 }}>
                            <Input placeholder="Username" style={{ flex: 1 }} />
                        </Item>
                        <View style={{ marginTop: 30 }}>
                            <Button block style={[styles.button, styles.activeButton]} onPress={() => this.submit()} >
                                <Text style={styles.buttonColor}> Sign Up </Text>
                            </Button>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={{ position: 'absolute', bottom: 20 }}>
                        <Text style={{ fontSize: 18 }}> Sing Up to Get Started!</Text>
                    </View>
                </View>
            </SafeAreaView >
        );
    }
}


export default Start;
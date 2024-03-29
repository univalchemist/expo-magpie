import React from 'react';
import { View, Text, Dimensions, Image, SafeAreaView } from 'react-native';

import { Item, Input, Button } from 'native-base';
import images from '../../../assets/images';
import { styles } from './style';
class SignUp extends React.Component {

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
        this.props.navigation.navigate('WaitingStack');
    }
    render() {
        const { visible } = this.state;
        const deviceWidth = Dimensions.get('window').width - 50;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.logoBody}>
                    <View>
                        <Image resizeMode="cover" source={images.logo_bird} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Image resizeMode="cover" source={images.logo_title} />
                    </View>
                </View>
                <View style={styles.formBody}>
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
                <View style={styles.bodyFoot}>
                    <View style={styles.getStartTxtBody}>
                        <Text style={styles.getStartTxt}> Sing Up to Get Started!</Text>
                    </View>
                </View>
            </SafeAreaView >
        );
    }
}


export default SignUp;
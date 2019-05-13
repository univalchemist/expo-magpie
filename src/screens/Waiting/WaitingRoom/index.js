import React from 'react';
import { View, Text, Dimensions, StatusBar, FlatList, Image, ImageBackground } from 'react-native';

import { Container, Content, Button } from 'native-base';
import { styles } from './style';
import { HeaderContainer } from '../../../components/header';
import images from '../../../../assets/images';
import { secondsToHms } from '../../../utils/TimerUtil';
class WaitingRoom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            timer: 3,
            startTime: '00:00:03'
        }
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState((prevState)=> ({ 
                timer: prevState.timer - 1,
                startTime: secondsToHms(prevState.timer - 1)
            })),
            1000
          );
    }
    componentDidUpdate(){
        if(this.state.timer === 0){ 
          clearInterval(this.interval);
          this.props.navigation.navigate('JoinGame');
        }
      }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        const { startTime } = this.state;
        return (
            <Container style={{ paddingTop: StatusBar.currentHeight }}>
                <HeaderContainer title="" navigation={this.props.navigation} />
                <Content contentContainerStyle={styles.contentStyle}>
                    <View style={{ alignItems: 'center' }}>
                        <View >
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>WAITING ROOM</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'tranparent', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <View>
                            <Image resizeMode="cover" source={images.iconFinder} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 18, color: 'red' }}>{'Next game starts in '}{startTime}</Text>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}


export default WaitingRoom;
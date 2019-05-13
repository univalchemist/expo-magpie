import React from 'react';
import { View, Text, Dimensions, StatusBar, FlatList, Image, ImageBackground } from 'react-native';

import { Container, Content, Button } from 'native-base';
import { HeaderContainer } from '../../components/header';
import { styles } from './style';
import images from '../../../assets/images';
const { width, height } = Dimensions.get('window');
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            data: [
                { image: images.pen2, time: '12:23:45', user: 'Capspice1', votes: 0 },
                { image: images.pen1, time: '12:23:46', user: 'Capspice2', votes: 1 },
                { image: images.fancy_pen, time: '12:23:47', user: 'Capspice3', votes: 2 },
                { image: images.pen2, time: '12:23:48', user: 'Capspice4', votes: 3 },
                { image: images.pen2, time: '12:23:49', user: 'Capspice5', votes: 4 },
                { image: images.feather_pen, time: '12:23:50', user: 'Capspice6', votes: 5 }
            ]
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }
    renderItem = ({ item, index }) => {
        return (
            <View style={[styles.itemContainer]}>
                <ImageBackground style={{ flex: 1, flexDirection: 'column', width: width / 2, height: width / 2 + 80 }} resizeMode={'cover'} source={item.image}>
                    <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', bottom: 30 }}>
                        <View style={{ flex: 3, alignItems: 'center' }}>
                            <Text style={{ fontSize: 12 }}>{'Submitted: '}{item.time}</Text>
                            <Text style={{ fontSize: 12 }}>{'by: '}{item.user}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.votes}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{'Votes'}</Text>
                        </View>
                    </View>

                </ImageBackground>
                <View style={{
                    position: 'absolute',
                    bottom: -20,
                    left: 30,
                    width: 90,
                    height: 45,
                    backgroundColor: '#CFFFE5',
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
                }}>
                    <Text>{'SELECT'}</Text>
                </View>
            </View>
        )
    }
    render() {
        const { visible, data } = this.state;
        return (
            <Container style={{ paddingTop: StatusBar.currentHeight }}>
                <HeaderContainer goBack={false} navigation={this.props.navigation} leftText={'Score:10'} right={true} rightText={'Time Left: 0:08:45'} />
                <Content contentContainerStyle={styles.contentStyle}>
                    <View style={{ alignItems: 'center' }}>
                        <View >
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>GAME STAGE: VOTING</Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text>Select your favorite submission</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'tranparent', paddingTop: 20, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <FlatList
                            data={data}
                            numColumns={2}
                            contentContainerStyle={styles.container}
                            keyExtractor={(item) => item.time}
                            renderItem={this.renderItem}
                        />
                    </View>
                    <View style={{ paddingBottom: 5, paddingHorizontal: 5 }}>
                        <Button block style={[styles.button, styles.activeButton]} >
                            <Text style={styles.buttonColor}> SUBMIT </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}


export default Home;
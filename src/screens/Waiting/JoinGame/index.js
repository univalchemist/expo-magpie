import React from 'react';
import { View, Text, Dimensions, StatusBar } from 'react-native';
import { Container, Content, Button } from 'native-base';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { styles } from './style';
import { HeaderContainer } from '../../../components/header';

const { height, width } = Dimensions.get('window')
class JoinGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }
    onActionJoin = () => {
        this.setState({ visible: true });
    }
    onTapJoin = () => {
        this.setState({ visible: false }, () => this.onGoToHomeScreen());
    }
    onTapDecline = () => {
        this.setState({ visible: false });
    }
    onGoToHomeScreen = () => {
        this.interval = setInterval(
            () => this.props.navigation.navigate('HomeStack'),
            500
        );
    }
    render() {
        const { visible } = this.state;
        return (
            <Container style={{ paddingTop: StatusBar.currentHeight }}>
                <HeaderContainer title="" goBack={false} navigation={this.props.navigation} />
                <Content contentContainerStyle={styles.contentStyle}>
                    <View style={{ alignItems: 'center' }}>
                        <View >
                            <Text style={styles.bodyHeaderTxt}>{'WAITING ROOM'}</Text>
                        </View>
                    </View>
                    <View style={styles.bodyContent}>
                        <View >
                            <Text style={styles.joinTxt}>{'A new game has begun'}</Text>
                        </View>
                        <View style={styles.bodyFoot}>
                            <Button block style={[styles.button, styles.activeButton]} onPress={this.onActionJoin} >
                                <Text style={styles.buttonColor}> Join Game </Text>
                            </Button>
                        </View>
                    </View>
                </Content>
                <Dialog
                    visible={visible}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}
                >
                    <DialogContent>
                        <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
                            <Text style={styles.joinTxt}>{' You have been '}{'\n'}{' invited to vote '}</Text>
                        </View>
                        <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                            <Button block style={[styles.button, styles.activeButton]} onPress={this.onTapJoin} >
                                <Text style={styles.joinBtnTxtColor}> Join </Text>
                            </Button>
                        </View>

                        <View style={{ marginTop: 20, marginBottom: 20, paddingHorizontal: 20 }}>
                            <Button block style={[styles.button, styles.disableButton]} onPress={this.onTapDecline} >
                                <Text style={styles.declineBtnTxtColor}> Decline </Text>
                            </Button>
                        </View>
                    </DialogContent>
                </Dialog>
            </Container>
        );
    }
}


export default JoinGame;
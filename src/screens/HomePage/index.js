import React from 'react';
import { View, Text, Dimensions, StatusBar, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { ImagePicker, Permissions, } from 'expo';

import Dialog, { DialogContent } from 'react-native-popup-dialog';

import { HeaderContainer } from '../../components/header';
import { styles } from './style';
import images from '../../../assets/images';
import getPermissionAsync from '../../global/functions';
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            data: [
                { image: images.man1, votes: 0 },
                { image: images.man2, votes: 1 },
                { image: images.man3, votes: 2 },
                { image: images.man4, votes: 3 },
                { image: images.man2, votes: 4 },
                { image: images.man1, votes: 5 }
            ]
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }
    takePicture = async () => {
        if (await getPermissionAsync(Permissions.CAMERA)) {
            if (await getPermissionAsync(Permissions.CAMERA_ROLL)) {
                const result = await ImagePicker.launchCameraAsync({
                    allowsEditing: true,
                    base64: false,
                    aspect: [4, 4],
                });
                console.log('takePicture result', result);
                if (!result.cancelled) {

                }
            }

        }
    }
    selectLibrary = async () => {
        if (await getPermissionAsync(Permissions.CAMERA_ROLL)) {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                base64: false,
                aspect: [4, 4],
            });
            console.log('selectLibrary result', result);
            if (!result.cancelled) {

            }
        }
    }
    onSubmit = () => {
        this.setState({ visible: true });
    }
    onActionCamera = () => {
        this.takePicture();
    }
    onActionGallery = () => {
        this.selectLibrary();
    }
    onTapClose = () => {
        this.setState({ visible: false });
    }
    renderItem = ({ item, index }) => {
        return (
            <View style={[styles.itemContainer]}>
                <ImageBackground style={styles.itemImg} resizeMode={'cover'} source={item.image}>
                    <View style={{ flex: 1, position: 'absolute', top: 5, right: 10 }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.votes}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{'Votes'}</Text>
                        </View>
                    </View>

                </ImageBackground>
                <View style={styles.itemSelectBtn}>
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
                    <View style={styles.listContainer}>
                        <FlatList
                            data={data}
                            numColumns={2}
                            contentContainerStyle={styles.container}
                            keyExtractor={(item) => item.votes}
                            renderItem={this.renderItem}
                        />
                    </View>
                    <View style={styles.bodyFoot}>
                        <View style={{ flex: 1, padding: 7.5 }}>
                            <TouchableOpacity style={styles.submitBtn} onPress={this.onSubmit}>
                                <Text>{'Submit'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, padding: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.captureBtn} onPress={this.onActionCamera}>
                                <Image resizeMode={'cover'} source={images.iconCamera}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, padding: 7.5 }}>
                            <TouchableOpacity style={styles.submitBtn} onPress={this.onActionGallery}>
                                <Text>{'Gallery'}</Text>
                            </TouchableOpacity>
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
                            <Text style={styles.winnerTxt}>
                                {`Winner!`}{"\n"}{'Dr.Drake'}
                            </Text>
                        </View>
                        <View style={{ marginTop: 40, paddingHorizontal: 50 }}>
                            <Text style={styles.congratulationTxt}>
                                {'Congratulations'}
                            </Text>
                        </View>
                        <View style={{ marginTop: 40, marginBottom: 20, paddingHorizontal: 50 }}>
                            <Button block style={[styles.button, styles.activeButton]} onPress={this.onTapClose} >
                                <Text style={styles.joinBtnTxtColor}> Close </Text>
                            </Button>
                        </View>

                    </DialogContent>
                </Dialog>
            </Container>
        );
    }
}


export default Home;
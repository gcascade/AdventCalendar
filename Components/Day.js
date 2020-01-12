import React from 'react';
import { StyleSheet, View, Image, Modal, TouchableHighlight, Text } from 'react-native';

export default class Day extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        }
    }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    _displayModal = () => {
        return (
            <View>
                <Modal
                    animationType='fade'
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <TouchableHighlight
                        onPress={() => {
                        this._setModalVisible(!this.state.modalVisible);
                        }}>
                        <View>
                            <Text style={styles.title}>Day {this.props.day.toString()}</Text>
                            <Image style={styles.image} source={require('../assets/icon.png')} />
                            <Text style={styles.title}>Congratulations ! You got this super item !</Text>
                        </View>

                    </TouchableHighlight>
                </Modal>      
                <TouchableHighlight
                    onPress={() => {
                    this._setModalVisible(true);
                    }}>
                        <View style={styles.container}>
                            <Text style={styles.button}>{this.props.day.toString()}</Text>
                        </View>
                </TouchableHighlight>
            </View>
          );
    }

    render() {
        return (
            <View>
                {this._displayModal()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        height: 80,
        width: 80,
        alignItems: 'center',
        margin: 1
    },
    
    button: {
        fontSize: 16,
    },

    title: {
        marginTop: 25,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,        
    },

    image: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center'
    },
})
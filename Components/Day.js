import React from 'react';
import { StyleSheet, View, Image, Modal, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';

class Day extends React.Component {
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
        var today = new Date().getDate(); //Current Day
        let highlight = this.props.highlightDay && today === this.props.day;
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
                            <Image style={styles.image} source={this.props.urls[this.props.day - 1]} />
                            <Text style={styles.title}>Congratulations ! You got a {this.props.names[this.props.day - 1]} !</Text>
                        </View>

                    </TouchableHighlight>
                </Modal>      
                <TouchableHighlight
                    onPress={() => {
                    this._setModalVisible(true);
                    }}>
                        <View style={[styles.container, highlight ? styles.containerHighlight : styles.containerClassic]}>
                            <Text style={highlight ? styles.buttonHighlight : styles.button}>{this.props.day.toString()}</Text>
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
        height: 80,
        width: 80,
        alignItems: 'center',
        margin: 1,
    },

    containerHighlight: {
        borderWidth: 4,
        borderColor: 'red',
        borderRadius: 10,
    },

    containerClassic: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    
    button: {
        fontSize: 16,
    },

    buttonHighlight: {
        fontSize: 16,
        fontWeight: 'bold'
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

const mapStateToProps = state => {
    return {
        highlightDay: state.highlightDay,
        urls: state.urls,
        names: state.names,
    }
}

export default connect(mapStateToProps)(Day)
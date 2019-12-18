import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';

export default class Day extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: false
        }
    }

    _clickButton = () => {
        this.setState({ isClicked: true})
    }

    _displayButton = () => {
        if (this.state.isClicked) {
            return (
                <Image style={styles.image} source={require('../assets/icon.png')} />
            )
        }
        else {
            return (
                <Button style={styles.button} title={this.props.day.toString()} onPress={() => this._clickButton()} />
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this._displayButton()}
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
        alignItems: "center",
    },
    
    button: {
        fontSize: 14
    },

    image: {
        height: 80,
        width: 80,
        borderRadius: 10
    }
})
import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

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

    render() {
        return (
            <View style={styles.container}>
                <Button stlye={styles.button} title={this.props.day.toString()} onPress={() => this._clickButton()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        height: 80,
        width: 80,
        alignItems: "center"
    },
    
    button: {
        fontSize: 14
    }
})
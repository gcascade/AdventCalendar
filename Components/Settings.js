import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>Settings</Text>
                <Text style={styles.text}>To be done</Text>
                {/* <Text style={styles.text}>Thanks to https://icons8.com/ for the icons</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    title: {
        marginTop: 25,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,        
    },

    text: {
        fontSize: 14
    }
})
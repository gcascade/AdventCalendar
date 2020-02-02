import React from 'react'
import { StyleSheet, View, Text, Switch, TextInput } from 'react-native'
import { connect } from 'react-redux'

class Settings extends React.Component {
    constructor(props) {
        super(props)
    }

    _toggleRandomizer = (value) => {
        const action = { type: 'TOGGLE_RANDOMIZE', value: value}
        this.props.dispatch(action)
    }

    _toggleHighlightDay = (value) => {
        const action = { type: 'TOGGLE_HIGHLIGHT_DAY', value: value}
        this.props.dispatch(action)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Settings</Text>
                <View style={styles.switchRow}>
                    <Text style={styles.text}>Calendar's title:</Text>
                    <TextInput style={styles.textinput}
                    defaultValue='Advent Calendar'></TextInput>
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.text}>Randomize calendar's layout ?</Text>
                    <Switch
                    style={styles.switch}
                    onValueChange = {this._toggleRandomizer}
                    value = {this.props.randomize}/>
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.text}>Highlight current day ?</Text>
                    <Switch
                    style={styles.switch}
                    onValueChange = {this._toggleHighlightDay}
                    value = {this.props.highlightDay}/>
                </View>
                {/* <Text style={styles.text}>Thanks to https://icons8.com/ for the icons</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    title: {
        marginTop: 25,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,        
    },

    text: {
        fontSize: 18,
        marginTop: 5
    },

    switch: {
        
    },

    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },

    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 30,
        width: 200,
        borderColor: '#000000',
        borderWidth: 1,
    },
})

const mapStateToProps = state => {
    return {
        randomize: state.randomize,
        highlightDay: state.highlightDay,
    }
}

export default connect(mapStateToProps)(Settings)
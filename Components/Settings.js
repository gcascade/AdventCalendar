import React from 'react'
import { StyleSheet, View, Text, Switch, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import Divider from 'react-native-divider'

class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.titleInEdition = this.props.title
        console.log(this.titleInEdition)
    }

    _toggleRandomizer = (value) => {
        const action = { type: 'TOGGLE_RANDOMIZE', value: value}
        this.props.dispatch(action)
    }

    _toggleHighlightDay = (value) => {
        const action = { type: 'TOGGLE_HIGHLIGHT_DAY', value: value}
        this.props.dispatch(action)
    }

    _editTitle = (text) => {
        this.titleInEdition = text
    }

    _updateTitle = () => {
        if (this.titleInEdition) {
            const action = { type : 'EDIT_TITLE', value: this.titleInEdition}
            this.props.dispatch(action)
        }
    }

    _updateUrl = (day) => {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Settings</Text>
                <Divider borderColors="#000" color= "#000" orientation="center">General</Divider>
                <View style={styles.switchRow}>
                    <Text style={styles.text}>Calendar's title:</Text>
                    <TextInput 
                        style={styles.textinput}
                        onChangeText={(text) => this._editTitle(text)}
                        onSubmitEditing={this._updateTitle()}
                        defaultValue={this.titleInEdition} />
                    {/* TODO : a Tick is better + add some message 'title was changed' */}
                    <Button title='Edit' onPress={() => this._updateTitle()} />
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
                <Divider borderColors="#000" color= "#000" orientation="center">Customize items</Divider>
                {/* <Text style={styles.text}>Item 1:</Text>
                <Text style={styles.text}>URL:</Text>
                <TextInput style={styles.text} 
                    defaultValue='Test'
                    onSubmitEditing={() => this._updateUrl(1)}></TextInput>
                <Text style={styles.text}>Name:</Text> */}
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
        title: state.title,
    }
}

export default connect(mapStateToProps)(Settings)
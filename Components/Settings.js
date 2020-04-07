import React from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, TouchableHighlight, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Divider from 'react-native-divider';
import Collapsible from 'react-native-collapsible';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.titleInEdition = this.props.title;
        this.arrowIcons = {
            'up': require('../Images/icons8-collapse-arrow-24.png'),
            'down': require('../Images/icons8-collapse-downarrow-24.png'),
        }
        this.state = { collapsed: true };
        this.urlsInEdition = [...this.props.urls];
        this.namesInEdition = [...this.props.names];
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
            const action = { type : 'EDIT_TITLE', value: this.titleInEdition };
            this.props.dispatch(action);
        }
    }

    _editUrl = (day, value) => {
        this.urlsInEdition[day - 1] = value;
    }

    _updateUrl = (day) => {
        let urlsToSend = [];
        for (let i = 0; i < 24; i++) {
            urlsToSend[i] = this.urlsInEdition[i] == this.props.defaultUrls[i] ? this.urlsInEdition[i] : {uri: this.urlsInEdition[i]}
        }
        const action = { type: 'UPDATE_URL', value: urlsToSend, day: day };
        this.props.dispatch(action);
    }

    _editName = (day, value) => {
        this.namesInEdition[day - 1] = value;
    }

    _updateName = (day, value) => {
        const action = { type: 'UPDATE_NAME', value: this.namesInEdition, day:day };
        this.props.dispatch(action);
    }

    _collapse = () => {
        this.setState({collapsed: !this.state.collapsed});
    }

    _daysOptions = () => {
        let options = [];

        for (let i = 1; i < 25; i++) {
            let urlDefaultValue = this.props.urls[i - 1] != this.props.defaultUrls[i - 1] ? this.props.urls[i - 1].toString() : null;
            
            if (urlDefaultValue && urlDefaultValue.uri) {
                urlDefaultValue = uri;
            }

            let dayOption = (
                <View key={i}>
                    <Divider borderColors="#000" color= "#000" orientation="center">Item {i}</Divider>
                    <View style={styles.row}>
                        <Text style={styles.text}>URL:</Text>
                        <TextInput style={styles.textinput} 
                            defaultValue={urlDefaultValue}
                            onChangeText={(value) => this._editUrl(i, value)}
                            onSubmitEditing={() => this._updateUrl(i)} />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Name:</Text>
                        <TextInput style={styles.textinput} 
                            defaultValue={this.props.names[i - 1].toString()}
                            onChangeText={(value) => this._editName(i, value)}
                            onSubmitEditing={() => this._updateName(i)} />
                    </View>
                </View>
            );
            options.push(dayOption);
        }

        return options;
    }
 
    render() {        
        let arrow = this.state.collapsed ? this.arrowIcons['down'] : this.arrowIcons['up'];

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Settings</Text>
                <ScrollView>
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
                    {/* TODO : Hide previous days */}
                    <TouchableHighlight onPress={this._collapse}>
                        <View style={styles.row}>
                            <Text style={styles.text}>Customize items</Text>
                            <Image style={styles.arrow} source={arrow} />
                        </View>
                    </TouchableHighlight>
                    <Collapsible collapsed={this.state.collapsed}>
                        {this._daysOptions()}
                    </Collapsible>

                    {/* <Text style={styles.text}>Thanks to https://icons8.com/ for the icons</Text> */}

                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
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

    arrow: {

    },
})

const mapStateToProps = state => {
    return {
        randomize: state.randomize,
        highlightDay: state.highlightDay,
        title: state.title,
        urls: state.urls,
        names: state.names,
        defaultUrls: state.defaultUrls,
    }
}

export default connect(mapStateToProps)(Settings)
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Day from './Day'

export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
    }

    /**
     * Generate the calendar
     */
    _createCalendar = () => {
        let cal = (
            <View styles={styles.container}>
                <Text style={styles.title}>Advent Calendar</Text>
                {this._generateRows()}
            </View>
        )

        return cal
    }

    /**
     * Create the list of 6 rows
     */
    _generateRows = () => {
        var rowList = []

        for (let i = 0; i < 6; i++) {
            rowList.push(this._createRow(i))
        }

        return rowList
    }

    /**
     * Creates a row with its elements
     */
    _createRow = (rowMultiplier) => {
        return (            
            <View key = {rowMultiplier} style={styles.row}>
                <Day day={1 + rowMultiplier * 4}/>
                <Day day={2 + rowMultiplier * 4}/>
                <Day day={3 + rowMultiplier * 4}/>
                <Day day={4 + rowMultiplier * 4}/>
            </View>
        )
    }

    /**
     * Render()
     */
    render() {
        return ( 
            this._createCalendar()
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flexWrap: 'wrap',
    },
    
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    title: {
        marginTop: 25,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,        
    }
})
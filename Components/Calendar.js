import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Day from './Day'
import { connect } from 'react-redux'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
    }

    /**
     * Generate the calendar
     * 
     * @returns the calendar
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
     * 
     * @returns a list of 6 rows
     */
    _generateRows = () => {
        var rowList = []

        if (this.props.randomize) {

            // Generate random number between 1 and 24 and assign them randomly on the grid
            const min = 1
            const max = 25
            var randomList = []
            while (randomList.length < 24) {
                var random = Math.floor(Math.random() * (max - min) + min)
                if (!randomList.some(n => n == random)) {
                    randomList.push(random)
                }
            }

            // Generate each row
            for(let i = 0; i < 6; i++) {
                rowList.push(this._createRowFromElements(i, randomList[i*4], randomList[i*4+1], randomList[i*4+2], randomList[i*4+3]))
            }
        }
        else {            
            for (let i = 0; i < 6; i++) {
                rowList.push(this._createRow(i))
            }
        }

        return rowList
    }

    /**
     * Creates a row with its elements
     * 
     * @param rowNumber rowNumber
     * @returns a view that is a row of 4 elements
     */
    _createRow = (rowNumber) => {
        return this._createRowFromElements(
            rowNumber,
            1 + rowNumber * 4,
            2 + rowNumber * 4,
            3 + rowNumber * 4,
            4 + rowNumber * 4
        )
    }

    /**
     * Creates a row with its elements
     * 
     * @param key rowKey
     * @param element1 first element of the row
     * @param element2 second element of the row
     * @param element3 third element of the row
     * @param element4 fourth element of the row
     * @returns a view that is a row of 4 elements
     */
    _createRowFromElements = (key, element1, element2, element3, element4) => {
        return (            
            <View key = {key} style={styles.row}>
                <Day day={element1}/>
                <Day day={element2}/>
                <Day day={element3}/>
                <Day day={element4}/>
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

const mapStateToProps = state => {
    return {
        randomize: state.randomize
    }
}

export default connect(mapStateToProps)(Calendar)
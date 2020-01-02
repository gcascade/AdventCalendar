import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { StyleSheet, Image } from 'react-native'
import Calendar from '../Components/Calendar'
import Settings from '../Components/Settings'

const CalendarTabNavigator = createBottomTabNavigator(
    {
        Calendar: {
            screen: Calendar,
            navigationOptions: {
                title: 'Calendar',
                tabBarIcon: () => {
                    return <Image 
                    source={require('../Images/icons8-calendar-25-32.png')}
                    style={styles.icon}/>
                }
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                title: 'Settings',
                tabBarIcon: () => {
                    return <Image 
                    source={require('../Images/icons8-settings-48.png')}
                    style={styles.icon}/>
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: false,
            showIcon: true
        }
    }
)

const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30
    }
  })

export default createAppContainer(CalendarTabNavigator)
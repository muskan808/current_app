import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import pattern from '../../assets/v.jpeg'
import { head1 } from '../common/formcss'
import { button1 } from '../common/button'

const Homepage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <Text
                style={head1}
    >DashBoard {'\n'}Welcome to Varenyam Yoga</Text>
<Image style={styles.logo} source={pattern} />
            <Text style={button1}
                onPress={
                    () => { navigation.navigate('login') }
                }
            >Logout</Text>
        </View>
    )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: '',
        alignItems: 'center',
    }
})
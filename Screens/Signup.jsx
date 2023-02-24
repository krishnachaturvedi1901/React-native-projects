import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Signup = ({navigation}) => {
  return (
    <View>
      <Text>Signup</Text>
      <Text style={styles.backtologin} onPress={()=>navigation.navigate('Login')} >Already an account - Login</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  backtologin:{
    ...Platform.select({
       android:{
         color:'blue',
         fontWeight:'bold',
       },
       default:{
        color:'red',
        fontWeight:'bold',
      }
    })
    
  }
})
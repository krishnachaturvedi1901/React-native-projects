import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const FirstScreen = () => {
    const navigation=useNavigation()
    useEffect(() => {
        setTimeout(()=>{
          navigation.navigate('Login')
        },3000)
    }, [])
    
  return (
    <View style={styles.introScreen} >
      <View style={styles.LogoDiv} >
        <Text style={styles.logoText} >#TODO</Text>
        
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
    introScreen:{
        backgroundColor:'#6abf4e',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logoText:{
        fontSize:40,
        fontWeight:'bold',
    }
});

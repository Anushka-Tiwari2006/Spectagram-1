import React from "react"
import { Component } from "react";
import { View,Text,StyleSheet } from "react-native";


 export default class Feed extends Component{
     render(){
         return(
             <View style = {styles.container}>
                 <Text> Feed.js </Text>
             </View>
         )
     }
 }

 const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    }

})
   
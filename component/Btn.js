import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Btn( {bgColor , btnLabel, textColor, Press, customWidth}) {
  return (
    <TouchableOpacity 
     activeopacity={0.1} 
     onPress={Press}
     style={[styles.button, {backgroundColor: bgColor, width:customWidth}]}>
      <Text style={{ color: textColor , fontSize: 22, fontWeight:'bold'}}>{btnLabel}</Text>
    </TouchableOpacity>
  )
}
const styles =  StyleSheet.create({
  button:{
    borderRadius:100, 
    alignItems:'center', 
    padding:10,
    paddingLeft:40,
    paddingRight:40,
    marginVertical: 10,
  }
})
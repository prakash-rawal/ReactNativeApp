import React from 'react';
import { View, Text, Button, StyleSheet, Dimentions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 
  // const {height, width} = Dimentions.get('window');

const Responsive = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.main}>
        <View style={styles.section1} />
        <View style={styles.section2} />
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    // height:500
  },
  header: {
    height: hp(15),
    // height:180,
    backgroundColor: 'tomato',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    height: hp(70),
    // height:500
  },
  section1: {
    width:wp(50),
    // width:200,
    backgroundColor:'orange',
  },
  section2: {
    width:wp(50),
    // width:200,
    backgroundColor:'skyblue'
  },
  footer:{
    height:hp(15),
    // height:180,
    backgroundColor:'lightgreen'
  }
});
export default Responsive;

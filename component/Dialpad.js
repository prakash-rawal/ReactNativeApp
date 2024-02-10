import { Link } from '@react-navigation/native';
import React from 'react';
import { View, Button, Linking, Alert, StyleSheet } from 'react-native';



const Dialpad = (props) => {

  const phoneNumber = '+912345567678'

  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };


  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink)
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Call" onPress={handleCall} />
      </View>
      <View style={styles.buttonContainer}>
        <Button color="red" title="Open URL" onPress={() => openWebsite('http://github.com')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Project-2' onPress={()=> props.navigation.navigate('FlatCard')}></Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Responsive' onPress={()=> props.navigation.navigate('Responsive')}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '30%',
  },
});


export default Dialpad;

import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constant';


const Home = (props) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 100, }}>
                <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
                <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Coding</Text>
                <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
                <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
                <View>
                    <Button title='Infinite Scoll & Buttons' onPress={()=> props.navigation.navigate('Infinitesroll')}></Button>
                </View>
                
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({})

export default Home;
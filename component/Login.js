import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React from 'react'
import Background from './Background'
import { darkGreen } from './Constant'
import Field from './Field'
import Btn from './Btn'

export default function Login(props) {
    return (
        <Background>
            {/* <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, alignItems: 'center', }}
                    keyboardShouldPersistTaps="handled"
                > */}
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginTop:50 }}>
                        <Text style={{ color: 'white', fontSize: 64, marginVertical: 10, fontWeight: 'bold' }}>Login</Text>
                        <View style={{
                            backgroundColor: 'white',
                            height: '100%', width: 420,
                            borderTopLeftRadius: 100,
                            paddingTop: 100,
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: 'bold',
                                color: darkGreen
                            }}>Welcome Back🙂</Text>
                            <Text style={{
                                fontSize: 19,
                                fontWeight: 'bold',
                                color: 'grey',
                            }}>
                                Login to your account
                            </Text>
                            <Field placeholder='Email / Username' keyboardType={'email-address'} />
                            <Field placeholder='Password' secureTextEntry={true} />
                            <View style={{ width: '100%', alignItems: 'flex-end', marginBottom: 30, marginRight: 100 }}>
                                <Text style={{ fontWeight: 'bold', color: darkGreen }}>Forgot Password?</Text>
                            </View>
                            <Btn bgColor={darkGreen}
                                textColor='white'
                                btnLabel='Login'
                                customWidth={200}
                                Press={() => alert('Logged In')}
                            />
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: darkGreen
                                        }}> Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                {/* </ScrollView>
            </KeyboardAvoidingView> */}
        </Background >
    )
}

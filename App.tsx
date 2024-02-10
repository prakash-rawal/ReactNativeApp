import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup'
import Infinitesroll from './component/Infinitesroll';
import FlatCard from './component/Project2/FlatCard';
import Responsive from './component/Responsive';


const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Infinitesroll" component={Infinitesroll} />
          <Stack.Screen name="FlatCard" component={FlatCard} />
          <Stack.Screen name="Responsive" component={Responsive} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default App;

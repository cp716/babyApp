import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';


import BabyTodayScreen from './src/screens/BabyTodayScreen';
import DetailScreen from './src/screens/DetailScreen';
import EditScreen from './src/screens/EditScreen';
import CreateScreen from './src/screens/CreateScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey:'AIzaSyByjJHKVM-vPdBUGJVYzxOe2Ze5xnuUC2o',
  authDomain: 'babyapp2022.firebaseapp.com',
  projectId: 'babyapp2022',
  storageBucket: 'babyapp2022.appspot.com',
  messagingSenderId: '73309134686',
  appId: '1:73309134686:web:0a87db9bce7305c12279cf',
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  
  return (
    //<BabyTodayScreen />
    //<DetailScreen />
    //<EditScreen />
    //<CreateScreen />
    //<LogInScreen />
    //<SignUpScreen />

    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: "#FFDB59" },
          headerTitleStyle: { color: "#111111"},
          headerTitle: 'Baby App',
          headerTintColor: '#111111',
          headerBackTitle: 'back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="BabyToday" component={BabyTodayScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


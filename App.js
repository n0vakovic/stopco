import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

// nav
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// You can import from local files
import Mock_HDYF from './components/MockHDYF';
import Mock_Global from './components/MockGlobal';
import Mock_Groups from './components/MockGroups';
import Mock_Person from './components/MockPerson';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

function HDYF_screen({ navigation }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Global')}>
      <Mock_HDYF />
    </TouchableOpacity>
  );
}

function Global_screen({ navigation }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Groups')}>
      <Mock_Global />
    </TouchableOpacity>
  );
}

function Groups_screen({ navigation }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Person')}>
         <Mock_Groups />
    </TouchableOpacity>
  );
}

function Person_screen() {
  return (
    <View style={styles.container}>
         <Mock_Person />
    </View>
  );
}

function NavigationApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HDYF_screen} />
        <Stack.Screen name="Global" component={Global_screen} />
        <Stack.Screen name="Groups" component={Groups_screen} />
        <Stack.Screen name="Person" component={Person_screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MockOneScreen() {
  return (
    <View style={styles.container}>
      <Card>
         <Mock_Groups />
      </Card>
    </View>
  );
}

export default function App() {
  return NavigationApp();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

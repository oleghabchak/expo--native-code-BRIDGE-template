import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet, Button, Alert, Text} from 'react-native';
import { hello } from './modules/my-module';

export default function App() {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <View style={styles.container}>
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onclick={()=> hello()} title={'Call native Module'}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

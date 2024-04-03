import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import {Nav} from './components/nav'


export default function App() {
  return (
    <View style={styles.container}>
      <Nav></Nav>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b2d39',
    alignItems: 'center',
    justifyContent: 'center',
    color:"white",
    justifyContent:'flex-start'
  },
  colors:{
    color:"white"
  }
});

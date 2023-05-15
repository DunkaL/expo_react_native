import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, FlatList, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View>
      {/* <ActivityIndicator size="large" /> */}
      {/* <FlatList /> */}
      <Text style={styles.testText}>React-Native</Text>
      {/* <StatusBar animated={true} barStyle='default' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  testText: {
    color: 'red',
    fontSize: 20
  }
});

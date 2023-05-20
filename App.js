import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, FlatList, ActivityIndicator, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView>
      {/* <ActivityIndicator size="large" /> */}
      {/* <FlatList /> */}
      <Text style={styles.testText}>React-Native</Text>
      <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque cupiditate dicta, fuga odio in, iure a perferendis adipisci beatae maiores similique sapiente nulla assumenda mollitia. Voluptatum tempore unde ut odit deserunt consequatur fuga quia esse earum perspiciatis, consectetur doloribus impedit? Temporibus similique dolores suscipit at quas culpa obcaecati velit consequuntur. Perspiciatis modi voluptatum quia vero quis incidunt quisquam at, eaque natus, odio nulla error, molestias adipisci illo quo qui culpa ipsam laborum! Dolore enim distinctio odio similique culpa necessitatibus exercitationem molestias excepturi, soluta libero unde a neque, dolorem debitis velit perferendis delectus vitae cumque officia. Molestias minima suscipit iure.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque cupiditate dicta, fuga odio in, iure a perferendis adipisci beatae maiores similique sapiente nulla assumenda mollitia. Voluptatum tempore unde ut odit deserunt consequatur fuga quia esse earum perspiciatis, consectetur doloribus impedit? Temporibus similique dolores suscipit at quas culpa obcaecati velit consequuntur. Perspiciatis modi voluptatum quia vero quis incidunt quisquam at, eaque natus, odio nulla error, molestias adipisci illo quo qui culpa ipsam laborum! Dolore enim distinctio odio similique culpa necessitatibus exercitationem molestias excepturi, soluta libero unde a neque, dolorem debitis velit perferendis delectus vitae cumque officia. Molestias minima suscipit iure.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque cupiditate dicta, fuga odio in, iure a perferendis adipisci beatae maiores similique sapiente nulla assumenda mollitia. Voluptatum tempore unde ut odit deserunt consequatur fuga quia esse earum perspiciatis, consectetur doloribus impedit? Temporibus similique dolores suscipit at quas culpa obcaecati velit consequuntur. Perspiciatis modi voluptatum quia vero quis incidunt quisquam at, eaque natus, odio nulla error, molestias adipisci illo quo qui culpa ipsam laborum! Dolore enim distinctio odio similique culpa necessitatibus exercitationem molestias excepturi, soluta libero unde a neque, dolorem debitis velit perferendis delectus vitae cumque officia. Molestias minima suscipit iure.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque cupiditate dicta, fuga odio in, iure a perferendis adipisci beatae maiores similique sapiente nulla assumenda mollitia. Voluptatum tempore unde ut odit deserunt consequatur fuga quia esse earum perspiciatis, consectetur doloribus impedit? Temporibus similique dolores suscipit at quas culpa obcaecati velit consequuntur. Perspiciatis modi voluptatum quia vero quis incidunt quisquam at, eaque natus, odio nulla error, molestias adipisci illo quo qui culpa ipsam laborum! Dolore enim distinctio odio similique culpa necessitatibus exercitationem molestias excepturi, soluta libero unde a neque, dolorem debitis velit perferendis delectus vitae cumque officia. Molestias minima suscipit iure.
      </Text>
      <StatusBar animated={true} />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  },
  testText: {
    color: 'red',
    fontSize: 20,
    marginBottom: 20
  }
});

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.blackText}>
          Hello world
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensures SafeAreaView takes up the full screen
  },
  container: {
    flex: 1, // Makes the container take up the full available space
    alignItems: 'center', // Centers text horizontally
    justifyContent: 'center', // Centers text vertically
  },
  blackText: {
    color: '#000000',
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View style={styles.container}>
      <View style={[styles.cardContainer, styles.cardOne]}>
        <Text>Red</Text>
      </View>
      <View style={[styles.cardContainer, styles.cardTwo]}>
        <Text>Blue</Text>
      </View>
      <View style={[styles.cardContainer, styles.cardThree]}>
        <Text>Green</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    gap: 10,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 100,
    height: 100,
  },
  cardOne: {
    backgroundColor: '#FF0000',
  },
  cardTwo: {
    backgroundColor: '#0000FF',
  },
  cardThree: {
    backgroundColor: '#00FF00',
  },
});

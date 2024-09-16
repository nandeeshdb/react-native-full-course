import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScrollCard = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>ScrollCard</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>ScrollCard</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>ScrollCard</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>ScrollCard</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>ScrollCard</Text>
      </View>
    </ScrollView>
  );
};

export default ScrollCard;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    backgroundColor: '#000000',
    padding: 8,
    margin: 10,
  },
  cardText: {
    color: '#ffffff',
  },
});

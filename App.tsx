import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/flat-card';
import ScrollCrard from './components/scroll-cards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ScrollCrard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

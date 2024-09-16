import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/flat-card';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

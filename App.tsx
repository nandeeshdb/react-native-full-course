import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCard from './components/flat-card';
import ScrollCrard from './components/scroll-cards';
import ImageCard from './components/image-card';
import LinkCard from './components/link-card';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ScrollCrard />
        <ImageCard />
        <LinkCard/>
      </ScrollView >
    </SafeAreaView>
  );
};

export default App;

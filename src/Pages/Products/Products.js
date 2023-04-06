import React from 'react';
import {SafeAreaView, Text, Flatlist} from 'react-native';
import Config from 'react-native-config';
const Products = () => {
  return (
    <SafeAreaView>
      <Text> asdasd {Config.API_URL}</Text>
    </SafeAreaView>
  );
};

export {Products};

import React from 'react';
import { View, Text, Button } from 'react-native';

const Comp2 = ({ navigation, sharedData }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>In Comp2: {sharedData}</Text>
      <Button title="Go back to Comp1" onPress={() => navigation.navigate('Comp1')} />
    </View>
  );
};

export default Comp2;

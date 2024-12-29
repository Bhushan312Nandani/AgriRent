import React from 'react';
import { View, Text, Button } from 'react-native';

const Comp1 = ({ navigation, sharedData, setSharedData }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>{sharedData}</Text>
      <Button title="Go to Comp3" onPress={() => navigation.navigate('Comp3')} />
    </View>
  );
};

export default Comp1;

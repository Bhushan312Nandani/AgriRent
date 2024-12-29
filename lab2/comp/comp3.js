import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const Comp3 = ({ navigation, sharedData, setSharedData }) => {
  const [inputValue, setInputValue] = useState('');

  const handleUpdate = () => {
    setSharedData(inputValue);
    navigation.navigate('Comp2');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>In Comp3: {sharedData}</Text>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter new data"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 20, width: 200, textAlign: 'center' }}
      />
      <Button title="Update and Go to Comp2" onPress={handleUpdate} />
    </View>
  );
};

export default Comp3;

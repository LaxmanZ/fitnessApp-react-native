import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

const FitScreen = () => {
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];
  //   console.log(current);

  return (
    <View style={{ marginTop: 35 }}>
      <Image
        style={{ width: '100%', height: 370 }}
        source={{ uri: current.image }}
      />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 25,
          fontSize: 25,
          fontWeight: 'bold',
        }}
      >
        {current.name}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontSize: 28,
          fontWeight: 'bold',
        }}
      >
        x{current.sets}
      </Text>

      <Pressable
        style={{
          backgroundColor: 'blue',
          width: 180,
          padding: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 25,
          borderRadius: 20,
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 17, color: 'white' }}>
          DONE
        </Text>
      </Pressable>
    </View>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});

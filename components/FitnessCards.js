import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import fitness from '../data/fitness';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FitnessCards = () => {
  const FitnessData = fitness;
  const handlePress = () => {};
  return (
    <View>
      {FitnessData.map((item, index) => (
        <Pressable
          onPress={handlePress}
          key={index}
          style={{ margin: 10, alignItems: 'center', justifyContent: 'center' }}
        >
          <Image
            style={{ width: '95%', height: 140, borderRadius: 8 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              position: 'absolute',
              top: 20,
              left: 20,
              color: 'white',
            }}
          >
            {item.name}
          </Text>

          <MaterialCommunityIcons
            style={{
              position: 'absolute',
              color: 'white',
              bottom: 15,
              left: 20,
            }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});

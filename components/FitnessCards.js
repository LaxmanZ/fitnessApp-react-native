import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import fitness from '../data/fitness';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 65 }}>
      {FitnessData.map((item, index) => (
        <Pressable
          onPress={() =>
            navigation.navigate('Workout', {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
            })
          }
          key={index}
          style={{ margin: 10, alignItems: 'center', justifyContent: 'center' }}
        >
          <Image
            style={{ width: '90%', height: 140, borderRadius: 8 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              position: 'absolute',
              top: 20,
              left: 30,
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
              left: 25,
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

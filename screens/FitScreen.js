import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
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
      {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}
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
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate('Rest');
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
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
      )}

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 50,
        }}
      >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate('Rest');

            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 100,
          }}
        >
          <Text
            style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}
          >
            PREV
          </Text>
        </Pressable>
        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate('Rest');
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              SKIP
            </Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});

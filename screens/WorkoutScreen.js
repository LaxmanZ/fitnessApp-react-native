import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const WorkoutScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  //   console.log(route.params);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 35, backgroundColor: 'white' }}
      >
        <Image
          style={{
            width: '100%',
            height: 200,
          }}
          source={{ uri: route.params.image }}
        />
        <Ionicons
          style={{ position: 'absolute', top: 5, left: 10 }}
          name="arrow-back"
          size={28}
          color="white"
          onPress={() => navigation.goBack()}
        />

        {route.params.excersises.map((item, index) => (
          <Pressable
            key={index}
            style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />

            <View style={{ marginLeft: 13 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {item.name}
              </Text>
              <Text style={{ color: 'gray', marginTop: 4, fontSize: 15 }}>
                x{item.sets}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        onPress={() =>
          navigation.navigate('Fitscreen', {
            excersises: route.params.excersises,
          })
        }
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 10,
          backgroundColor: 'blue',
          marginVertical: 10,
          borderRadius: 7,
          width: 110,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: '600',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Start
        </Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});

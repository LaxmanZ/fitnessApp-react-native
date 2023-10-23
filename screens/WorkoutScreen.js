import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { FitnessItems } from '../Context';

const WorkoutScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  //   console.log(route.params);

  const { completed, setCompleted } = useContext(FitnessItems);

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
              <Text style={{ fontSize: 16, fontWeight: 'bold', width: 200 }}>
                {item.name}
              </Text>
              <Text style={{ color: 'gray', marginTop: 4, fontSize: 15 }}>
                x{item.sets}
              </Text>
            </View>

            {completed.includes(item.name) ? (
              <AntDesign style={{marginLeft: 40}} name="checkcircle" size={24} color="green" />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        onPress={() => {
          navigation.navigate('Fitscreen', {
            excersises: route.params.excersises,
          });
          setCompleted([]);
        }}
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

import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import FitnessCards from '../components/FitnessCards';

const HomeScreen = () => {
  return (
    <ScrollView style={{ marginTop: 35 }}>
      <View
        style={{
          backgroundColor: '#cd853f',
          padding: 10,
          height: 200,
          width: '100%',
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
          HOME WORKOUT
        </Text>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>
              0
            </Text>
            <Text style={{ color: '#d0d0d0', marginTop: 6, fontSize: 17 }}>
              WORKOUT
            </Text>
          </View>
          <View>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>
              0
            </Text>
            <Text style={{ color: '#d0d0d0', marginTop: 6, fontSize: 17 }}>
              KCAL
            </Text>
          </View>
          <View>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>
              0
            </Text>
            <Text style={{ color: '#d0d0d0', marginTop: 6, fontSize: 17 }}>
              MINUTES
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{
              width: '90%',
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png',
            }}
          />
        </View>
      </View>
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

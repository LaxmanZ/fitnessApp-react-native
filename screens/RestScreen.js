import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const RestScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);

  const timeStart = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    timeStart();
    //clean up
    return () => clearTimeout(timer);
  });
  return (
    <View style={{ marginTop: 35 }}>
      <Image
        // resizeMode="contain"
        source={{
          uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png',
        }}
        style={{ width: '100%', height: 400 }}
      />
      <Text
        style={{
          fontSize: 27,
          fontWeight: '900',
          marginTop: 30,
          textAlign: 'center',
        }}
      >
        TAKE A BREAK
      </Text>
      <Text style={{
          fontSize: 40,
          fontWeight: '800',
          marginTop: 27,
          textAlign: 'center',
        }}>{timeLeft}</Text>
    </View>
  );
};

export default RestScreen;

const styles = StyleSheet.create({});

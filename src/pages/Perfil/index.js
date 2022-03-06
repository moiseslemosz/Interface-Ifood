import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, View, ButtonContainer } from './style';
import { Text } from 'react-native';

import banner from '../../assets/img/banner.png'
import Button from '../../components/Button'

export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
         <Text>Perfil</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { RestauranteView, RestauranteFoto, RestauranteInfo } from './style';

const RestauranteItem = ({foto,nome,key,nota,categoria,distancia,valorFrete,tempoEntrega}) =>{
   return (
          <RestauranteView key={key}>
              <RestauranteFoto
                  source={{
                     uri: foto.trim(),
                     width: 50,
                     height: 50,
                     resizeMode: 'cover';
                  }}
              />
              <RestauranteInfo>
                   <Text>{nome}</Text>
                   <Text><AntDesign name="star" siza={12} color="#F9A825"/>{nota} - {categoria} - {di>
                   <Text>{tempoEntrega} + R${valorFrete}</Text>
                   <Text></Text>
              </RestauranteInfo>
          </RestauranteView>);
}

export default RestauranteItem;

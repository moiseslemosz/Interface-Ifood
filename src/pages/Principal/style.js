import styled, { css } from 'styled-components/react';
import { Diamensions } from 'react-native'


export const SafeAreaView = styled.SafeAreaView`

   flex: 1;
   align-items: center;
   padding-top: 40px;


`

export const Image = styled.Image`

   margin: 40px;
   padding: 80px;

`

export const ViewActivity = styled.View`

   flex: 1;
   alihgn-items: center;
   justify-content: center;
   padding-top: 40px;

`

export const View = styled.View`

  flex: 2;
  align-items: center;
  padding-top:40px;

`

export const ViewPrincipal = styled.ScrollView`

  padding: 40px 0;
  flex: 1;

`

export const ButtomContainer = styled.View`

  flex-direction: cow;
  justify-content: space-between;
  align-items: center;
  width:100%;
  padding: 0 20px 20px 20px;


`

export const CategoriaView = styyled.ScrollView`

  margin-top: 20px;
  heigth: 90px;
  max-width: 85%;

`

export const SelectTipo = styled.View`

  flex-direction: row;
  text-align: left;
  margin: 0 20px 10px 20px;
  font-weigth: boldd;
  width: ${(Dimensions.get('window').width)}px;

`

export const ButtomTipoSelect = styled.TouchableOpacity`

  margin-rigth: 20px;

`

export const TextTipoSelect = styled.Text`

  ${props => props.selected ? css`
          font-weigth: bold;
          color: #E00E0E;
   ` : css``}

`

export const BannerView = styled.ScrollView`

  margin-top: 20px;
  height: 180px;
  flex-direction: row;
  width: ${(Dimensions.get('window').width) - 10} px;

`

export const ViewRestaurantes = styled.View`

  justify-content: center;
  margin: 10px 20px 30px 20px;
  width: ${(Diamensions.get('window').width) - 50}px;

`

export const TituloRestaurantes = styled.Text`

  text-align: left;
  margin: 40px 20px 10px 20px;
  font-weigth:
  width: ${(Dimensions.get('window').width)}px;

`

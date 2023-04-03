import React from 'react';
import { Text, View, Button } from 'react-native';
import estilo from './estilo';

export default function Home (props) {
  return (
    <View style={estilo.container}>

      <View onTouchStart={()=>{props.navigation.navigate('Rota')}}>
        <Text style={estilo.titulo} >
          Atividade surpresa do Eliton-Chan
        </Text>
      </View>
      <Text style={estilo.texto}>
          Clique nos botões abaixo para ver-los
      </Text>
      <View style={estilo.botao}>
        <Button
          title='Menu'
          onPress={()=>{props.navigation.openDrawer()}}
        />
      </View>

      <View style={estilo.botao}>
        <Button
          title='Tela Adidas'
          onPress={()=>{props.navigation.navigate('Adidas')}}         
        />
      </View>
      <View style={estilo.botao}>
        <Button
          title='Tela Nike'
          onPress={()=>{props.navigation.navigate('Nike')}}         
        />
      </View>
      <View style={estilo.botao}>
        <Button
          title='Tela UnderArmour'
          onPress={()=>{props.navigation.navigate('UnderArmour')}}         
        />
      </View>
      <View style={estilo.botao}>
        <Button
          title='Tela Mizuno'
          onPress={()=>{props.navigation.navigate('Mizuno')}}         
        />
      </View>
      </View>
  );
}
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const TelaAdidas = () => {
  return (
    <ScrollView>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d62cdc0ac2f140629b00af4d011cd444_9366/Tenis_Nebzed_Cloudfoam_Preto_GX4695_01_standard.jpg' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Nabzed Cloudfoam</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 229,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bb59f280d924d7394b9af5700d3f810_9366/Tenis_Drop_Step_XL_Branco_IF2574_01_standard.jpg' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Drop Step XL</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 799,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00d98726f73c4a239c94ae5f01666775_9366/Tenis_D.O.N._Issue_4_Vermelho_GX6886_01_standard.jpg' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis D.O.N Issue #4</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 549,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70ad2bdc61d54499b804af3400bc42d5_9366/Tenis_adidas_Sport_DNA_x_LEGOr_Preto_HQ1313_01_standard.jpg' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Sport DNA x Lego®</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 549,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b9bf6ac8ff1474c9410af8d00750d5c_9366/Tenis_Ultraboost_Light_Laranja_HP9205_01_standard.jpg' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis UltraBoost Light</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 1.199,99</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: "#E1EDFE"
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
});

export default TelaAdidas;

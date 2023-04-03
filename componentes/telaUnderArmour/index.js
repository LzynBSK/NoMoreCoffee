import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const TelaUnderArmour = () => {
  return (
    <ScrollView>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgs.search.brave.com/mS2gO3Ae0iD8PH5-rf74K2BaUgcpG6Cn1oF3Fs8qdIM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZm9vdGxvY2tl/ci5jb20vaXMvaW1h/Z2UvRUJGTDIvMjM1/NDU0MDBfYTE_d2lk/PTE2MDAmaGVpPTE2/MDAmZm10PXBuZy1h/bHA' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Flow Velociti Wind 2</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 1.199,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgs.search.brave.com/gw2IyW4QKx3LaFsip5TsbiTZGVvpN3iqEN-K1tjk3Fo/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly93d3cu/cmViZWxzcG9ydC5j/b20uYXUvZHcvaW1h/Z2UvdjIvQkJSVl9Q/UkQvb24vZGVtYW5k/d2FyZS5zdGF0aWMv/LS9TaXRlcy1zcmct/aW50ZXJuYWwtbWFz/dGVyLWNhdGFsb2cv/ZGVmYXVsdC9kd2Zk/NDc4YWNmL2ltYWdl/cy82MTQxNTkwMS9S/ZWJlbF82MTQxNTkw/MV9ncmVlbmdyZXlf/aGktcmVzLmpwZz9z/dz0xMDAwJnNoPTEw/MDAmc209Zml0' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis HOVR Revenaut</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 499,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgs.search.brave.com/LYOP5bKcH9k4y0X3fPxW7Z4CMVCouonsHqu4_sINuLk/rs:fit:650:650:1/g:ce/aHR0cHM6Ly93d3cu/emFwYXRvcy5lcy9t/ZWRpYS9jYXRhbG9n/L3Byb2R1Y3QvY2Fj/aGUvaW1hZ2UvNjUw/eDY1MC8wLzAvMDAw/MDIwMTA5NzkzOV8w/Ml9rYi5qcGc' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis HOVR Lace Up Mid PRM</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 899,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgs.search.brave.com/qElX0Uy9cDWyt-y1mvd16bwH22CJKk4ZY3WRhwrUpXk/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9jZG4u/c3BvcnRzc2hvZXMu/Y29tL3Byb2R1Y3Qv/VS9VTkQ3Njg2L1VO/RDc2ODZfMTAwMF8z/LmpwZw' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis HOVR RISE 3</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 369,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgs.search.brave.com/qJpxmkfuW6MJXrfpPQ-wlF371R3-zzmgfImxWoj4Pk8/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9iYXNr/ZXR3b3JsZC5jb20v/MTYxNTgtbGFyZ2Vf/ZGVmYXVsdC9zcGF3/bi0zLWJsdWUuanBn' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Spawn 3</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 329,99</Text>
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

export default TelaUnderArmour;

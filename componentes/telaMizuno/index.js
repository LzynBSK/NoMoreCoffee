import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const TelaMizuno = () => {
  return (
    <ScrollView>
      <View style={styles.cardsContainer}>
      <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgs.search.brave.com/p7bbImy9_iqU3tF3Lth_sDxXpBvjIGnHvad8m4OGmXU/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9jZG4u/YXdzbGkuY29tLmJy/LzEwMDB4MTAwMC8x/MzI4LzEzMjgxNjEv/cHJvZHV0by8xMDg2/NDc2ODg2MDFjOGZl/ZjQ3LmpwZw' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Wave Prophecy 12</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 1.799,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgs.search.brave.com/nbB1rKeU2PvFc47NLACjIsZfbBDcWBEf882YlNJpZzY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MjQvMjQ3MC80MTk5/L3Byb2R1Y3RzL2Qx/Z2QxODMwNTIuanBn/P3Y9MTYxNTQxNDI5/MA' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Sky Medal Noh:Men</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 899,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgs.search.brave.com/cx1FhixENhfwIwEaUZB8bYC38T7Sn1P2ubWFOnBtYyQ/rs:fit:900:900:1/g:ce/aHR0cHM6Ly9raW5h/c2gucnUvcGljdHVy/ZXMvcHJvZHVjdC9i/aWcvMTcxOTIzX2Jp/Zy5qcGc' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Momentum 2 MID</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 999,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgs.search.brave.com/1oN24ti0oZcqza16XkGHL1m_o0Iqnzl30yJo9yMboBw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bWF4aXNwb3J0LmNv/bS9tZWRpYS9jYXRh/bG9nL3Byb2R1Y3Qv/bS9pL21penVuby1q/MWdjMjAzNC13YXZl/X3NreV9uZW8tc2Nh/cnBlLXJ1bm5pbmct/dW9tby0wNDEzOTQ5/MDFfMDRfMS5qcGc' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Wave Sky 6</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 1.099,99</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground source={{ uri: 'https://imgs.search.brave.com/6hsQzapb09kKTow__GAaH6b_hq1wNEduncVP-Fkfctk/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly93d3cu/Z29hbGlubi5jb20v/Zi8xMzcwMi8xMzcw/MjMwNjhfMy9taXp1/bm8tdGh1bmRlci1i/bGFkZS5qcGc' }} style={styles.imageContainer}>
            <Text style={styles.title}>Tênis Thunder Blade 3</Text>
          </ImageBackground>
          <Text style={styles.price}>R$ 649,99</Text>
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

export default TelaMizuno;

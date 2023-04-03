import { NavigationContainer } from '@react-navigation/native';
import Home from './componentes/telaHome/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import TelaNike from './componentes/telaNike/index';
import TelaAdidas from './componentes/telaAdidas/index';
import TelaAntUnderArmour from './componentes/telaUnderArmour/index';
import TelaMizuno from './componentes/telaMizuno/index';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
      <ImageBackground source={require('./assets/18017848.jpg')} style={styles.drawerHeaderImage}>
        <Text style={styles.drawerHeaderText}>Sumam, hora do cafezin 😋</Text>
      </ImageBackground>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Nike" component={TelaNike}/>
        <Drawer.Screen name="Adidas" component={TelaAdidas}/>
        <Drawer.Screen name="UnderArmour" component={TelaAntUnderArmour}/>
        <Drawer.Screen name="Mizuno" component={TelaMizuno}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#CBEBFE',
  },
  drawerHeaderImage:{
    width: '100%', 
    height: '100%', 
    alignContent: 'center',
    alignItems: "center",
    justifyContent: "center"
  },
  drawerHeader: {
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8BAEFF',
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
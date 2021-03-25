import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ActionSheet from './components/ActionSheet';
import Plant from './components/Plant';
// import TodayContainer from './components/TodayContainer';
import { FlatGrid } from 'react-native-super-grid';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("screen");

export default function App() {

  const [plants, setPlants] = useState([
    {
      name: "Devin",
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0151%2F1650%2F1046%2Fproducts%2FZamioculcas_zamiifolia_Zanzibar_Gem_14cm_Growers_Pot_2400x.jpg%3Fv%3D1563584100&f=1&nofb=1',
      species: "fitonia białożyłkowa",
      lastWatered: "03.02.2021",
    },
    {
      name: "Lukas",
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegardeningcook.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fdieffenbachia-plant.jpg&f=1&nofb=1',
      species: "zamiokulkas zamiolistny",
      lastWatered: "03.02.2021",
    },
    {
      name: "Dominica",
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0151%2F1650%2F1046%2Fproducts%2FZamioculcas_zamiifolia_Zanzibar_Gem_14cm_Growers_Pot_2400x.jpg%3Fv%3D1563584100&f=1&nofb=1',
      species: "Sansewieria",
      lastWatered: "21.03.2021"
    },
    {
      name: "Jackson",
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegardeningcook.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fdieffenbachia-plant.jpg&f=1&nofb=1',
      species: "Dracena",
      lastWatered: "03.02.2021"
    },
    {
      name: "James James",
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegardeningcook.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fdieffenbachia-plant.jpg&f=1&nofb=1',
      species: "Sansewieria",
      lastWatered: "03.02.2021"
    },
    {
      name: "Joel",
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegardeningcook.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fdieffenbachia-plant.jpg&f=1&nofb=1',
      species: "fitonia białożyłkowa",
      lastWatered: "20.03.2021",
    },
    {
      name: "John",
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.V6UksmFVpLGQLf3NimOWIQHaJ4%26pid%3DApi&f=1',
      species: "Dracena",
      lastWatered: "21.03.2021"
    },
    {
      name: "Wężowniczka",
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.V6UksmFVpLGQLf3NimOWIQHaJ4%26pid%3DApi&f=1',
      species: "Sansewieria",
      lastWatered: "21.03.2021",
    },
    {
      name: "Lukas Jr",
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegardeningcook.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fdieffenbachia-plant.jpg&f=1&nofb=1',
      species: "zamiokulkas zamiolistny",
      lastWatered: "03.02.2021",
    },
    {
      name: "Julie",
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0151%2F1650%2F1046%2Fproducts%2FZamioculcas_zamiifolia_Zanzibar_Gem_14cm_Growers_Pot_2400x.jpg%3Fv%3D1563584100&f=1&nofb=1',
      species: "fitonia białożyłkowa",
      lastWatered: "21.03.2021",
    },
  ]);

  return (
    <View style={{ width, height }}>
      <View style={styles.container}>
        <ScrollView style={styles.innerContainer}>
          <Text style={styles.heading}>water today</Text>
          <FlatGrid
            style={styles.todayList}
            itemDimension={100}
            data={plants.filter((item) => {
              if (item.lastWatered === '21.03.2021') return true;
            })}
            renderItem={({ item }) => (<Plant name={item.name} image={item.img} />)}
          />
        </ScrollView>

        <StatusBar style="light" />
      </View>
      <ActionSheet plants={plants} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#11493e",
    flex: 1,
  },
  innerContainer: {
    position: 'absolute',
    top: 40,
    height: height - 150,
    marginBottom: 100,
  },
  heading: {
    top: 30,
    left: 15,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fed0cc',
  },
  todayList: {
    top: 40,
    marginBottom: 150,
  }
});

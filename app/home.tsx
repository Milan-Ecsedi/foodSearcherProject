import { Text, TextInput, View, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import CategorySlider from "./components/flatSlidecategories";
import SwipperAdds from "./components/swipperadds";
import HomeFetchedFoods from "./components/homeFetchedFoods";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchbar}>
        <Ionicons name="search" size={18} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search foods, drinks nearby..."
          placeholderTextColor="#999"
        />
      </View>

    <View style={{flexDirection:'row', paddingBottom:6}}>

      <TouchableOpacity style={{flexDirection:'row', borderWidth:1, borderRadius:10, borderColor:'#b8b8b8ff', paddingRight:3, marginRight: 3}}>
        <EvilIcons name="heart" size={20} color="black" />
        <Text>
          Favorites
        </Text>

      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row', borderWidth:1, borderRadius:10, borderColor:'#b8b8b8ff', paddingRight:3, marginRight: 3}}>
      <MaterialIcons name="history" size={20} color="black" />
        <Text>History</Text>
      </TouchableOpacity>
    
    </View>

      <SwipperAdds/>
      <CategorySlider/>
      <HomeFetchedFoods/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flex: 1,
    backgroundColor: "#f1efefff",
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eae5e5ff",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 10,
  },

  icon: {
    marginRight: 6,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#333333ff",
  }
});


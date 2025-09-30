import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ListRenderItem } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


type Food = {
    id: string;
    restaurantName: string;
    restaurantImage: any;
    foodName: string;
    price: number;
    rating: number;
    distance: number;
}

const foods: Food[]=[
    {id:'1', restaurantName: 'Mikael’s étterem', restaurantImage: 'https://venhajo-etterem.hu/wp-content/uploads/2024/06/rendezvenyhelyszin.jpg', foodName: 'Oliva olajos sült csirke', price: 1599, rating: 3.1, distance: 130},
    {id:'2', restaurantName: 'Buda Castle restaurant', restaurantImage: 'https://funzine.hu/wp-content/uploads/2025/03/KEPCSERE-1-1200x900.jpg.webp', foodName: 'Limos Garnélarák', price: 1799, rating: 4.2, distance: 112},
    {id:'3', restaurantName: 'Arany Áron Bistro', restaurantImage: 'https://www.welovebudapest.com/i/8b/fausto-s-korosi-tamas-20160625-1543.jpg', foodName: 'Cigány pecsenye', price: 1399, rating: 3.8, distance: 103},
    {id:'4', restaurantName: 'Maci falodája', restaurantImage: 'https://www.welovebudapest.com/i/3b/lb-20230203-flava-0081.jpg', foodName: 'mustáros beaf steak ', price: 2599, rating: 3.5, distance: 190},
    {id:'5', restaurantName: 'Magyar Vendéglő', restaurantImage: 'https://kep.cdn.indexvas.hu/1/0/5854/58549/585495/58549585_a943174b1eaa6e605fe1936c19915f1a_wm.jpg', foodName: 'Csokoládés gofri', price: 1499, rating: 3.2, distance: 158}
];


const HomeFetchedFoods: React.FC=()=>{
    const renderItem: ListRenderItem<Food>=({item})=> (
        <TouchableOpacity style={styles.item}>
            <Image source= {{uri: item.restaurantImage }} style={styles.image}/>
            <Text style={styles.restaurantname}>{item.restaurantName}</Text>
            <Text style={styles.foodname}>{item.foodName}</Text>
            <Text style={{fontWeight:'bold'}}>{item.price} Ft</Text>
            <Text>rating: {item.rating}</Text>
            <Text style={{color: item.distance <= 130 ? '#3d8d46ff' : '#aa8043ff'}}>{item.distance}m away</Text>
        </TouchableOpacity>
    )


    return(
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection:'row'}}>
            <Text style={{fontSize: 16, fontWeight:'bold', marginBottom:10}}>Foods near you</Text>
            <SimpleLineIcons name="arrow-right" size={20} color="black" />
            </TouchableOpacity>
            <FlatList
            data={foods}
            keyExtractor={(item)=> item.id}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            />

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    paddingVertical: 10,
    paddingBottom: 40,
  },
  item: {
    alignItems: 'baseline',
    marginHorizontal: 10,
    marginBottom: 80,
    backgroundColor: '#edededff'
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  foodname: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  restaurantname:{
    fontSize:12,
    color: '#a7a7a7ff'
  }
})

export default HomeFetchedFoods;
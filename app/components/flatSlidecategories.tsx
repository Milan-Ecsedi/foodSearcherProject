import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ListRenderItem } from 'react-native';

type Category = {
  id: string;
  title: string;
  image: any;
};

const categories: Category[] = [
  { id: '1', title: 'Desserts', image: require('../../assets/category_desserts.jpg') },
  { id: '2', title: 'Breakfast', image: require('../../assets/category_breakfast.jpg') },
  { id: '3', title: 'Drinks', image: require('../../assets/category_drinks.jpg') },
  { id: '4', title: 'Vegetarian', image: require('../../assets/category_vegetarian.jpg') },
];

const CategorySlider: React.FC = () => {
  const renderItem: ListRenderItem<Category> = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source= {item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  item: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35, // round image
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});

export default CategorySlider;
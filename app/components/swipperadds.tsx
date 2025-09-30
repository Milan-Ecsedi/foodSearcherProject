import { Text, TextInput, View, StyleSheet, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";



export default function SwipperAdds(){
    return(
<View style={styles.swiperContainer}>
        <Swiper
          autoplay
          autoplayTimeout={3}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          loop
        >
          
            <ImageBackground source={require("../../assets/cards_pears.png")} style={styles.cardBackground} imageStyle={styles.cardImage}>
             <Text style={styles.cardText}>The foods you looking for...</Text>
            </ImageBackground>
       
        
          
          <ImageBackground source={require("../../assets/cards_drink.jpg")} style={styles.cardBackground} imageStyle={styles.cardImage}>
             <Text style={styles.cardText}>Fresh drinks for you...</Text>
            </ImageBackground>
          
       
          <ImageBackground source={require("../../assets/cards_meal.jpg")} style={styles.cardBackground} imageStyle={styles.cardImage}>
             <Text style={styles.cardText}>Or find your main meal...</Text>
            </ImageBackground>
        </Swiper>
      </View>
    )
}

const styles= StyleSheet.create({
    swiperContainer: {
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
  },

  cardBackground: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 16,
  },

  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffffff",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginRight: 10,
    textAlign: 'center',
  },
  cardImage: {
    borderRadius: 12,
  },
  dot: {
    backgroundColor: "#ccc",
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#333",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  }
})
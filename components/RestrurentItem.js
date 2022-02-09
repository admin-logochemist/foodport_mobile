import React,{useState,useEffect} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import data  from "../data.json"; 
export default function RestaurantItems({itemData,onPress}) {
 
  return(
      
         
        <TouchableOpacity
         
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={onPress}
        >
            {data.restrurent.map(post => {
                return(

           
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
       <Image
      source={require('../components/assets/images/foodcart.png')}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
            <RestaurantInfo name={post.name} />
          </View>
               )
            })}
        </TouchableOpacity>
         
  )
    
  
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
      
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
 
    </View>
  </View>
);



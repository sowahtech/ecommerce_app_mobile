import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import SearchBox from './SearchBox'
import Jacket1 from './Jacket1';
import image1 from './assets/jacket-13.png'
import image2 from './assets/jacket-12.png'
import image3 from './assets/jacket-14.png'
import image4 from './assets/jacket-11.png'
import { FlatList } from 'react-native';

export default function JacketList() {
    const data = [
        {image: image1, description: 'Bike Jacket Soft Shell Warm', defRating : 4, price: "$99"},
        {image: image2, description: 'Blue Hoody Merino', defRating : 3, price: "$80"},
        {image: image3, description: 'Hooded Jacket Classic', defRating : 5, price: "$140"},
        {image: image4, description: 'Red Woman Jacket', defRating : 4, price: "$115"}
        
    ]
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.topIcons}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </View>
                <View style={styles.topIcons}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </View>
            </View>
            <View style={styles.lowerSection}>
                <Text style={styles.itemSold}>Woman Jacket</Text>
                <SearchBox />
                <FlatList 
                data ={data}
                renderItem ={({item})=>{
                    return <Jacket1 image={item.image} desc = {item.description} rating={item.defRating} price={item.price}
                keyExtractor = {(item)=>item.price}
                />
                }}/>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    topSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 30
    },

    topIcons: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },

    lowerSection: {
        marginHorizontal: 25
    },

    itemSold: {
        fontWeight: "bold",
        fontSize: 20
    },
     input: {
         height: 50,
         backgroundColor: "white",
         borderRadius: 10,
         marginVertical: 10,
         paddingLeft: 15,
     },

     search: {
         color: "#B3B2B4",
     },
     filter: {
        color: "blue",
        
     },

   


})
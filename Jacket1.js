import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { AirbnbRating } from 'react-native-ratings';



export default function Jacket1({ image, desc, rating, price }) {
    return (
        <View style={styles.motherJacketContainer}>
            <View>
                <View style={styles.jacketContainer}>
                </View>
                <Image
                    source={image}
                    style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.jacketDescription}>{desc}</Text>
                <AirbnbRating
                    count={5}
                    reviews={[]}
                    defaultRating={rating}
                    size={16}
                    starContainerStyle={styles.rating}
                />
                <Text style={styles.jacketPrice}>{price}</Text>



            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    jacketContainer: {
        backgroundColor: 'white',
        width: 100,
        height: 90,
        borderRadius: 30,
        marginVertical: 20,
        opacity: 0.5,
        transform: [
            { rotateX: "2deg" },
            { rotateZ: "2deg" }
        ]
    },
    image: {
        position: "absolute",
        marginTop: 10,
        height: 100,
        width: 80,
        marginHorizontal: 8

    },

    motherJacketContainer: {
        flexDirection: "row"
    },

    infoContainer: {
        marginTop: 30,
        marginLeft: -40

    },

    jacketDescription: {
        fontWeight: "bold",
        marginBottom: -50,
        paddingLeft: 52
    },

    jacketPrice: {
        fontWeight: "bold",
        color: "#9D6EF6",
        paddingLeft: 52,
        marginTop: 10,
        fontSize: 20
    },

    rating: {
        alignSelf: "flex-start",
        paddingLeft: 48
    }



})

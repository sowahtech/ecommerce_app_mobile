import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AirbnbRating } from 'react-native-ratings';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';



export default function Jacket1() {
    return (
        <View style={styles.motherJacketContainer}>
            <View>
                <View style={styles.topSection}>
                    <View style={styles.topIcons1}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </View>
                    <View style={styles.topIcons2}>
                        <AntDesign name="shoppingcart" size={24} color="black" />
                    </View>
                </View>
                <View style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 270,
                    marginBottom: -50,
                    marginTop: 10
                }}>
                    <EvilIcons name="heart" size={24} color="black" />
                </View>
                <View style={styles.jacketContainer}>

                </View>

                <Image
                    source={require('./assets/jacket-11.png')}
                    style={styles.image} />
                <View style={{marginHorizontal: 20}}>
                    <Text style={styles.jacketDescription}>Red Woman Jacket</Text>
                    <View style={styles.reviewRating}>
                        <Text style={styles.review}>Review</Text>
                        <Text>:</Text>
                        <AirbnbRating
                            count={5}
                            reviews={[]}
                            defaultRating={4}
                            size={8}
                            starContainerStyle={styles.rating}
                        />
                    </View>
                    <View style={styles.line}>

                    </View>
                    <Text>It is a long established fact that a reader will be distracted by the readable content of a page </Text>
                    
                </View>

                <View style={{
                    backgroundColor: 'white', height: 40, justifyContent: "center",
                    marginVertical: 30, marginHorizontal: -20, opacity: 0.6
                }}>
                    <Text style={{ color: "#9D6EF6", paddingLeft: 20 }}>Material : 91% polyester, 9% elastane</Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                    <TouchableOpacity style={{
                        height: 40,
                        width: 40,
                        borderRadius: 10,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 10
                    }}><Text>XS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 40,
                        width: 40,
                        borderRadius: 10,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 10
                    }}><Text>S</Text></TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 40,
                        width: 40,
                        borderRadius: 10,
                        backgroundColor: "#9D6EF6",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 10
                    }}><Text>M</Text></TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 40,
                        width: 40,
                        borderRadius: 10,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 10
                    }}><Text>L</Text></TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 40,
                        width: 40,
                        borderRadius: 10,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 10
                    }}><Text>XL</Text></TouchableOpacity>
                </View>
                <View style={{
                    width: 275,
                    height: 55,
                    borderRadius: 10,
                    backgroundColor: "#9D6EF6",
                    marginVertical: 20,
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    marginHorizontal: 20

                }}>
                    <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{ color: "white" }}>Total Amount</Text>
                        <Text style={{ color: "white" }}>$110</Text>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TouchableOpacity style={{
                            height: 40,
                            width: 100,
                            backgroundColor: "#5E21D0",
                            justifyContent: "center",
                            alignItems: 'center',
                            marginHorizontal: 10,
                            borderRadius: 5
                        }}>
                            <Text style={{ color: "white" }}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    topSection: {
        flexDirection: "row",
        justifyContent: "space-between",

    },

    topIcons1: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"

    },

    topIcons2: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 205
    },

    jacketContainer: {
        margin: 20,
        backgroundColor: 'white',
        width: 275,
        height: 260,
        borderRadius: 20,
        opacity: 0.5,
        transform: [
            { rotateX: "2deg" },
            { rotateZ: "1deg" }
        ]
    },
    image: {
        position: "absolute",
        marginTop: 20,
        height: 300,
        width: 200,
        marginHorizontal: 53

    },

    motherJacketContainer: {
        marginHorizontal: 20,
        marginTop: 40
    },

    reviewRating: {
        flexDirection: "row"
    },

    review: {
        marginRight: 2
    },

    infoContainer: {
        marginTop: 30,
        marginLeft: -48

    },

    jacketDescription: {
        fontWeight: "bold",
        fontSize: 25
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
        marginTop: -52
    },

    line: {
        height: 5,
        width: 45,
        backgroundColor: "#9D6EF6",
        borderRadius: 3,
        marginVertical: 24
    }



})

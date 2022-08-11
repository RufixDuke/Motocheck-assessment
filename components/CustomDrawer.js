import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                paddingHorizontal: 20,
            }}
        >
            <DrawerContentScrollView {...props}>
                <View>
                    <Image
                        source={require("../assets/icons/motocheck.png")}
                        style={{
                            height: 32,
                            width: 147,
                            marginBottom: 10,
                            resizeMode: "contain",
                            marginLeft: 10,
                        }}
                    />
                    <Text></Text>
                </View>
                <Pressable
                    style={{ flexDirection: "row", marginLeft: 18 }}
                    onPress={() => props.navigation.navigate("Homescreen")}
                >
                    <Image
                        source={require("../assets/icons/pie.png")}
                        style={{ resizeMode: "contain", width: 20, height: 20 }}
                    />
                    <Text
                        style={{
                            color: "black",
                            fontSize: 16,
                            marginBottom: 5,
                            marginLeft: 30,
                            fontWeight: "600",
                        }}
                    >
                        Overview
                    </Text>
                </Pressable>
                <Text
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#E6EBEC",
                        marginHorizontal: 12,
                    }}
                ></Text>

                <DrawerItemList {...props} />

                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 17,
                        paddingTop: 13,
                    }}
                >
                    <Image source={require("../assets/icons/exit.png")} />
                    <Text
                        style={{
                            marginLeft: 32,
                            color: "#999999",
                            fontSize: 15,
                        }}
                    >
                        Log out
                    </Text>
                </Pressable>
            </DrawerContentScrollView>
            <View
                style={{
                    padding: 20,
                }}
            >
                <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#FFFFFF",
                            paddingVertical: 16,
                            borderRadius: 6,
                        }}
                    >
                        <Image
                            source={require("../assets/icons/User-logo.png")}
                            style={{
                                width: 56,
                                height: 56,
                                marginRight: 7,
                            }}
                        />
                        <View style={{ alignItems: "center" }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 5,
                                    fontWeight: "600",
                                }}
                            >
                                Faith Auto's
                            </Text>
                            <Text style={{ color: "#999999", fontSize: 13 }}>
                                Auto Center
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;

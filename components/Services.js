import { View, Text, Image } from "react-native";
import React from "react";

const Services = ({ image, title, description }) => {
    return (
        <View
            style={{
                paddingHorizontal: 20,
                paddingVertical: 20,
                backgroundColor: "#FFFFFF",
                borderRadius: 4,
                marginVertical: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    borderWidth: 1,
                    borderColor: "#53BED2",
                    borderRadius: 4,
                    padding: 6,
                }}
            >
                <Image source={image} />
            </View>

            <View>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "600",
                        marginBottom: 10,
                    }}
                >
                    {title}
                </Text>
                <Text style={{ color: "#555555", fontSize: 14 }}>
                    {description}
                </Text>
            </View>

            <Image source={require("../assets/icons/arrow-right.png")} />
        </View>
    );
};

export default Services;

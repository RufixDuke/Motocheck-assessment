import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({
    name,
    model,
    status,
    colorOfStatus,
    backgroundStatus,
    key,
}) => {
    return (
        <View
            style={{
                backgroundColor: "#FFFFFF",
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderRadius: 4,
                marginVertical: 10,
            }}
            key={key}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <Text style={{ fontWeight: "500", fontSize: 15 }}>
                        {name}
                    </Text>
                    <Text style={{ color: "#999999" }}>{model}</Text>
                </View>
                <View>
                    <Text
                        style={{
                            color: colorOfStatus,
                            backgroundColor: backgroundStatus,
                            padding: 6,
                            borderRadius: 4,
                        }}
                    >
                        {status}
                    </Text>
                </View>
            </View>
            <Text
                style={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: "#EEEEEE",
                }}
            ></Text>

            <View
                style={{
                    paddingTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Image source={require("../assets/icons/clock.png")} />
                <Text style={{ marginLeft: 10 }}>14 July, 4:00pm - 7:00pm</Text>
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({});

import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import Card from "../components/Card";

const Homescreen = () => {
    return (
        <View
            style={{
                backgroundColor: "#EEECF8",
                marginTop: 35,
                paddingHorizontal: 20,
                paddingBottom: 20,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 20,
                }}
            >
                <TouchableOpacity>
                    <Image
                        source={require("../assets/icons/menu.png")}
                        style={{ width: 20, height: 20, resizeMode: "contain" }}
                    />
                </TouchableOpacity>

                <Image
                    source={require("../assets/icons/user.png")}
                    style={{ width: 20, height: 20, resizeMode: "contain" }}
                />
            </View>

            <View>
                <Text>Welcome Back, Imani👋🏾</Text>
                <Text>It is a long established fact lorem. </Text>
            </View>

            <View style={styles.inputFIeld}>
                <Image source={require("../assets/icons/Search.png")} />
                <TextInput
                    placeholder="Search lorem ipsum"
                    style={styles.input}
                />
            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: 10,
                    paddingTop: 40,
                }}
            >
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    Recent Checklist
                </Text>
                <Text style={{ color: "#53BED2" }}>View all</Text>
            </View>

            <Card
                name="Mr. Joseph Agunbiade"
                model="Benz 2014 EClass"
                status="Pending"
                colorOfStatus="#DC2C10"
                backgroundStatus="rgba(220, 44, 16, 0.06)"
            />

            <Card
                name="Mr. Joseph Agunbiade"
                model="Benz 2014 EClass"
                status="Ready"
                colorOfStatus="#33CC66"
                backgroundStatus="rgba(51, 204, 102, 0.1)"
            />

            <View>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                    Services
                </Text>

                <View
                    style={{
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 4,
                        marginTop: 10,
                    }}
                >
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#53BED2",
                            borderRadius: 4,
                        }}
                    >
                        <Image
                            source={require("../assets/icons/inspection.png")}
                        />
                    </View>

                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "400" }}>
                            Inspection
                        </Text>
                        <Text style={{ color: "#555555", fontSize: 14 }}>
                            Contrary to popular belief, Lorem Ipsum dior
                        </Text>
                    </View>

                    <Image
                        source={require("../assets/icons/arrow-right.png")}
                    />
                </View>
            </View>
        </View>
    );
};

export default Homescreen;

const styles = StyleSheet.create({
    inputFIeld: { flexDirection: "row", alignItems: "center" },
    input: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        paddingVertical: 8,
        fontSize: 13,
        paddingHorizontal: 10,
    },
});

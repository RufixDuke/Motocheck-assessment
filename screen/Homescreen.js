import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import Card from "../components/Card";
import Services from "../components/Services";

const Homescreen = () => {
    return (
        <ScrollView
            style={{
                backgroundColor: "#EEECF8",
                marginTop: 35,
                paddingHorizontal: 20,
                paddingBottom: 40,
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

                <TouchableOpacity
                    style={{
                        backgroundColor: "#FFFFFF",
                        padding: 10,
                        borderRadius: 4,
                    }}
                >
                    <Image
                        source={require("../assets/icons/user.png")}
                        style={{ width: 20, height: 20, resizeMode: "contain" }}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ marginVertical: 25 }}>
                <Text style={{ fontWeight: "600", fontSize: 24 }}>
                    Welcome Back, Imani👋🏾
                </Text>
                <Text
                    style={{
                        color: "#868697",
                        fontWeight: "300",
                        fontSize: 14,
                    }}
                >
                    It is a long established fact lorem.{" "}
                </Text>
            </View>

            <View style={styles.inputFIeld}>
                <Image
                    source={require("../assets/icons/Search.png")}
                    style={{ padding: 5, marginHorizontal: 10 }}
                />
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
                    marginTop: 20,
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

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                    Services
                </Text>

                <Services
                    image={require("../assets/icons/inspection.png")}
                    title="Inspection"
                    description="Contrary to popular belief, Lorem Ipsum dior"
                />

                <Services
                    image={require("../assets/icons/maintenance.png")}
                    title="Maintenance"
                    description="Contrary to popular belief, Lorem Ipsum dior"
                />
            </View>
        </ScrollView>
    );
};

export default Homescreen;

const styles = StyleSheet.create({
    inputFIeld: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: "#fff",
        fontSize: 13,
    },
});

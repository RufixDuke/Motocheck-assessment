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
import { useNavigation } from "@react-navigation/native";
import { CardData, ServiceData } from "../components/Data";

const Homescreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image
                        source={require("../assets/icons/menu.png")}
                        style={{ width: 20, height: 20, resizeMode: "contain" }}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.headerImage}>
                    <Image
                        source={require("../assets/icons/user.png")}
                        style={{ width: 15, height: 15, resizeMode: "contain" }}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ marginVertical: 25 }}>
                <Text style={{ fontWeight: "600", fontSize: 24 }}>
                    Welcome Back, Imani👋🏾
                </Text>
                <Text style={styles.text}>
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

            <View style={styles.recentContainer}>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    Recent Checklist
                </Text>
                <Text style={{ color: "#53BED2" }}>View all</Text>
            </View>

            {CardData.map((data) => (
                <Card
                    key={data.id}
                    name={data.name}
                    model={data.model}
                    status={data.status}
                    colorOfStatus={data.colorOfStatus}
                    backgroundStatus={data.backgroundStatus}
                />
            ))}

            <View style={{ marginTop: 20, paddingBottom: 30 }}>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                    Services
                </Text>

                {ServiceData.map((data) => (
                    <Services
                        key={data.id}
                        image={data.image}
                        title={data.title}
                        description={data.description}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default Homescreen;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#EEECF8",
        marginTop: 35,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
    },
    headerImage: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 4,
    },
    text: {
        color: "#868697",
        fontWeight: "300",
        fontSize: 14,
    },
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
    recentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
        marginTop: 20,
    },
});

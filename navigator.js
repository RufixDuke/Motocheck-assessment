import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomDrawer from "./components/CustomDrawer";
import Homescreen from "./screen/Homescreen";
import History from "./screen/History";
import Inspection from "./screen/Inspection";
import Maintenance from "./screen/Maintenance";
import Notification from "./screen/Notification";
import Overview from "./screen/Overview";
import PaymentWallet from "./screen/PaymentWallet";
import { Image, Text } from "react-native";

const Drawer = createDrawerNavigator();
const Stack = createDrawerNavigator();

const screenOptions = {
    headerShown: false,
    drawerActiveBackgroundColor: "#FFFFFF",
    drawerActiveTintColor: "#2A2A2A",
    drawerInactiveTintColor: "#2A2A2A",
    drawerStyle: { width: 315 },
};

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawer {...props} />}
                initialRouteName="Homescreen"
                screenOptions={screenOptions}
                hideStatusBar={true}
            >
                <Drawer.Screen
                    name="Inspection"
                    component={Homescreen}
                    options={{
                        drawerIcon: ({ focused }) => (
                            <Image
                                source={require("./assets/icons/inspection2.png")}
                                style={{
                                    width: focused ? 20 : 18,
                                    height: focused ? 20 : 18,
                                    resizeMode: "contain",
                                }}
                            />
                        ),
                        headerShown: false,
                    }}
                />

                <Drawer.Screen
                    name="Notifications"
                    component={Homescreen}
                    options={{
                        drawerIcon: ({ focused }) => (
                            <Image
                                source={require("./assets/icons/notification.png")}
                                style={{
                                    width: focused ? 20 : 18,
                                    height: focused ? 20 : 18,
                                    resizeMode: "contain",
                                }}
                            />
                        ),
                        headerShown: false,
                    }}
                />
                <Drawer.Screen
                    name="Maintenance"
                    component={Homescreen}
                    options={{
                        drawerIcon: ({ focused }) => (
                            <Image
                                source={require("./assets/icons/maintain.png")}
                                style={{
                                    width: focused ? 20 : 18,
                                    height: focused ? 20 : 18,
                                    resizeMode: "contain",
                                }}
                            />
                        ),
                        headerShown: false,
                    }}
                />
                <Drawer.Screen
                    name="PaymentWallet"
                    component={Homescreen}
                    options={{
                        drawerIcon: ({ focused }) => (
                            <Image
                                source={require("./assets/icons/credit.png")}
                                style={{
                                    width: focused ? 20 : 18,
                                    height: focused ? 20 : 18,
                                    resizeMode: "contain",
                                }}
                            />
                        ),
                        headerShown: false,
                    }}
                />
                <Drawer.Screen
                    name="History"
                    component={Homescreen}
                    options={{
                        drawerIcon: ({ focused }) => (
                            <Image
                                source={require("./assets/icons/bar.png")}
                                style={{
                                    width: focused ? 20 : 18,
                                    height: focused ? 20 : 18,
                                    resizeMode: "contain",
                                }}
                            />
                        ),
                        headerShown: false,
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MyDrawer;

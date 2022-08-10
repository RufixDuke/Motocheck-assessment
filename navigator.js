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

const Drawer = createDrawerNavigator();
const Stack = createDrawerNavigator();

const screenOptions = {
    headerShown: true,
    drawerActiveBackgroundColor: "#FFFFFF",
    drawerActiveTintColor: "#2A2A2A",
    drawerInactiveTintColor: "#2A2A2A",
};

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            initialRouteName="Homescreen"
            screenOptions={screenOptions}
            hideStatusBar={true}
        >
            <Drawer.Screen name="Homescreen" component={Homescreen} />
            <Drawer.Screen name="History" component={History} />
            <Drawer.Screen name="Inspection" component={Inspection} />
            <Drawer.Screen name="Maintenance" component={Maintenance} />
            <Drawer.Screen name="Notification" component={Notification} />
            <Drawer.Screen name="Overview" component={Overview} />
            <Drawer.Screen name="PaymentWallet" component={PaymentWallet} />
        </Drawer.Navigator>
    );
}

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={screenOptions}
            >
                <Stack.Screen name="HomeScreen" component={MyDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;

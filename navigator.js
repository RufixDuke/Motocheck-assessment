import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "./components/Drawer/Custom";

const Drawer = createDrawerNavigator();

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
            initialRouteName="Home"
            screenOptions={screenOptions}
            hideStatusBar={true}
        >
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    );
}

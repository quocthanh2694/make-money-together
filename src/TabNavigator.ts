// import { createBottomTabNavigator } from 'react-navigation';
const reactNavigation = require('react-navigation');
const createAppContainer = reactNavigation.createAppContainer;
const createBottomTabNavigator = reactNavigation.createBottomTabNavigator;
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

// home stack
const HomeStack = createStackNavigator({
    Home: Home,
    Profile: Profile,
}, {
    initialRouteName: 'Home',
});

// tab navigator
const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: 'Home',
        },
    }
}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});

export default createAppContainer(TabNavigator);



// // drawer
// const DrawerNavigator = createDrawerNavigator(
//     {
//         Home: Home,
//         Profile: Profile,
//     },
//     {
//         //   hideStatusBar: true,
//         drawerBackgroundColor: 'rgba(255,255,255,.9)',
//         //   overlayColor: '#6b52ae',
//         contentOptions: {
//             activeTintColor: '#fff',
//             activeBackgroundColor: '#6b52ae',
//         },
//     }
// );

// export default createAppContainer(DrawerNavigator);
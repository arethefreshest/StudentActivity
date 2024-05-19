import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HjemIkon from "./assets/HjemIkon";
import LeggTilIkon from "./assets/LeggTilIkon";
import ProfilIkon from "./assets/ProfilIkon";
import Kalenderikon from "./assets/Kalenderikon";
import ActivityFilter from "./components/ActivityFilter";
import Activities from "./components/Activities";
import SearchVenn from "./components/SearchVenn";
import AddVenn from "./components/AddVenn";
import ProfilLoggInn from "./screens/ProfilLoggInn";
import Profil from "./screens/Profil";
import ProfilRegistrering from "./screens/ProfilRegistrering";
import Calendar from "./screens/Calendar";
import Add from "./screens/Add";
import Sosialtikon from "./assets/Sosialtikon";


const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

function AppNavigator({ isAuthenticated, loggedInUserId }) {
    function ProfilNavigator() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {isAuthenticated ? (
                    <Stack.Screen name="ProfilHome">
                        {(props) => <Profil {...props} loggedInUserId={loggedInUserId}/>}
                    </Stack.Screen>
                ) : (
                    <>
                        <Stack.Screen name="ProfilLoggInn" component={ProfilLoggInn} />
                        <Stack.Screen name="ProfilRegistering" component={ProfilRegistrering} />
                    </>)}
            </Stack.Navigator>
        );
    }

    function Home() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="ActivityFilter" component={ActivityFilter}/>
                <Stack.Screen name="Activities" component={Activities}/>
            </Stack.Navigator>
        );
    }

    function CalendarStack() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {isAuthenticated ? (
                    <Stack.Screen name="Calendar" component={Calendar}/>
                ) : (
                    <>
                        <Stack.Screen name="ProfilLoggInn" component={ProfilLoggInn} />
                        <Stack.Screen name="ProfilRegistering" component={ProfilRegistrering} />
                    </>)}
            </Stack.Navigator>
        );
    }


    function Social() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated ? (
                    <>
                        <Stack.Screen name="SearchVenn" component={SearchVenn} />
                        <Stack.Screen name="AddVenn" component={AddVenn} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="ProfilLoggInn" component={ProfilLoggInn} />
                        <Stack.Screen name="ProfilRegistering" component={ProfilRegistrering} />
                    </>
                )}
            </Stack.Navigator>
        );
    }

    function AddActivity() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {isAuthenticated ? (
                    <Stack.Screen name="AddAktivitet" component={Add}/>
                ) : (
                    <>
                        <Stack.Screen name="ProfilLoggInn" component={ProfilLoggInn} />
                        <Stack.Screen name="ProfilRegistering" component={ProfilRegistrering} />
                    </>)}
            </Stack.Navigator>
        );
    }

return (
            <MaterialBottomTabs.Navigator
                barStyle={{
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    borderColor: 'transparent',
                    position: 'absolute',
                    bottom: 0,
                    elevation: 0,
                    shadowOffset: {height: 0, width: 0},
                    shadowOpacity: 0,
                    height: 104,
                }}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused}) => {
                        let iconName;
                        let iconColor = focused ? "#FFECE7" : "#9DB3B3";
                        switch (route.name) {
                            case "Home":
                                iconName = <HjemIkon fill={iconColor}/>;
                                break;
                            case "Social":
                                iconName = <Sosialtikon fill={iconColor}/>;
                                break;
                            case "Add":
                                iconName = <LeggTilIkon fill={iconColor}/>;
                                break;
                            case "Profil":
                                iconName = <ProfilIkon fill={iconColor} stroke={iconColor} strokeWidth={focused ? 2.33333 : 0}/>;
                                break;
                            case "calendar":
                                iconName = <Kalenderikon fill={iconColor}/>;
                        }
                        return iconName;
                    },
                    tabBarLabelStyle: {color: '#9DB3B3'},
                    tabBarActiveTintColor: '#FFECE7',
                    tabBarInactiveTintColor: '#9DB3B3',
                    tabBarStyle: {
                        borderTopWidth: 0,
                        shadowColor: 'transparent',
                        elevation: 0,
                        backgroundColor: 'transparent'
                    },
                    headerStyle: {
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                        elevation: 0,
                    }
                })}
            >
                <MaterialBottomTabs.Screen
                    name="Home"
                    component={Home}
                    options={{tabBarLabel: 'Hjem'}}
                />
                <MaterialBottomTabs.Screen
                    name="Add"
                    component={AddActivity}
                    options={{tabBarLabel: 'Legg til'}}
                />
                <MaterialBottomTabs.Screen
                    name="Social"
                    component={Social}
                    options={{tabBarLabel: 'Sosialt'}}
                />
                <MaterialBottomTabs.Screen
                    name="Profil"
                    component={ProfilNavigator}
                    options={{
                        tabBarLabel: 'Profil',
                        unmountOnBlur: true
                    }}
                />
                <MaterialBottomTabs.Screen
                    name="calendar"
                    component={CalendarStack}
                    options={{tabBarLabel: 'Kalender'}}
                />
            </MaterialBottomTabs.Navigator>
        );
}
export default AppNavigator;

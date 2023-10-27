import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute, useNavigationContainerRef, useFocusEffect, useNavigation } from '@react-navigation/native';
import Introduction1 from '../../screens/Introduction1';
import Camera from '../../screens/Camera';
import Home from '../../screens/Home';
import Saved from '../../screens/Saved';
import Recipe from '../../screens/Recipe';
import RecipeInfo from '../../screens/RecipeInfo';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator() {
    const hiddenRoute = ["Introduction1", "Camera", "Recipe"]
    const [currentScreen, setCurrentScreen] = useState("Home")
    const nav = useNavigation();
    React.useEffect(() => {
        const findScreen = nav.addListener('state', (e) => {
            const route = nav.getCurrentRoute()
            setCurrentScreen(route.name)
        });

        return findScreen;
    }, [nav]);

    if (hiddenRoute.includes(currentScreen)) {
        return null;
    }


    return (
        <View style={{
            position: 'absolute',
            backgroundColor: 'white',
            right: 100,
            left: 100,
            bottom: 25,
            borderRadius: 40,
            height: 60,
            width: 200,
            paddingBottom: 0,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            zIndex: 1,
            flexDirection: 'row'
        }}>
            <TouchableOpacity onPress={() => nav.navigate('Camera')}>
                <FontAwesome5
                    name={'camera'}
                    size={35}
                    color={currentScreen === 'Camera' ? 'green' : 'gray'}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate('Home')}>
                <FontAwesome5
                    name={'home'}
                    size={35}
                    color={currentScreen === 'Home' ? 'green' : 'gray'}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate('Saved')}>
                <FontAwesome5
                    name="bookmark"
                    solid
                    size={35}
                    color={currentScreen === 'Saved' ? 'green' : 'gray'}
                />
            </TouchableOpacity>

        </View>
    )
}

export default function MainStack() {
    return (
        <>
            <BottomTabNavigator />
            <Stack.Navigator>
                <Stack.Screen name="Introduction1" component={Introduction1} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Saved" component={Saved} options={{ headerShown: false }} />
                <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
                <Stack.Screen name="Recipe" component={Recipe} options={{ headerShown: false }} />
                <Stack.Screen name="RecipeInfo" component={RecipeInfo} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

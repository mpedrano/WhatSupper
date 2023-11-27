import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Logo from '../../assets/logo/logo';
import { useTheme } from '../../ThemeContext'
import { colors } from '../../theme';
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; 
import { db, auth } from '../../firebase/firebase.config';

export default function Header({navigation}) {
    const { isDarkMode, toggleTheme } = useTheme();
    const [fn, setFN] = useState("");

    const getUser = async () => {
        const myself = auth;
        if(!myself.currentUser){
            alert('Not logged in')
            return;
        }

        const docRef = doc(db, "users", myself.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const user = docSnap.data();
            setFN(user.name);
        } else {
            console.log("No such document");
        }
    }

    useEffect(() => {
        getUser()
    }, []);

    const logoutUser = async () => {
        await signOut(auth);
        console.log("User Logged Out");
        navigation.goBack();
    }

    return (

        <View style={[styles.headerContainer, isDarkMode && styles.darkContainer]}>
            <View style={styles.textContainer}>
                <Text style={[styles.greetingText, isDarkMode && styles.darkGreetingText]}>👋 Hello, </Text>
                <Text style={[styles.boldText, isDarkMode && styles.darkBoldText]}>{fn}</Text>
            </View>
            <View style={styles.logoContainer}>
                <Pressable onPress={() => logoutUser()}>
                    <Logo style={styles.logo} />
                </Pressable>
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '8%',
        marginTop: '20%'
    },
    darkContainer: {
        color: colors.offWhite
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    logoContainer: {
        justifyContent: 'flex-end'
    },
    greetingText: {
        fontSize: 20,
        fontFamily: 'Manrope-Regular',
    },
    darkGreetingText: {
        color: colors.offWhite,
    },
    boldText: {
        fontSize: 20,
        fontFamily: 'Manrope-Bold',
    },
    darkBoldText: {
        color: colors.offWhite,
    },
});

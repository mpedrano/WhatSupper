import { StyleSheet, Text, View, Button, Image, TextInput, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { auth } from './firebase.config';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; 
import { colors } from '../theme';

export default function Login({navigation}) {
    const [em, setEmail] = useState("");
    const [ps, setPS] = useState("");

    const SignIn = async () => {
        const result = await signInWithEmailAndPassword(auth, em, ps);
        navigation.navigate('Home');
    }

    const GoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const authorization = auth;
        const result = await signInWithPopup(authorization, provider);
        
        console.log(result);
    }

    return (
        <View style={styles.container}>
            <View style={styles.required}>
                <Text style={styles.label}>Email*</Text>
                <Text style={styles.label}>* required fields</Text>
            </View>
            <TextInput style={styles.input} placeholder='Email address' onChangeText={(txt) => setEmail(txt)} />
            <Text style={styles.label}>Password*</Text>
            <TextInput style={styles.input} placeholder='Password' onChangeText={(txt) => setPS(txt)} />
            <Pressable style={styles.btn} onPress={() => SignIn()}>
                <Text style={styles.login}>Sign In</Text>
            </Pressable>
            <View style={styles.question}>
               <Text style={styles.account}>Don't have an account? </Text>
                <Pressable onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.register}>Sign up</Text>
                </Pressable>
            </View>
            <Text style={{textAlign: 'center'}}>OR</Text>
            <Pressable style={styles.google} onPress={() => GoogleLogin()}>
                <Text style={styles.continue}>Continue with Google</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
    },
    input: {
        width: 250,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10
    },
    required: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        fontFamily: 'Manrope-Regular',
        paddingVertical: 5,
        fontSize: 13
    },
    btn: {
        backgroundColor: colors.asparagus,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    login: {
        color: colors.offWhite,
        fontFamily: 'Manrope-Bold',
        paddingVertical: 7,
    },
    question: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 5
    },
    account: {
        fontFamily: 'Manrope-Regular',
        fontSize: 12
    },
    register: {
        fontFamily: 'Manrope-Regular',
        fontSize: 12,
        color: colors.asparagus
    },
    google: {
        borderWidth: 1,
        borderColor: colors.offBlack,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    continue: {
        fontFamily: 'Manrope-Regular',
        paddingVertical: 7,
    }
});

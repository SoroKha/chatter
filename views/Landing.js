import { useNavigation } from '@react-navigation/native';
import { signInWithPopup, signInWithRedirect } from 'firebase/auth';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { auth, googleProvider } from '../server/config/firebase';

export default function Landing() {
    const navigation = useNavigation();

    const signIn = async () => {
        try {
            const result = await signInWithRedirect(auth, googleProvider);
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.signUp}>
            <View style={styles.twitterIcon}>
                <IconButton size={30} iconColor='#1C96E8' icon="twitter" onPress={() => {navigation.navigate('Feed')}} />
            </View>
            
            <Text style={styles.welcomeText}>See what's</Text>
            <Text style={styles.welcomeText}>happening in the</Text>
            <Text style={styles.welcomeText}>world right now.</Text>

            <Button textColor='white' style={styles.signUpLayout} contentStyle={styles.signUpButton} onPress={() => {navigation.navigate('SignUp')}}>Create account</Button>
            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: 'white', height: 0.25, flex: 1, alignSelf: 'center', marginLeft: 45}} />
                <Text style={{color: 'white', alignSelf:'center', paddingHorizontal:5, fontSize: 15 }}>Or</Text>
                <View style={{backgroundColor: 'white', height: 0.25, flex: 1, alignSelf: 'center', marginRight: 45}} />
            </View>
            <Button textColor='white' style={styles.loginLayout} contentStyle={styles.loginButton} onPress={() => {}}>Login</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    signUp: {
        backgroundColor: '#151F2B',
        paddingTop: 30,
        height: '100%'
    },
    twitterIcon: {
        alignItems: 'center',
        paddingBottom: 80
    },
    welcomeText: {
        color: 'white',
        fontSize: 30,
        paddingHorizontal: 40,
        fontWeight: 600,
    },
    signUpLayout: {
        marginHorizontal: 40,
        marginTop: 75,
        marginBottom: 20,
        borderRadius: 50,
    },
    signUpButton: {
        backgroundColor: '#1DA2F4',
        height: 50,
        borderRadius: 50,
    },
    loginLayout: {
        marginHorizontal: 40,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 50,
    },
    loginButton: {
        backgroundColor: '#1DA2F4',
        height: 50,
        borderRadius: 50,
    }
})
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../server/config/firebase';

export default function DrawerContent() {
    const navigation = useNavigation();

    const logout = async () => {
        try {
            await signOut(auth);
        }
        catch (err) {
            console.log(err);
        }
    }

    return(
        <View style={styles.drawer}>
        <View style={styles.content}>
            <View style={styles.profileInfo}>
                <TouchableOpacity style={styles.profilePicWrapper} onPress={() => {}}>
                    <Image source={require('../assets/profile_images/pfp.jpg')} style={styles.profilePic} />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF' }}>Soroush </Text> 
                <Text style={{ color: '#7C8896' }}>@SoroKha </Text>
                <View style={styles.statsLine}>
                    <Text style={styles.statsBold}>66 </Text>
                    <Text style={styles.statsGrey}>Following </Text>
                    <Text style={styles.statsBold}>53 </Text>
                    <Text style={styles.statsGrey}>Followers</Text>
                </View>
            </View>
            <View style={styles.tabs}>
                <TouchableOpacity style={styles.tab} onPress={() => {}}>
                    <IconButton iconColor='white' style={styles.tabIcon} icon='account-outline' />
                    <Text style={styles.tabText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => {}}>
                    <IconButton iconColor='white' style={styles.tabIcon} icon='alpha-b-circle-outline' />
                    <Text style={styles.tabText}>Chatter Blue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => {}}>
                    <IconButton iconColor='white' style={styles.tabIcon} icon='message-outline' />
                    <Text style={styles.tabText}>Topics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => {}}>
                    <IconButton iconColor='white' style={styles.tabIcon} icon='bookmark-outline' />
                    <Text style={styles.tabText}>Bookmarks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => {}}>
                    <IconButton iconColor='white' style={styles.tabIcon} icon='text-box-outline' />
                    <Text style={styles.tabText}>Lists</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => {}}>
                    <IconButton iconColor='white' style={styles.tabIcon} icon='account-group-outline' />
                    <Text style={styles.tabText}>Chatter Circle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => {navigation.navigate('Landing')}}>
                    <IconButton iconColor='white' style={styles.tabIcon} icon='account-group-outline' />
                    <Text style={styles.tabText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => {logout}}>
                    <IconButton iconColor='white' style={styles.tabIcon} icon='account-group-outline' />
                    <Text style={styles.tabText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    drawer: {
        height: '100%',
        backgroundColor: '#171F2A',
    },
    content: {
        top: 40,
        
    },
    profileInfo: {
        left: 25
    },
    profilePicWrapper: {
        marginBottom: 8,
        width: 10
    },
    profilePic: {
        width: 42,
        height: 42,
        borderRadius: 50,
    },
    statsLine: {
        flexDirection: 'row',
        paddingBottom: 10,
        marginBottom: 10,
        marginTop: 10
    },
    statsGrey: {
        color: 'grey'
    },
    statsBold: {
        color: 'white',
        fontWeight: 'bold'
    },
    tabs: {
        left: 0,
       
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 12
    },
    tabIcon: {
        color: 'red'
    },
    tabText: {
        color: 'white',
        fontWeight: 400,
        fontSize: 20,
        bottom: 1
    }
});

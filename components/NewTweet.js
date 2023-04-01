import * as React from 'react';
import { Button, FAB, Modal, Portal } from 'react-native-paper';
import { Image, StyleSheet, TextInput, View } from 'react-native';

export default function NewTweet() {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return(
        <View>
            <FAB
            icon="plus"
            style={styles.newTweet}
            onPress={showModal}
            variant='white'
            />

            <Portal>
            <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modal}
            dismissable={false}
            >
                <View style={styles.modalHeader}>
                  <Button textColor='white' onPress={hideModal} style={styles.cancelBtn}> Cancel </Button>
                  <Button textColor='white' onPress={hideModal}  style={styles.tweetBtn}> Tweet </Button> 
                </View>
                <View style={styles.modalBody}>
                    <View style={styles.profilePicWrapper}>
                        <Image source={require('../assets/profile_images/pfp.jpg')} style={[styles.profilePic]} />
                    </View>
                    <TextInput
                    style={styles.tweetText}
                    multiline={true}
                    autoFocus={true}
                    keyboardAppearance='dark'
                    placeholder='Whats happening?'
                    placeholderTextColor='#8B97A5'
                    textAlignVertical='top'
                    />
                </View>
            </Modal>
            </Portal>
        </View>
    );
};

const styles = StyleSheet.create({
    newTweet: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: '#1D9BF0',
        borderRadius: 50,
        textcolor: 'white'
    },
    modal: {
        backgroundColor: '#151F2B',
        height: '100%'
    },
    modalHeader: { 
        flex: 1,
        flexDirection: 'row',
        top: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#425264',
        
        
    },
    cancelBtn: {
        left: 10
    },
    tweetBtn: {
        position: 'absolute',
        right: 10,
        backgroundColor: '#1D9BF0'
    },
    modalBody: {
        flex: 6,
        flexDirection: 'row',
        top: 30
    },
    profilePicWrapper: {
        width: 80,
    },
    profilePic: {
        width: 48,
        height: 48,
        borderRadius: 50,
        left: 20
    },
    tweetText: {
        width: '75%',
        height: '80%',
        fontSize: 20,
        color: 'white'
    }
});

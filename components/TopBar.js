import * as React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function TopBar() {
    return(
    <Appbar.Header style={[styles.top]}>
        <Appbar.Action color='#1C96E8' icon="twitter" onPress={() => {}} />
        
    </Appbar.Header>
    );
  
};

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#15202B',
        color: 'white',
        justifyContent: 'center',
    },
  });

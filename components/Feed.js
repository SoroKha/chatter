import * as React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

export default function Feed() {
    return(
    <View>
        <Text>
            Hello
        </Text>
    </View>
    );
  
};

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#15202B',
        color: 'white',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        display: 'flex',
    }
  });

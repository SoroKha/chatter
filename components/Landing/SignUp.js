import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { SERVER } from '@env';



export default function SignUp() {
    const navigation = useNavigation();

    const [name, setName] = React.useState("");
    const [tag, setTag] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [birth, setBirth] = React.useState("");
    const [date, setDate] = React.useState(new Date(1598051730000));
    var options = { year: 'numeric', month: 'short', day: 'numeric' };

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
      alert(currentDate.getTime());
      setBirth(currentDate.toLocaleString("en-US", options));
    };
  
    const showDatePicker = () => {
      DateTimePickerAndroid.open({
        value: date,
        display: 'spinner',
        onChange,
        mode: 'date',
        is24Hour: true,
      });
    };

    function createUser() {
        const accountData = {
            id: Date.now(),
            created: Date.now(),
            birthday: date.getTime(),
            level: 10,
            location: null,
            name: name,
            password: password,
            profilePicture: null,
            settings: null,
            tag: tag,
        };
        
        fetch(SERVER + "/createUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Credentials": true 
          },
          body: JSON.stringify(accountData)
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.error(err));
      }
  
    return(
        <View style={styles.signUp}>
            <View style={styles.twitterIcon}>
                <IconButton size={30} iconColor='#1C96E8' icon="twitter" onPress={() => {navigation.navigate('Landing')}} />
            </View>
            <View>
                <Text style={styles.accountText}>Create your account</Text>
            </View>
            <View style={styles.form}>
                
                <TextInput
                mode='flat'
                label='Name'
                placeholder='Name'
                selectionColor='#1C96E8'
                underlineColor='gray'
                activeUnderlineColor='gray'
                textColor='#1C96E8'
                style={styles.input}
                contentStyle={styles.inputContent}
                value={name}
                onChangeText={name => setName(name)}
                />
                <TextInput
                mode='flat'
                label='Tag'
                placeholder='Your unique handle'
                selectionColor='#1C96E8'
                underlineColor='gray'
                activeUnderlineColor='gray'
                textColor='#1C96E8'
                style={styles.input}
                contentStyle={styles.inputContent}
                value={tag}
                onChangeText={tag => setTag(tag)}
                />
                <TextInput
                mode='flat'
                label='Email'
                placeholder='Email address'
                selectionColor='#1C96E8'
                underlineColor='gray'
                activeUnderlineColor='gray'
                textColor='#1C96E8'
                autoComplete='email'
                keyboardType='email-address'
                style={styles.input}
                contentStyle={styles.inputContent}
                value={email}
                onChangeText={email => setEmail(email)}
                />
                <TextInput
                mode='flat'
                label='Date of birth'
                placeholder='Date of birth'
                selectionColor='#1C96E8'
                underlineColor='gray'
                activeUnderlineColor='gray'
                textColor='#1C96E8'
                onPressIn={showDatePicker}
                style={styles.input}
                contentStyle={styles.inputContent}
                value={birth}
                />
                <TextInput
                mode='flat'
                label='Password'
                placeholder='Set a password'
                selectionColor='#1C96E8'
                underlineColor='gray'
                activeUnderlineColor='gray'
                textColor='#1C96E8'
                secureTextEntry={true}
                style={styles.input}
                contentStyle={styles.inputContent}
                value={password}
                onChangeText={password => setPassword(password)}
                />
            </View>
            <Button textColor='white' style={styles.submitLayout} contentStyle={styles.submitButton} onPress={createUser}>Create</Button>
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
        
    },
    accountText: {
        color: 'white',
        fontSize: 26,
        marginLeft: 40,
        fontWeight: 800
    },
    form: {

        alignItems: 'center'
    },
    input: {
        width: '80%'
    },
    inputContent: {
        backgroundColor: '#151F2B',
        
    },
    submitLayout: {
        marginHorizontal: 40,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 50,
    },
    submitButton: {
        backgroundColor: '#1DA2F4',
        height: 50,
        borderRadius: 50,
    }
})
import { 
  StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView,
  TextInput, 
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const login = () => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
    .then((response) => response.json())
    .then((res) => {
      if (res.success == true) {
        AsyncStorage.setItem('user', res.user);
        navigation.navigate('Profile');
      }
      else {
        alert(res.message)
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.header}> LOGIN </Text>

        <TextInput style={styles.textInput} placeholder='Username' value={username} onChangeText={setUsername} autoCapitalize="none" />
        <TextInput style={styles.textInput} placeholder='Passoword' value={password} onChangeText={setPassword} autoCapitalize="none" secureTextEntry={true}/>

        <Pressable style={styles.btn} onPress={login}> 
          <Text>Login</Text>
        </Pressable>
      </View>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff', 
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  btn: {
    alignSelf: 'stretch',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#01c853',
  }
});
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Kullanıcı adı ve şifre doğrulaması burada yapılacak.
    // Başarılı ise ana sayfaya yönlendirilecek.
    // Başarısız ise hata mesajı gösterilecek.
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginScreen;

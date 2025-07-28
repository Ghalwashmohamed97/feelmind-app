import React, { useState } from 'react';
import { Button, I18nManager, StyleSheet, Text, TextInput, View } from 'react-native';
import i18n from '../../locales/i18n';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('loginTitle')}</Text>

      <TextInput
        style={styles.input}
        placeholder={i18n.t('email')}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder={i18n.t('password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title={i18n.t('login')} onPress={() => alert('تم تسجيل الدخول')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    direction: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

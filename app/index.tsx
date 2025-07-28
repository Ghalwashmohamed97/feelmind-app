import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import i18n from '../locales/i18n';

export default function HomeScreen() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const switchLanguage = (newLang: 'ar' | 'en') => {
    setLang(newLang);
    i18n.locale = newLang;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{String(i18n.t('welcome'))}</Text>
      <Text style={styles.subtitle}>{String(i18n.t('chooseLang'))}</Text>

      <View style={styles.buttons}>
        <Button title="العربية" onPress={() => switchLanguage('ar')} />
        <View style={{ height: 10 }} />
        <Button title={String(i18n.t('login.title'))} onPress={() => console.log('pressed')} />


      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={styles.subtitle}>{String(i18n.t('login.title'))}</Text>
        <Text>{String(i18n.t('login.subtitle'))}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 18, marginBottom: 10 },
  buttons: { marginTop: 20 },
});

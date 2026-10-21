import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import { t } from './src/locales/i18n';

export default function App() {
  return (
    <View style={styles.container}>
            <Text style={{ color: colors.text }}>{t('welcome', 'ar')} {"مشروع جديد"}!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('Hello World');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{message}</Text>

      <Pressable
        style={styles.button}
        onPress={() => setMessage('Button Pressed!')}>
        <Text style={styles.buttonText}>Click Me</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#000000',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#208AEF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

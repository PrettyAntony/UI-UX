import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  useWindowDimensions,
} from 'react-native';

export default function App() {
  const {height} = useWindowDimensions();
  const [answer, setAnswer] = useState("");

  function handlePress() {
     const answers = ["yes","no","maybe"]
     const index = Math.floor(Math.random() * answers.length)
    setAnswer(answers[index]);
  }

  return (
    <View style={[styles.container, {height}, StyleSheet.absoluteFill]}>
      <Text>The Magic 8 ball</Text>
      <View style={styles.br} />
      <TextInput
        
        placeholder="Ask me anything"
        keyboardType="text"
      />

      <View style={styles.br} />
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.btn,
        ]}
        onPress={handlePress}>
        <Text style={styles.btnText}>Answer</Text>
      </Pressable>
      <Text>{answer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  br: {
    height: 12,
  },
  btn: {
    backgroundColor: '#222',
    padding: 10,
  },
  btnText: {
    color: '#fff',
  },
});
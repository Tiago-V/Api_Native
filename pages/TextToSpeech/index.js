import React, { useState } from 'react';
import {View, Text, Button, StatusBar, TextInput} from 'react-native';
import * as Speech from 'expo-speech';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : StatusBar.currentHeight || 0,
    },
});

const TextToSpeech = () => {

    const [text, useText] = useState();

    const speak = () => {
        // let textToSpeech = "Olá, bom dia alunos";
        Speech.speak(text);
    }

    return(
        <View style={styles.container}>
            <TextInput value={text} onChangeText={ t => setText(t)} style={styles.input} />
            <Button title="Clique para falar" onPress={() => speak()} />
            <Text> Text To Speech </Text>
        </View>
    )
}

export default TextToSpeech;
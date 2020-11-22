import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contatos from './pages/Contatos';
import * as Contacts from 'expo-contacts';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : StatusBar.currentHeight || 0,
    },
    item : {
        backgroundColor : '#f9c2ff',
        padding : 20,
        marginVertical : 8,
        marginHorizontal : 16,
    },
    title : {
        fontSize : 32,
    },
});

const Contatos = () => {
  
    const Item = ({nome}) => {
        return (
            <View style={styles.item}>
                <Text style={styles.nome}>{nome}</Text>
            </View>
            )
    }
  
      const [contatos, setContatos] = useState([]);
  
      useEffect(() => {
      (async () => {
        // Pede permissão do usuário para usar os contatos
        const { status } = await Contacts.requestPermissionsAsync();
        // Verifica se a permissão foi dada
        if (status === 'granted') {
          // Pega os contatos armazenados no aparelho
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails],
          });
          
          // Verifica se existe contatos
          if (data.length > 0) {
              setContatos(data);
          }
        }
      })();
    }, []);

    const renderItem = ({item}) => {
        return(
            <Item nome={item.name} />
        )
    };

    return(
        <View style={styles.container}>
            <Text>Contatos</Text>
            <FlatList 
                data={contatos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
        </View>
    )
}

export default Contatos;
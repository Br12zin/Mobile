import {Button, Text, View} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Label from '../components/label';
import Input from '../components/input';
import { router } from 'expo-router';

export default function Index() {

    const handleNext = () => {
        alert('Formulário enviado com sucesso!');
        router.navigate('/dashboard');
    }
    return (
      <View>
        {/* div */}
        <Text style={Styles.title}>Index</Text>
        {/*h1 ou p */}
        <Label name="Nome:"/>
        <Input text="Digite seu nome..." />
        <Label name="Email:"/>
        <Input text="Digite seu email..." />
        <Label name="Senha:"/>
        <Input text="Digite sua senha..." />
        <Button title="Enviar" onPress={handleNext} />
      </View>
    );
}

const Styles = StyleSheet.create( {
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

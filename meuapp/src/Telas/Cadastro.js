import { useState } from 'react'
import { Button, Text, View, TextInput, StyleSheet, Alert } from 'react-native'
import axios  from 'axios';

export default function Cadastro() {
    const [nome, setNome]= useState('');
    const [telefone, setTelefone]= useState('');

    const enviarContato = async() => {
        if (!nome || !telefone){
            Alert.alert("Erro, por favor, preecha todos os campos");
            return;
        }

        const novoContato = {nome, telefone};
        axios.post('http://localhost:3000/contatos', novoContato)
    }
  return (
    <View style={estilos.container}>
        <Text style={estilos.label}>Nome:</Text>
        <TextInput
        style={estilos.Input}
        value={nome}
        onChange={setNome}
         placeholder="Digite o nome"
         />
         <Text style={estilos.label}>Telefone:</Text>
        <TextInput
        style={estilos.Input}
        value={telefone}
        onChange={setTelefone}
         placeholder="Digite o telefone"
         />

         <Button title="Cadastrar" onPress={enviarContato} />
    </View>
  )
}
const estilos = StyleSheet.create({
    container: {
        padding: 20,
    },
    label:{
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold"
    },
    Input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: "#fff"
    }
})

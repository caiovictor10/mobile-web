import { useState } from 'react'
import { Button, Text, View, TextInput, StyleSheet, Alert, Touchable, TouchableOpacity } from 'react-native'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    const enviarContato = async () => {
        if (!nome || !telefone) {
            Alert.alert("Erro, por favor, preecha todos os campos");
            return;
        }

      const novoContato = { nome, telefone };

    axios.post('http://10.0.2.2:3000/contatos', novoContato)
      .then(resposta => {
        if (resposta.status === 201) {
          setNome('');
          setTelefone('');
          navigation.navigate("ListaContatos");
        } else {
          Alert.alert("Erro, falha ao adicionar contato.");
        }
      });
    }
    return (
        <View style={estilos.container}>
            <Text style={estilos.label}>😀 Nome:</Text>
            <TextInput
                style={estilos.Input}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite o nome"
            />
            <Text style={estilos.label}>📞 Telefone:</Text>
            <TextInput
                style={estilos.Input}
                value={telefone}
                onChangeText={setTelefone}
                placeholder="Digite o telefone"
            />

            {/* </*Button title="Cadastrar" onPress={enviarContato} /> */}

            <TouchableOpacity style={estilos.button} onPress={enviarContato}>
                <Text style={estilos.titleButton}>Clique aqui</Text>
            </TouchableOpacity>
        </View>
    )
}
const estilos = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold"
    },
    Input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 50,
        backgroundColor: "#fff"
    },
    button: {
        backgroundColor: "#007bff",
        padding: 12,
        borderRadius: 50,
        alignItems: "center"
    },
    titleButton: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold"
    }
});


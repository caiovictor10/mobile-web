import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);

  // Função para buscar contatos do servidor
  const buscarContatos = () => {
    axios
      .get("http://10.0.2.2:3000/contatos")
      .then((resposta) => {
        setContatos(resposta.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar contatos", error);
      });
  };

  // UseEffect para carregar os dados ao iniciar
  useEffect(() => {
    buscarContatos();
  }, []);

  return (
    <View style={estilos.container}>
      <Text style={estilos.tituloHeader}>📱 Lista de Contatos</Text>

      {contatos.length > 0 ? (
        <FlatList
          data={contatos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={estilos.cardContato}>
              <Text style={estilos.textName}>{item.nome}</Text>
              <Text style={estilos.textNum}>{item.telefone}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={estilos.mensagem}>Nenhum contato disponível</Text>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    padding: 16,
  },
  tituloHeader: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
    backgroundColor: "#7FFFD4",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardContato: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  textName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  textNum: {
    fontSize: 16,
    color: "#666666",
  },
  mensagem: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888888",
  },
});

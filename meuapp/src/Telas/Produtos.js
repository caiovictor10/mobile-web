import React, { useState } from "react";
import Image from '../../assets/img-4.jpg'

import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  Image, 
  Alert, 
  ScrollView, 
  StyleSheet 
} from "react-native";

export default function LojaEsportiva() {
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  const produtos = [
    { id: 1, nome: "Camiseta Esportiva", preco: 89.9, Image: "../../assets/img-4.jpg"}, 
    { id: 2, nome: "Tênis de Corrida", preco: 299.9, imagem: "https://via.placeholder.com/150"},
    { id: 3, nome: "Bola de Futebol", preco: 99.9, imagem: "https://via.placeholder.com/150" },
    { id: 4, nome: "Luvas de Academia", preco: 59.9, imagem: "https://via.placeholder.com/150" },
  ];

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (form.nome && form.email) {
      setClientes([...clientes, form]);
      setForm({ nome: "", email: "", telefone: "" });
      Alert.alert("Sucesso", "Cliente cadastrado com sucesso!");
    } else {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios!");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.titulo}>🏅 Loja Esportiva</Text>
      <Text style={styles.subtitulo}>Produtos esportivos de alta qualidade</Text>

      {/* Produtos */}
      <Text style={styles.sectionTitle}>Produtos em destaque</Text>
      <FlatList
        data={produtos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Text style={styles.nomeProduto}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
            <TouchableOpacity style={styles.botaoComprar}>
              <Text style={styles.textoBotao}>Comprar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Cadastro de clientes */}
      <Text style={styles.sectionTitle}>Cadastro de Clientes</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Nome completo"
          style={styles.input}
          value={form.nome}
          onChangeText={(text) => handleChange("nome", text)}
        />
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          keyboardType="email-address"
          value={form.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <TextInput
          placeholder="Telefone"
          style={styles.input}
          keyboardType="phone-pad"
          value={form.telefone}
          onChangeText={(text) => handleChange("telefone", text)}
        />
        <TouchableOpacity style={styles.botaoCadastrar} onPress={handleSubmit}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de clientes */}
      {clientes.length > 0 && (
        <View style={styles.listaClientes}>
          <Text style={styles.sectionTitle}>Clientes cadastrados</Text>
          {clientes.map((c, i) => (
            <Text key={i} style={styles.itemCliente}>
              {c.nome} - {c.email}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

// 🎨 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1E90FF",
    marginBottom: 4,
  },
  subtitulo: {
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    width: 180,
    alignItems: "center",
    elevation: 3,
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  preco: {
    fontSize: 14,
    color: "green",
    fontWeight: "bold",
    marginVertical: 4,
  },
  botaoComprar: {
    backgroundColor: "#1E90FF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  form: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  input: {
    backgroundColor: "#EEE",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  botaoCadastrar: {
    backgroundColor: "#1E90FF",
    padding: 12,
    borderRadius: 8,
  },
  listaClientes: {
    backgroundColor: "#FFF",
    marginTop: 20,
    borderRadius: 12,
    padding: 12,
    elevation: 2,
  },
  itemCliente: {
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#CCC",
  },
});

import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import axios  from 'axios';

export default function ListaContatos() {
    const[contatos, setContatos] = useState([]);

    // função para buscar contatos do servidor
    const listaContatos = () => {
        axios
        .get("http://10.0.2.2:3000/contatos")
        .then((resposta) => {
            setContatos(resposta.data)
        })
        .catch((error)=>{
            console.error("Erro ao buscar contatos", error);
    });
    }  

    // Use o useEffect para buscar dados
    useEffect(()=>{
        listaContatos();

    },[])

  return (
<View style={ estilos.top}>
    <Text>Lista Contatos</Text>
    {contatos.length > 0 ? (
     contatos.map((contato, index) => (
      <View key={index}>
        <Text>{contato.nome}</Text>
        <Text>{contato.telefone}</Text>
      </View>

     ))
    ) : (
      <Text>Nenhum contato disponivel</Text>
      )}
    </View>
  )
}
const estilos = StyleSheet.create({ 
    top: {
        backgroundColor: "#556600", 
        width:"auto",
        textAlign:"center",
        padding: 10,
        borderColor: "rgba(255, 0, 0, 1)",
        borderWidth: 5, 

    }, 
    tituloHeader: {
         
      }, 
    container: { 
      
      },

    })


        
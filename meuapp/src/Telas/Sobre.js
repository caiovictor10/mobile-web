import { Text, StyleSheet, Image, ScrollView, View } from 'react-native';
import Image1 from '../../assets/img-1.jpg';
import Image2 from '../../assets/img-2.jpg';
import Image3 from '../../assets/img-3.jpg';

export default function Sobre() {
  const info = {
    nomeApp: "Fut Popeto",
    versao: "1.0.0",
    desenvolvedor: "Caio Victor",
  };

  return ( 
    <ScrollView style={estilos.container}>  
      <Text>Sobre</Text>  
      <Text style={estilos.titulo}>Uniformes ecológicos</Text>  

      <Image source={Image1} style={estilos.image} />  
      <View style={estilos.line} /> 
       <Text style={estilos.titulo}>Vestuario para praia</Text>

      <Image source={Image2} style={estilos.image} />  
      <View style={estilos.line} />
       <Text style={estilos.titulo}>Roupas para todos os gostos</Text>
      <View style={estilos.line} />

      <Image source={Image3} style={estilos.image} />
       <Text style={estilos.titulo}></Text>

      <Text>Nome: {info.nomeApp}</Text>
      <Text>Versão: {info.versao}</Text>
      <Text>Desenvolvido por: {info.desenvolvedor}</Text>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 80, 
    backgroundColor: '#ecdcdcff',
  }, 
  title: { 
    fontSize: 24, 
    fontWeight: 'bold' ,
  }, 
  titulo: { 
    fontSize: 40, 
    fontWeight: 'bold' , 
    marginBottom: 10,  
  }, 
  image: { 
    margin: 10, 
    width: 200, 
    height: 200, 
    borderRadius: 100,  
    borderColor: "#00FA9A", 
    borderWidth: 5, 
  },  
  line: {  
    width: "80%",  
    height: 5, 
    backgroundColor: "#00FA9A", 
    marginVertical: 20, 
  },
});
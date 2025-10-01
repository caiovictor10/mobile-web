import { View, StyleSheet, Text} from "react-native"
import ListasCursos from "../Components/ListasCursos";

export default function Prime() {
  return (
    <>
        <View style={estilos.topo}>
            <Text style={estilos.tituloHeader}>Projeto Mobile</Text>
        </View>
    
        <View style={estilos.cursosContent}>
            <Text style={estilos.coresTitle}>Android</Text>
            <Text style={estilos.coresTitle}>IA Regenerativa</Text>
            <Text style={estilos.coresTitle}>Recursos Humano</Text>
            <Text style={estilos.coresTitle}>Robótica</Text>
        </View>

        <ListasCursos/>

        
    </>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    hight: 150,
    backgroundColor: "blue",
  },
  tituloHeader: {
    width: "100%",
    color: "white",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20,
  },
cursosContent: {
  width: "100%",
  paddingTop: 5,
  fontSize: 150,
  backgroundColor: "lightblue",
},
  coresTitle: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
  }
  
}); 
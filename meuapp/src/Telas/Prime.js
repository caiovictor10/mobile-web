import { View, StyleSheet, Text } from "react-native"
import ListasCursos from "../Components/ListasCursos";
import ListasPessoas from "../Components/ListasPessoas";

export default function Prime() {
    return (
        <>
            <View style={estilos.topo}>
                <Text style={estilos.tituloHeader}>Cursos Senai</Text>
            </View>
            <ListasPessoas/>
      
            <View>
                <Text style={estilos.tituloHeader}>Lista de alunos Senai</Text>
            </View>
      
            <ListasCursos />
            <Text style={estilos.cursosContent}>Lista de Cursos Senai</Text>

            <Text style={estilos.coresTitle}>Lista de Alunos Senai</Text> 
        </>
    )
}

const estilos = StyleSheet.create({

    topo: {
        width: "100%",
        height: 90,
        backgroundColor: "#00aaff",
        textAlign: "center",
    },

    tituloHeader: {
        width: "100%",
        color: "white",
        textAlign: "center",
        paddingTop: 25,
        fontSize: 30,
    },

    cursosContent: {
        width: "100%",
        height: 70,
        paddingTop: 20,
        fontSize: 25,
        backgroundColor: "#aa00ff",
        textAlign: "center"
    },
    coresTitle: {
        color: "#aaff00",
        fontSize: 20,
    
  },
});
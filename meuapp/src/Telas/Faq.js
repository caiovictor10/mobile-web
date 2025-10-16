import React from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'

export default function Faq() {
    return (
        <View>

            <Text style={estilos.top}>Dúvidas?</Text>
            <Text style={estilos.tituloHeader}>Fale conosco</Text>
            <Text style={estilos.button}>Ligue Agora</Text> 
        </View>
            
        
    )
}

const estilos = StyleSheet.create({ 
    top: {
        width: "100%",
        height: 120,
        backgroundColor: "#0095ffff",
        borderColor: "#002200",
        textAlign: 'center',
        borderWidth: 10,
        margin: 5,
    },
    tituloHeader: {
        borderWidth: 10,
        width: "100%",
        textAlign: 'center',

        color: "#2c1e7bff",
        fontWeight: "bold",
        fontSize: 25,
        padding: 40,
    },
    button: { 
        borderWidth: 10, 
        padding: 10, 
        textAlign: 'center', 
        fontStyle: 'italic',
        fontSize: 30, 
        color: "#006effff"
    },

});
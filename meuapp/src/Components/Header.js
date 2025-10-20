import {StyleSheet, Text, View} from 'react-native'

export default function Header() {
  return (
    <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>E-comerce Fut Popeto</Text>
        </View>
  )
}

const estilos = StyleSheet.create({
    topo: {

        width:'100%',
        height: 120,
        backgroundColor: "#c0c0c0",
        borderBottomColor: "#0e0d0dff",
        borderBottomWidth: 5,
    },
    tituloHeader: {
        width: "100%",
        textAlign: 'center',
        color: '#7FFFD4',
        fontWeight: "bold",
        fontSize: 25,
        padding: 40,
    }

});

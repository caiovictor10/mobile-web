import { Text, View, StyleSheet, FlatList } from 'react-native'

export default function ListasCursos() {
    const data = ["React Native", "Mongo DB", "Express", "Node.js", "C#"];

  return (
  <View style={estilos.container}>
<FlatList 
      data={data}
      renderItem={({item}) => (
        <View style={estilos.lastItem}>
      <Text style={estilos.bullet}>• </Text>
      <Text style={estilos.text}>{item}</Text>
      
      </View>
)}
  />
  </View>
  )

}

const estilos = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
    },
    lastItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        padding: 12,
        backgroundColor: "#ff00aa",
        borderWidth: 3,
        borderColor: "bluelight",
        borderRadius: 20,
        elevation: 10,
    },
    bullet: {
        fontSize: 15,
        marginRight: 6,
    
    },
    text: {
        fontSize: 16,
    }
})

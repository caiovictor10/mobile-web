import { Text, View, StyleSheet, FlatList } from 'react-native'

export default function ListasCursos() {
    const data = ["React Native", "IA Regenerativa","Express", "Node.js","Power BI"];
    return (
  <View style={estilos.container}>
    <FlatList 
    data={data}
    renderItem={({item})=> (
    <View style={estilos.lastItem}>
        <Text style={estilos.bullet}>• </Text>
        <Text style={estilos.text}>{item} </Text>

    </View>   
)}
    />
</View>
  )
}

const estilos= StyleSheet.create({
    container: { 
        marginTop: 1,
        padding: 10, 
        
    },
lastItem: { 
    flexDirection: "row",
    alignItems:"center",
    marginBottom: 5,   
    padding: 12,
    backgroundColor: "#ff00aa",
    borderWidth: 3,
    borderColor: "rgba(25, 25, 221, 1)",
    borderRadius: 50,
    elevation: 10,
},

bullet: { 
    fontSize: 20,
    marginRight: 8,
},

text: {
    fontSize: 16,
},

})
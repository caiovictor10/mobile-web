import {Text, View, StyleSheet} from 'react-native'

export default function ListasPessoas() {
    const pessoas = [
        {
            id: 1,
            nome: 'Juliana',
            idade: 20,
        },
        {
            id: 2,
            nome: 'Caio',
            idade: 40,
        },
         {
            id: 3,
            nome: 'Edu',
            idade: 18,
        },
         {
            id: 15,
            nome: 'Gabs',
            idade: 19,
        }
    ];
  return (
    
    <View style={estilos.container}>
        <Text style={estilos.titulo}>Teste teste</Text>

        {pessoas.map((pessoa)=>( 
            <View>
                <Text>{pessoa.nome}</Text>
                <Text>{pessoa.idade}</Text>
                </View>
        ))}
    </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        padding:20,
        marginTop: 40,
    },
    titulo:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center'
    },
    card: {
        backgroundColor: "blue",
        padding: 15,
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 1,
        marginBotton: 10,
    }
})
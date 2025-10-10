import { Button, StyleSheet, Text, View } from 'react-native'

export default function Card() {
    return (
        <View style={estilos.container}>
            
            <Text style={estilos.cardTitle}>Sobre</Text>
            <Text style={estilos.cardContent}>Saiba mais sobre nós</Text>
            <Button
                title="ir para sobre"
                onPress={
                    () => alert("Botão Pressionado")
                } />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#c0c0c0",
        borderRadiuss: 1.41,
        shadowColor: "#0000",
        shadowOpacity: 0.5,    
        elevation: 2,
        padding: 15,
        margin: 20,
    },
    cardTitle: {
        fontSize: 20,
        fontWeigth: "bold",
        marginBottom: 10,
    },
    cardContent: {
        fontSize: 30,
        marginBottom: 15,

    },


});
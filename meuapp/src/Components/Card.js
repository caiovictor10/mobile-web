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
        setStatusBarBackgroundColor: "#ff0000ff",
        borderRadiuss: 1.41,
        shadowColor: 'blue',
        shadowOpacity: 0.2,
        elevation: 2,
        padding: 15,
        margin: 20
    },
    cardTitle: {
        fontSize: 18,
        fontWeigth: "bold",
        marginBottom: 10,
    },
    cardContent: {
        fontSize: 14,
        marginBottom: 10

    },


});
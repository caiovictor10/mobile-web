import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
    const navigation = useNavigation();
    return (
        <View style={estilos.container}>
            
            <Text style={estilos.cardTitle}>{props.title}</Text>
            <Text style={estilos.cardContent}>{props.content}</Text>
            <Button
                title={props.textButton}
                onPress={
                    props.onPress
                } />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#585555ff",
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
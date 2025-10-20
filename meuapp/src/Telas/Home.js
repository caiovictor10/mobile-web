import { useNavigation } from '@react-navigation/native';
import Card from "../Components/Card"
import { View } from 'react-native';


export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
        <Card 
          title="Sobre"
          content="💻Saiba mais sobre nós e nossos serviços"
          textButton="Ir para Sobre *"
          onPress={ () => navigation.navigate('Sobre') }
        />
        <Card
          title="Faq"
          content="🎓Saiba mais"
          textButton= "Ir para Faq"
          onPress={ () => navigation.navigate('Faq') }
        />
            <Card
          title="Lista Contatos"
          content= "📝 Lista de contatos"
          textButton="Ir para Lista"
          onPress={ () => navigation.navigate('ListaContatos') }
        />
    </View>
  ) 
} 

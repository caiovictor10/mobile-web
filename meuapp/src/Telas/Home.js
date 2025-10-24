import { useNavigation, } from '@react-navigation/native';
import Card from "../Components/Card"
import { ScrollView} from 'react-native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView>
        <Card 
          title="Sobre"
          content="💻Saiba mais sobre nós e nossos serviços"
          textButton="Ir para Sobre"
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
           <Card
          title="Cadastro"
          content= "💻 Cadastrar lista"
          textButton="Cadastro"
          onPress={ () => navigation.navigate('Cadastro') }
        />
         <Card
          title="Produtos"
          content= "🏆Lista de produtos"
          textButton="Produtos"
          onPress={ () => navigation.navigate('Produtos') }
        />
        
    </ScrollView>
  ) 
} 

import Banner from "./componentes/Contador/Banner";
import Header from "./Header";
import ImgCard from "./componentes/imgCard";
import Button from  "./componentes/Button";
import "./App.css";

function App() {
    return (
        <main className="container">

            <Header title="Meu site"/>

            <Banner>
                <h1>Bem vindo ao meu site</h1>
                <p>Aqui você encontra as melhores ofertas</p>

            </Banner>

            <ImgCard caption="Uma imagem interessante"/>
            <Button text="Clique aqui"/>

        </main>
    )
}

export default App
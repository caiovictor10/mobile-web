import Banner from "./componentes/Contador/Banner"
import ImgCard from "./componentes/imgCard"
import Header from "./Header"
import "./App.css";

function App() {
    return (
        <main className="container">

            <Header title="Meu site"/>

            <Banner>
                <h1>Bem vindo ao meu site</h1>
                <p>Aqui você encontra as melhores ofertas</p>

            </Banner>

            <ImgCard />

        </main>
    )
}

export default App
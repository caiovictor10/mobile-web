import Banner from "./componentes/Contador/Banner";
import Header from "./componentes/Header";
import ImgCard from "./componentes/imgCard";
import Button from  "./componentes/Button";
import img1 from "./assets/img-card1.jpg";
import img2 from "./assets/img-card2.jpg";
import img3 from "./assets/img-card3.jpg";
import "./App.css";

function App() {
    const handleClick = ()=> {

    }
    return (
        <main className="container">

            <Header title="Meu site"/>

            <Banner>
                <h1>Bem vindo ao meu site</h1>
                <p>Aqui você encontra as melhores ofertas</p>

            </Banner>

            <ImgCard caption="Uma imagem interessante" 
            imagem={img1}
            texto="Lorem ipsum Popeto"
            link="https://www.terra.com/"/>
    
             <ImgCard caption="Popeto" 
             imagem={img2}
             texto="Popeto New"
             link="https://www.globo.com/"/>

               <ImgCard caption="Caio do Futebol" 
               imagem={img3}
               texto= "Popeto Popeto LDU"
               link="https://www.band.com/"/>
        

                        <Button text="Clique aqui" onclick={handleClick}/>

        </main>
    )
}

export default App
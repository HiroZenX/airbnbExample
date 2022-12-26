import Navbar from './Components/Navbar'
import './App.css';
import Hero from './Components/Hero'
import CardContent from './Components/CardContent';
import data from './data'

function App() {
  const cards = data;
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <div className="cards">
      {cards.map(card => {
        return <CardContent
          img={card.img} 
          likes={card.likes} 
          name={card.name} 
          price={card.price}
        />
      })}
     </div>
    </div>
  );
}

export default App;

import './App.css';
import MemoryCard from './components/memoryCard';

function MemoryGame() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <div id='subtitle'>Match Cards to Win!</div>
      </header>
      <div className='cardHolder'>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      </div>
      <div className='cardHolder'>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      </div>
      <div className='cardHolder'>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      </div>
      <div className='cardHolder'>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      </div>
      
     
      
        
    </div>
  );
}

export default MemoryGame;

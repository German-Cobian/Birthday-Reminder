import data from './components/data';
import List from './components/List';
import './App.css';
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(data);

  return ( 
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;

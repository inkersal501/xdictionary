import './App.css';
import { useState } from 'react';
function App() {

  const dictionary = [  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },  
      { word: "Component", meaning: "A reusable building block in React." },
      { word: "State", meaning: "An object that stores data for a component." }  
    ];
  const [searchInput, setSearchInput] = useState("");
  const [showDef, setShowDef] = useState(false);
  const [def, setDef] = useState("");

  const handleForm = (e)=>{
    e.preventDefault();
    if(searchInput!==""){
      const filter = dictionary.filter((elem)=>{
        return elem.word.toLowerCase().includes(searchInput.toLowerCase());
      });
      if(filter.length===0){
        setDef("Word not found in the dictionary.");
      }else{
        setDef(filter[0].meaning);
      }
      setShowDef(true);
    }
  };
  
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={handleForm}>
        <div>
          <input type="text" id="searchInput" onChange={(e)=>{setSearchInput(e.target.value);setShowDef(false)}} value={searchInput} placeholder="Search for a word..." required/>
          <button type="submit">Search</button>
        </div>
      </form>
      <p><b>Definition:</b></p>

      {showDef && <p style={{marginTop:"20px"}}>{def}</p> }
    </div>
  );
}

export default App;

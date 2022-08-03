import Navbar from './components/Navbar'
import NotesList from './components/NotesList';
import { useState } from 'react'
import { nanoid } from 'nanoid'
import NoteSearch from './components/NoteSearch';

function App() {
  const [item, setItem] = useState([
    {
      id: nanoid(),
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, deserunt quod veniam suscipit fuga eaque itaque laboriosam non quia dignissimos rem nobis, voluptatibus consequatur commodi praesentium quidem ratione obcaecati quis.",
    },
    {
      id: nanoid(),
      text: "Hola this is the second note",
    },
    {
      id: nanoid(),
      text: "Hola this is the third note",
    },
  ])

  const addItem = (text) => {
    const date = new Date()
    const newItem = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newitemlist = [...item, newItem]
    setItem(newitemlist)
  }

  const popItem = (id) => {
    const newitemlist = item.filter((note) => note.id !== id );
    setItem(newitemlist)
  }

  const [search, setSearch] = useState('')

  return (
    <div className="App mx-auto">
      <Navbar />
      <NoteSearch handleSearchItem={setSearch}/>
      <NotesList value={item.filter((note) => note.text.toLowerCase().includes(search) )} handlePopItem={popItem} handleAddItem={addItem} handleSearchItem={setSearch}/>
    </div>
  );
}

export default App;

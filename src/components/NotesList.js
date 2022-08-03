import Note from './Note';
import NoteForm from './NoteForm';

const NotesList = ({ value, handlePopItem, handleAddItem }) => {
  return (
    <>  
      <NoteForm handleAddItem={handleAddItem}/>
      {
          value.map((element) =>
              <Note
                  key={element.id} 
                  value={element.text} 
                  id={element.id} 
                  handlePopItem={handlePopItem}
              />
          )
      }
    </>
  )
}

export default NotesList
import { useState } from 'react'

const NoteForm = ({ handleAddItem }) => {

    const [noteform, setNoteform] = useState('')
    
    const handleChange = (event) => {
        setNoteform(event.target.value)
    }

    const handleSetItem = () => {
        handleAddItem(noteform)
    }

    return (
        <div className="container border-bottom">
            <div className="p-4 pt-1">
                <div className="row mb-3">
                    <textarea className='note-form pt-2 pb-2' rows='8' cols='10' placeholder="Note..." onChange={handleChange}></textarea>
                </div>
                <div className="row">
                    <button className='note-form bold pt-2 pb-2' onClick={handleSetItem}>Add to notes</button>
                </div>
            </div>
        </div>
    )
}

export default NoteForm
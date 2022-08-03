const NoteSearch = ({ handleSearchItem}) => {
  return (
    <div className="container">
        <div className="p-4">
            <div className="row">
                <input onChange={(event) => handleSearchItem(event.target.value.toLowerCase())} type="text" className="col-12 p-2" placeholder="Search..."/>
            </div>
        </div>
    </div>
  )
}

export default NoteSearch
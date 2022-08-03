import { MdDeleteForever} from 'react-icons/md'

const Note = (props) => {
  return (
    <div className="container">
        <div className="d-flex justify-content-between p-4 border-bottom gap-2">
            <div className="d-flex flex-column justify-content-between flex-grow01">
                <h6>{props.value}</h6>
                <p className='fs-small'>id: {props.id}</p>
            </div>
            <button className='m-1 btn btn-outline-danger icon' onClick={() => props.handlePopItem(props.id)}><MdDeleteForever /></button>
        </div>
    </div>
  )
}

export default Note
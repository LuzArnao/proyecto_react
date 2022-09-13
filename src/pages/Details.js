import ItemDetailContainer from "../components/ItemDetailContainer"
import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams();
  return (
    <div>
        <ItemDetailContainer id={id}/>
    </div>

  )
}

export default Details
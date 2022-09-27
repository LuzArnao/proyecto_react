import ItemListContainer from "../components/ItemListContainer"
import { useParams } from 'react-router-dom'

const Home = () => {
  const color = useParams();
  return (
    <div>
        <ItemListContainer color={color}/>
    </div>
  )
}

export default Home
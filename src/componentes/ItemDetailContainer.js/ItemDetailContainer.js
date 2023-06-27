import { useState, useEffect } from "react"
import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
  
    const { idItem } = useParams()
  
    useEffect(() => {
      getUnProducto(idItem)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))
    }, [idItem])
  
    return (
      <div>
        <h2 className="ml-6 mt-2 mb-4 text-l text-thin">
          Renderizado de UN SOLO producto
        </h2>
        <ItemDetail {...producto} />
      </div>
    )
  }
  
  export default ItemDetailContainer
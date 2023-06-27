import { useState, useEffect } from "react" 
import ItemList from "../ItemList/ItemList" 
import { getProductos, getCategoria } from "../../asyncmock" 
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams

  useEffect(() => {
    const funcionProductos = idCategoria ? getCategoria : getProductos

    funcionProductos(idCategoria)
      .then((resolve) => setProductos(resolve))
      .catch((error) => console.log(error))
  }, [idCategoria])

  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        <div className="producto">
          <a href='#'>
            <div className="producto__img">
              <img src={IMG} alt='' />
            </div>
          </a>
          <div className='producto__footer'>
            <h1> Title </h1>
            <p> Categoria </p>
            <p className='price'>$320</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href='#'>
            <div className="producto__img">
              <img src={IMG} alt='' />
            </div>
          </a>
          <div className='producto__footer'>
            <h1> Title </h1>
            <p> Categoria </p>
            <p className='price'>$320</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href='#'>
            <div className="producto__img">
              <img src={IMG} alt='' />
            </div>
          </a>
          <div className='producto__footer'>
            <h1> Title </h1>
            <p> Categoria </p>
            <p className='price'>$320</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href='#'>
            <div className="producto__img">
              <img src={IMG} alt='' />
            </div>
          </a>
          <div className='producto__footer'>
            <h1> Title </h1>
            <p> Categoria </p>
            <p className='price'>$320</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href='#'>
            <div className="producto__img">
              <img src={IMG} alt='' />
            </div>
          </a>
          <div className='producto__footer'>
            <h1> Title </h1>
            <p> Categoria </p>
            <p className='price'>$320</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer
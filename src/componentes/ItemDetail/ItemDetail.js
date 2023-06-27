const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
      <>
        <div className="ml-6 max-w-sm bg-gray-50 rounded overflow-hidden shadow-lg">
          <img src={img} alt={nombre} className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-blue-900 mb-2">{nombre}</h2>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
              iusto illum odit omnis error dolorem ducimus maxime voluptates
              voluptate sequi fuga nam deserunt beatae officia officiis culpa
              porro aspernatur! Consequatur fugit ea amet voluptatem sunt
              laudantium veritatis doloribus porro dolorum.
            </p>
          </div>
          <div className="flex justify-evenly px-6 pb-4">
            <h3 className="btn btn-outline">ID Producto: {id}</h3>
            <h3 className="btn btn-outline">Precio: $ {precio}</h3>
          </div>
        </div>
      </>
    )
  }
  
  export default ItemDetail
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Branchs.css';
import Card from '../Cards/Card';




const Branchs: React.FC = () => {

  const [Productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        setProductos(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Estados para cada opción del dropdown
  const [tipoProducto, setTipoProducto] = useState('');
  const [marca, setMarca] = useState('');
  const [genero, setGenero] = useState('');
  const [talle, setTalle] = useState('');
  const [color, setColor] = useState('');
  const [precio, setPrecio] = useState([0, 1000]);

  // Funciones para manejar los cambios en los dropdowns
  const handleTipoProductoChange = (e) => setTipoProducto(e.target.value);
  const handleMarcaChange = (e) => setMarca(e.target.value);
  const handleGeneroChange = (e) => setGenero(e.target.value);
  const handleTalleChange = (e) => setTalle(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);
  const handlePrecioChange = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    setPrecio([min, max]);
  };

  return (
    <div  className='branchsContainer'>



      <div className='filtros'>



      
      
      <h2>Filtros de Búsqueda</h2>

      {/* Tipo de producto */}
      <label>Tipo de Producto:</label>
      <select className='selector' value={tipoProducto} onChange={handleTipoProductoChange}>
        <option value="">Selecciona un tipo</option>
        <option value="remeras">Remeras</option>
        <option value="pantalones">Pantalones</option>
        <option value="zapatillas">Zapatillas</option>
      </select>

      {/* Marca */}
      <label>Marca:</label>
      <select className='selector' value={marca} onChange={handleMarcaChange}>
        <option value="">Selecciona una marca</option>
        <option value="adidas">Adidas</option>
        <option value="nike">Nike</option>
        <option value="puma">Puma</option>
      </select>

      {/* Género */}
      <label>Género:</label>
      <select className='selector' value={genero} onChange={handleGeneroChange}>
        <option value="">Selecciona un género</option>
        <option value="femenino">Femenino</option>
        <option value="masculino">Masculino</option>
      </select>

      {/* Talle */}
      <label>Talle:</label>
      <select className='selector' value={talle} onChange={handleTalleChange}>
        <option value="">Selecciona un talle</option>
        {['37', '38', '39', '40', '41', '42', '43', '44'].map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      {/* Color */}
      <label>Color:</label>
      <select className='selector' value={color} onChange={handleColorChange}>
        <option value="">Selecciona un color</option>
        <option value="negro">Negro</option>
        <option value="rojo">Rojo</option>
        <option value="azul">Azul</option>
      </select>

      {/* Rango de precio */}
      <label>Rango de Precio:</label>
      <select className='selector' onChange={handlePrecioChange}>
        <option value="0-1000">Selecciona un rango</option>
        <option value="0-100">0 - 100</option>
        <option value="100-200">100 - 200</option>
        <option value="200-500">200 - 500</option>
        <option value="500-1000">500 - 1000</option>
      </select>
      
    
    
    </div>

        <div className='branchsProducts'>

        {Productos.map((producto) => (
          <Card
            key={producto.id}
            id={producto.id}
            name={producto.name}
            species={producto.species}
            image={producto.image}
            gender={producto.gender}
          />
        ))}

        </div>

    </div>
  );
};

export default Branchs;

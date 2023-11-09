"use client"
import { useState, createContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import { pedir } from '../helpers';

const Countrycontext = createContext();

const Countryprovider = ({children}) => {

    const [ orden, setOrden ] = useState([]);
    const [ nombre, setNombre ] = useState('');
    const [ direccion, setDireccion ] = useState('');
    const [ wpp, setWpp ] = useState('');
    const [ pago, setPago ] = useState('');
    const [ total, setTotal ] = useState(0);
    const [ ventana, setVentana ] = useState(false)

    const handleAgregarOrden = ({ categoriaId, descripcion,  ...burger}) => {
        if(orden.some(burgerstate => burgerstate.id === burger.id )){
            // Actualiza la cantidad y evita duplicados
            const ordenActualizada = orden.map(burgerstate => burgerstate.id === burger.id ? burger : burgerstate);
            setOrden(ordenActualizada);
            toast.success('Cambio realizado!')
        }else{
            setOrden([ ...orden, burger]);
            toast.success(`${burger.cantidad} ${burger.nombre} Agregado a tu orden!`)
        }
    }
    const handleShangeVentana = (id) =>{
        console.log(id)
        setVentana(!ventana);
    }
    useEffect(() => {
        const nuevoTotal = orden.reduce((total, burger) => (burger.precio * burger.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [orden])

    const editarCantidad = (id) => {
        // const burgerActualizar = orden.filter( producto => producto.id === id );
        // setProducto(burgerActualizar[0])
        console.log(id)
    }

    const hanleEliminarBurger = (id) => {
        const ordenActualizada = orden.filter( producto => producto.id !== id );
        setOrden(ordenActualizada)
    }

    const enviarPedido = (e) =>{
        e.preventDefault();
        let string = "";
        const productosCantidad = orden.map((producto) => [producto.nombre, producto.cantidad]);
        for(const [nombre, cantidad] of productosCantidad ) {
            string += `${cantidad} ${nombre}, `;
        }

        string = string.slice(0, -2); // elimina la última coma
        
        pedir(`${string}. Mi nombre es *${nombre}*. Para la dirección ${direccion}. Mi orden es por ${total} y cancelo con ${pago}`)
        setOrden([]);
        location.href = "/";
    }

    return(
        <Countrycontext.Provider
            value={{
                handleAgregarOrden,
                orden,
                editarCantidad,
                hanleEliminarBurger,
                nombre,
                setNombre,
                direccion,
                setDireccion,
                wpp,
                setWpp,
                pago,
                setPago,
                enviarPedido,
                total,
                handleShangeVentana,
                setVentana,
                ventana
            }}
        >
            {children}
        </Countrycontext.Provider>
    )
}

export {
    Countryprovider
}

export default Countrycontext
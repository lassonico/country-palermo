

function Modal({children}) {
  return (
    <div className="contenedor-modal">
        <div className="modal">
            <h2>Pídela a domicilio</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal
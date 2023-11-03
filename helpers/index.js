
export const formatoMoneda = cantidad => {
    return cantidad?.toLocaleString("es-CO", {
        style: 'currency',
        minimumFractionDigits: 0,
        currency: "COP"
    })
}

export function pedir(producto){
    const telefono = "573027503442";
    const mensaje = `Hola quiero pedir: ${producto}`;
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");

}
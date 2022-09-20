export const getProducts = () => fetch('/productos.json').then(res => res.json());
export function formatNumber(valor) { return valor.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')};
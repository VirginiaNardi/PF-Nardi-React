// const productos = [
//     {id:'1', name:'Oregano',price:210,category:'hiervas', img:'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/4/0/402-oregano---_1.jpg', stock:25, description:'Descripcion oregano'},
//     {id:'2', name:'Pimienta Negra',price:550,category:'especias', img:'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/p/i/pimienta-negra_2.jpg', stock:25, description:'Descripcion Pimienta Negra'},
//     {id:'3', name:'Pimenton Dulce',price:220,category:'especias', img:'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/7/7/7791351134065-pimenton-dulce.jpg', stock:25, description:'Descripcion Pimenton Dulce'},
//     {id:'4', name:'Laurel en Hoja',price:190,category:'hiervas', img:'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/l/a/laurel-en-hojas-1.jpg', stock:25, description:'Descripcion Laurel en Hoja'},
//     {id:'5', name:'Romero',price:310,category:'hiervas', img:'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/r/o/romero-en-hojas-x-100-gr.jpg', stock:25, description:'Descripcion Romero'},

// ]



// export const getProductos = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(productos)
//         }, 500)
//     })
// }

// export const getProductosbyId = (productoId) =>{
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(productos.find(prod => prod.id === productoId))
//         }, 500)
//     })
// }

// export const getProductosbyCategory = (category) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(productos.filter(prod => prod.category === category))
//         }, 500)
//     })
// }
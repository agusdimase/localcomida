import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS:Categoria[] = [
    {nombre:'Hamburguesas',
    id:1,
    fotoUrl:"https://i.pinimg.com/originals/e6/d5/b9/e6d5b99e200510212d8e0f4e8fdb5043.jpg",
    productos:[{
        nombre: 'Big Mac',
        precio: 2900,
        descripcion:'Viene cubierta con pepinillos, crujiente lechuga, cebollas y queso americano para lograr ese sabor único de la hamburguesa 100% de carne.',
        imagen: 'https://www.cronista.com/files/image/123/123939/5ff76851a6003.jpg'
    },
       {nombre: 'Mc Tasty',
       precio: 3300,
       descripcion:'Inigualable pan con semillas de sésamo, tres medallones de carne 100% vacuna, tres fetas de nuestro exclusivo Queso Cheddar, cebolla, lechuga y tomate frescos. Sumado a estos ingredientes la única e inigualable Salsa Tasty',
       imagen: 'https://www.arcosdorados.com/wp-content/uploads/2021/07/Grand-Tasty-1-e1627506211463.jpg'
     }],
    },
    

    {nombre:'Pizzas',
    id:2,
    fotoUrl:"https://www.thecountrycook.net/wp-content/uploads/2022/05/thumbnail-Smoked-Pepperoni-Pizza-200x200.jpg",
    productos:[{
      nombre: 'Pizza con pepperoni',
      precio: 2000,
      descripcion:'Pizza con salsa de tomate, mozzarella y pepperoni',
      imagen: 'https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale'
  },
  {
    nombre: 'Pizza de muzzarella',
    precio: 2000,
    descripcion:'Masa baja y crocante con una cubierta de salsa de tomate, mozzarella, aceitunas y orégano',
    imagen: 'https://acdn.mitiendanube.com/stores/001/133/466/products/copia-de-pizza-mozarella1-f27baa3e01887f9e6416299067526593-640-0.jpg'
}],
    },
    
    {nombre:'Postres',
    id:3,
    fotoUrl:"https://images.hola.com/imagenes/cocina/escuela/200908039659/trucos/postre/reposteria/0-14-982/postre-b.jpg",
    productos:[{
      nombre: 'Brownie',
      precio: 1200,
      descripcion:'Bizcocho de chocolate que contiene nueces, crujiente por arriba y muy tierna en su interior.',
      imagen: 'https://www.recetasparavivirmejor.com/wp-content/uploads/2021/03/recetas_para_vivir_mejor_receta_de_brownie_dulces_2021.jpg'
  },{
    nombre: 'Lemon pie',
    precio: 1200,
    descripcion:'Bocado dulce consiste en una crujiente base de masa quebrada, una cremosa crema de limón y se termina con un merengue italiano',
    imagen: 'https://assets.elgourmet.com/wp-content/uploads/2023/03/copa-_ZWQIqVNlbTxBj6RmzCEOv4etwKLAkn.png'
}],
    },
    
    {nombre:'Bebidas',
    id:4,
    fotoUrl:"https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/recipes_1200_1200_fallback/public/2020-08/drink-recipes.jpg?itok=SdENm0jQ",
    productos:[{
      nombre: 'Fernet con cola',
      precio: 1300,
      descripcion:'Trago más popular de Argentina, que mezcla el sabor amargo de la bebida originalmente medicinal oriunda de Italia, el Fernet, mezclado con el sabor muy dulce y efervescente de la Coca-Cola.',
      imagen: 'https://portonovo.com.ar/wp-content/uploads/2022/01/Menuporto-trago-fernet.jpg'
  },
  {
    nombre: 'Sex on the beach',
    precio: 1300,
    descripcion:'Cóctel con múltiples variaciones. Hay dos tipos en general: El primero se hace a base de vodka, licor de melocotón, zumo de naranja y zumo de arándanos.',
    imagen: 'https://clasicoygourmet.com/wp-content/uploads/2017/02/SexOnTheBeach-678x470.jpg'
}]}
  ]
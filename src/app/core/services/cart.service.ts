import { Injectable } from '@angular/core';
import { ProductoCarrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/producto';

@Injectable({
 providedIn: 'root'
})
export class CartService {

  carrito: ProductoCarrito[] = [];
  totalCarrito: number = 0;

  constructor(){
    const guardado = localStorage.getItem("carrito");
    if(guardado){
      this.carrito = JSON.parse(guardado);
      this.calcularTotal();
    }

  }


  agregarAlCarrito(producto:Producto,cantidad:number){

    const index= this.carrito.findIndex(item => item.producto.nombre === producto.nombre)
    if (index === -1){
      const productoActual:ProductoCarrito = {
        cantidad: cantidad,
        producto: producto
      }
      this.carrito.push(productoActual);
    } else{ 
      this.carrito[index].cantidad = this.carrito[index].cantidad + cantidad;
    }
    

    console.log(this.carrito)
    this.guardarLocalStorage()
    this.calcularTotal()
  }

  eliminarProducto(nombre: string){
    this.carrito = this.carrito.filter(producto => producto.producto.nombre !== nombre);
    this.guardarLocalStorage()
    this.calcularTotal()
  }

  vaciarCarrito(){
    this.carrito = [];
    this.guardarLocalStorage()
    this.calcularTotal()
  }

  cambiarCantidad(){
    this.guardarLocalStorage()
    this.calcularTotal()
  }

  guardarLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(this.carrito))
  }

  calcularTotal(){
    this.totalCarrito = 0;
    this.carrito.forEach(item => {
       this.totalCarrito = this.totalCarrito + item.producto.precio * item.cantidad;
    })
  }
}

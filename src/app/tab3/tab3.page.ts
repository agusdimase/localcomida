import { Component } from '@angular/core';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public cartService: CartService) {}

  crearMensaje():string{
    let parteProductos = '';
    this.cartService.carrito.forEach(productoCarrito =>{
      const mensajeProducto = `- ${productoCarrito.producto.nombre} - ${productoCarrito.cantidad} 
      `;
      parteProductos = parteProductos + mensajeProducto;
    })


    const primeraParte = "https://wa.me/+54156967145?text=";
    const segundaParte = `Hola, quiero hacer un pedido:
    ${parteProductos}
    
    Mis datos:
    -Nombre: NOMBRE
    -Direccion: DIRECCION
    
    Notas:
    `;
    const mensaje = encodeURI(primeraParte+segundaParte);
    return mensaje;
  }

  realizarPedido(){
    window.open(this.crearMensaje(), 'blank');
    this.cartService.vaciarCarrito();
  }

}
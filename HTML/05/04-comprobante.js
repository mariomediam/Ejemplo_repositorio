class Comprobante {
  compId = 0;
  compFecha = new Date();
  compTotal = 0;
  detalles = [];

  constructor(compId, compFecha) {
    this.compId = compId;
    this.compFecha = compFecha;
  }

  agregarDetalle(objDetalle) {
    this.detalles.push(objDetalle);    
  }

  calculaSubTotal(cantidad, pUnit) {
    return cantidad * pUnit;
        
  }
}

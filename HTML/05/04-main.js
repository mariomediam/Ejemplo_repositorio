let factura1 = new Factura(1, new Date(), 18);

console.table(factura1);

let detalle1Fact = new Detalle(1,2,"RAM", 229)
let detalle2Fact = new Detalle(1,1,"SDD", 450)

factura1.agregarDetalle(detalle1Fact);
factura1.agregarDetalle(detalle2Fact);
factura1.recalculo()

console.table(factura1);
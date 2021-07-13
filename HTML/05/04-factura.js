class Factura extends Comprobante{
    factIgvP = 0;
    factIgvT = 0;

    constructor(compId, compFec, factIgvP){
        super(compId, compFec);
        this.factIgvP = factIgvP;
    }

    recalculo(){
        let total = 0;
        for (let detalle of this.detalles){
            total += this.calculaSubTotal(detalle.detCant, detalle.detPUnit);
        }
        this.factIgvT = total * this.factIgvP / 100;
        this.compTotal = total 
    }
}
function buy(){
    let productType = 0;
    let selectedType = null;

    
    while (!selectedType){
        productType = parseInt(prompt(
            `Bienvenido, Seleccione la categoria de producto que esta buscando:\n` +
            `1: camisetas jugador\n` +
            `2: camiseta arquero\n` +
            `3: mate\n` +
            `4: pelotas\n` +
            `5: accesorios\n`
            ));

        selectedType = products.filter(product => product.type === productType)
    };
    
    
    console.log(selectedType);

    let category = selectedType.map(selectedType => selectedType.type);
    //console.log(category[0]);

    switch(category[0]) {
        case 1:
            category = `Camisetas jugador. Elija el producto que desea:\n
                        10: camiseta titular ($25.000)
                        11: camiseta suplente ($22.000)
                        `;
            break;
        case 2:
            category = `camiseta arquero. Elija el producto que desea:\n
                        20: camiseta roja ($25.000)
                        21: camiseta amarilla ($22.000)
                        `;
            break;
        case 3:
            category = `mate. Elija el producto que desea:\n
                        30: mate azul ($15.000)
                        31: mate negro ($14.000)
                        32: mate blanco ($14.000)
                        `;
            break;
        case 4:
            category = `pelotas. Elija el producto que desea:\n
                        40: pelota mundial 2022 ($12.000)
                        41: pelota final 2022 ($12.000)
                        42: pelota liga argentina ($10.000)
                        43: pelota copa america ($10.000)
                        `;
            break;
        case 5:
            category = `accesorios. Elija el producto que desea:\n
                        50: llaveros ($5.000)
                        51: cuadro ($8.000)
                        `;
            break;
            default:
                alert('Indique un numero valido porfavor.')
            break;
    }

    let productId = parseInt(prompt(`
    Usted ha elegido la categoria de: ${category}`));

    //console.log(productId);

    let selectedProduct = products.find(product => product.id === productId)

    let productAmount = 0;
    while(productAmount === 0 || !productAmount){
        productAmount = parseInt(prompt(`Usted ha elegido: ${selectedProduct.name}\n Su valor es de: $${selectedProduct.price} por unidad\n Disponemos de un stock de: ${selectedProduct.stock} unidades\n Indique la cantidad requerida:`))
    }

    const order = new Order(selectedProduct.name, selectedProduct.price, productAmount);
    console.log(selectedProduct.price);
    return order
};

const order = buy();
order.priceTotal();

alert(`
Gracias por su compra. Factura detallada: \n
- ${order.product} x ${order.amount}:     $${order.total} (Iva incluido).\n
- Pagando en efectivo usted tiene un 15% de Dto y el total seria de $${order.getDiscount()}
`);

confirm('Desea realizar otra compra?');

if(!confirm){
    alert('Muchas gracias, hasta pronto!')
} else{
    buy()
}
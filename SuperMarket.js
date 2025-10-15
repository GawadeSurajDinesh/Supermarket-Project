/*function display() {
    let products = ['OIL 150inr.', 'Chocolates 80inr.', 'Coconut 45inr.', 'Buiscuits 90inr.', 'ice cream 60inr.', 'Rice 70inr.'];
    // document.getElementById('product').textContent = 'Products : ' + products.join(", ");
    document.write(products.join('<br> '));
 }*/

    let products = [

        ['Product', 'Price', 'Quantity'],
        ['Oil', '180', '900ml'],
        ['Chocolate', '80', '125gm'],
        ['Coconut', '45', '1piece'],
        ['Buiscuits', '90', '890gm'],
        ['Ice Cream', '60', '50gm'],
        ['Rice', '70', '1kg']
        
    ];
function displayProducts() { 


    const table = document.createElement("table");
    table.border = "1";
    table.cellSpacing = "0";

    products.forEach((rowData, index) => {
        const row = document.createElement("tr");

        rowData.forEach(celldata => {
            const cell = index === 0 ? document.createElement("th") : document.createElement("td");
            cell.textContent = celldata;
            row.appendChild(cell);
        });
        table.appendChild(row);
    })
    document.getElementById("product").appendChild(table);
}

let qytoil, qytchoco, qytcoco, qytbuis, qyticecream, qytrice;
function additems() {

    qytoil = Number(document.getElementById('1').value);

    qytchoco = Number(document.getElementById('2').value);

    qytcoco = Number(document.getElementById('3').value);

    qytbuis = Number(document.getElementById('4').value);

    qyticecream = Number(document.getElementById('5').value);

    qytrice = Number(document.getElementById('6').value);
    
    let oilprice = Number(products[1][1]);
    let chocolateprice = Number(products[2][1]);
    let coconutprice = Number(products[3][1]);
    let buiscuitsprice =Number(products[4][1]);
    let icecreamprice = Number(products[5][1]);
    let riceprice = Number(products[6][1]);

    let totaloilprice = qytoil * oilprice;
    let totalchocolateprice = qytchoco * chocolateprice;
    let totalcoconutprice = qytcoco * coconutprice;
    let totalbuiscuitprice = qytbuis * buiscuitsprice;
    let totalicecreamprice = qyticecream * icecreamprice;
    let totalriceprice = qytrice * riceprice;

    let totalcost = totaloilprice + totalchocolateprice + totalcoconutprice + totalbuiscuitprice + totalicecreamprice + totalriceprice;
    
    document.getElementById('result').value = totalcost;
}

function showitems() {
    
let cartitems = [

        ['Product', 'Quantity'],
        ['Oil', qytoil],
        ['Chocolate', qytchoco],
        ['Coconut', qytcoco],
        ['Buiscuits', qytbuis],
        ['Ice Cream', qyticecream],
        ['Rice', qytrice]
        
    ];

    const table = document.createElement("table");
    table.border = "1";
    table.cellSpacing = "0";

    cartitems.forEach((rowData, index) => {
        const row = document.createElement("tr");

        rowData.forEach(celldata => {
            const cell = index === 0 ? document.createElement("th") : document.createElement("td");
            cell.textContent = celldata;
            row.appendChild(cell);
        });
        table.appendChild(row);
    })
    document.getElementById("cart").appendChild(table);
}
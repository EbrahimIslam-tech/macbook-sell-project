// Set Product Price by button
function setProductPrice(product, cost) {
    const productCost = document.getElementById(product + '-price');
    productCost.innerText = cost;
    getTotalPrice()
}
// set Total cost by function
function getTotalPrice() {
    const extraMemoryPrice = parseFloat(document.getElementById('memory-price').innerText);
    const extraStoragePrice = parseFloat(document.getElementById('storage-price').innerText);
    const extraDeliveryCharge = parseFloat(document.getElementById('delivery-price').innerText);
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const Total = extraMemoryPrice + extraStoragePrice + extraDeliveryCharge + bestPrice;
    document.getElementById('total-balance').innerText = Total;
    document.getElementById('totalcost').innerText = Total;
}

// memory 8gb event handeler
document.getElementById('btn-memory-8gb').addEventListener('click', function () {

    const memory8gbCost = setProductPrice('memory', 0);



})
// memory 16gb event handeler
document.getElementById('btn-memory-16gb').addEventListener('click', function () {
    setProductPrice('memory', 180);

    const memory16gbCost = setProductPrice('memory', 180);

})
// Storage 256gb event handeler
document.getElementById('btn-storage-256gb').addEventListener('click', function () {

    const storage256gbCost = setProductPrice('storage', 0);

})
// Storage 512gb event handeler
document.getElementById('btn-storage-512gb').addEventListener('click', function () {

    const storage512gbCost = setProductPrice('storage', 100);

})
// Storage 1TB event handeler
document.getElementById('btn-storage-1tb').addEventListener('click', function () {

    const storage1tbCost = setProductPrice('storage', 180);

})

//  free delivery event handeler
document.getElementById('btn-free-delivery').addEventListener('click', function () {

    const deliveryfreeCost = setProductPrice('delivery', 0);

})
//  costly delivery event handeler
document.getElementById('btn-delivery-cost').addEventListener('click', function () {

    const deliveryCostly = setProductPrice('delivery', 20);

})


// ---------------bonus part------------------//
document.getElementById('pomo-btn').
    addEventListener('click', function () {
        // get pomofiled
        const pomofiled = document.getElementById('pomo-filed');
        const userpomo = pomofiled.value;
        // get totalcost
        const totalcost = document.getElementById('totalcost')
        // get total balance cost
        const totalbalancecost = document.getElementById('total-balance');
        let totalbalancecosting = parseFloat(totalbalancecost.innerText);

        // handeling pomocode
        if (userpomo == 'stevekaku') {
            // give discount
            const totalcostdiscount = totalbalancecosting * 0.2;
            totalcost.innerText = totalbalancecosting - totalcostdiscount;
        }
        else {
            alert('invalid pomocode')
        }
        // clear pomocode field
        pomofiled.value = "";

    })
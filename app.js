//kitkat
// function handleKitkat(){
//     const kitKatQuantity = document.getElementById('kitkat-quantity')
//     const kitKatQuantityString = kitKatQuantity.value;
//     const kitkatAmount  = parseFloat(kitKatQuantityString);

// }

function elementField(id) {
    const elementQuantity = document.getElementById(id);
    const elementQuantityString = elementQuantity.value;
    const elementAmount = parseFloat(elementQuantityString);
    elementQuantity.value = '';
    return elementAmount;

}

function getElementField(id) {
    const elementQuantity = document.getElementById(id);
    const elementQuantityString = elementQuantity.innerText;
    const elementAmount = parseFloat(elementQuantityString);
    return elementAmount;


}
function getElementFieldTotal(id, getElementAmount, elementPrice) {
    const elementQuantity = document.getElementById(id);
    const totalCalculation = getElementAmount + elementPrice;
    elementQuantity.innerText = totalCalculation;
    //
    let allCost = getElementField('all-total');
    allCost = 0; 
    const allCostTotal = allCost + totalCalculation;
    document.getElementById('all-total').innerText = allCostTotal;

}



document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
    const inputFieldValue = elementField('kitkat-quantity');
    const elementPrice = inputFieldValue * 70;

    const getElementAmount = getElementField('chocolate');
    getElementFieldTotal('chocolate', getElementAmount, elementPrice);

    const getTotalAmount = getElementField('total');
    getElementFieldTotal('total', getTotalAmount, elementPrice);

})
document.getElementById('rose-buy-btn').addEventListener('click', function () {
    const inputFieldValue = elementField('rose-quantity');
    const elementPrice = inputFieldValue * 40;

    const getElementAmount = getElementField('rose');
    getElementFieldTotal('rose', getElementAmount, elementPrice);

    const getTotalAmount = getElementField('total');
    getElementFieldTotal('total', getTotalAmount, elementPrice);

})

document.getElementById('diary-buy-btn').addEventListener('click', function () {
    const inputFieldValue = elementField('diary-quantity');
    const elementPrice = inputFieldValue * 100;

    const getElementAmount = getElementField('diary');
    getElementFieldTotal('diary', getElementAmount, elementPrice);

    const getTotalAmount = getElementField('total');
    getElementFieldTotal('total', getTotalAmount, elementPrice);

})



document.getElementById('handle-promo-code').addEventListener('click', function () {
    const getTotalAmount = getElementField('total');
    const promoCode = document.getElementById('promo-code');
    const promoCodeString = (promoCode.value);
    //const upperPromoCode = promoCodeString.toUpperCase();
    promoCode.value = '';


    if (promoCodeString == 'CR7') {

        const getTotalAmountAfterDiscount = (getTotalAmount - (getTotalAmount * 10 / 100));
        let allCost = getElementField('all-total');
        allCost = 0;
        const allCostTotal = allCost + getTotalAmountAfterDiscount;
        document.getElementById('all-total').innerText = allCostTotal;

    }

    else {
        alert('Wrong Promo Code');
    }


})
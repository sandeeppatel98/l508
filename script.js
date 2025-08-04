function calculateDeal() {
    const dealQuantity = parseFloat(document.getElementById('dealQuantity').value);
    const freeQuantity = parseFloat(document.getElementById('freeQuantity').value);
    const totalQuantity = parseFloat(document.getElementById('totalQuantity').value);

    if (dealQuantity && freeQuantity && totalQuantity) {
        const paidQuantity = (totalQuantity / (dealQuantity + freeQuantity)) * dealQuantity;
        const freeQuantityCalculated = totalQuantity - paidQuantity;
        document.getElementById('result').innerText = `Deal: ${totalQuantity.toFixed(2)} = ${paidQuantity.toFixed(2)} + ${freeQuantityCalculated.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter all quantities.';
    }
}

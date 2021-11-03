var rmItemCart = document.getElementsByClassName('btn-delete')
console.log(rmItemCart);
for (let i=0; i < rmItemCart.length; i++) {
    var myBtn = rmItemCart[i]
    myBtn.addEventListener('click', function(event) {
        var btnClicked = event.target
        btnClicked.parentElement.parentElement.parentElement.remove()   
        updateCardTotal()
    })
}
function updateCardTotal() {
    var cardCont = document.getElementsByClassName('cardContainer')[0]
    var card = cardCont.getElementsByClassName('smallCard')
    for (let i=0; i < card.length; i++) {
        var card = card[i]
        var itemPrice = card.getElementsByClassName('price')[0]
        var itemQtt = card.getElementsByClassName('qtt')[0]
        var price = itemPrice.innerText
        console.log(price)
    }
}
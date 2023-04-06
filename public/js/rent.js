/* eslint-disable prettier/prettier */
document.addEventListener('DOMContentLoaded', () => {
    var dropdown = document.getElementsByClassName('dropdown')
    var i

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener('click', function () {
            this.classList.toggle('active')
        })
    }

    // for price
    var priceSlider = document.getElementById('price-slider')
    var priceValue = document.getElementById('price-value')

    priceValue.innerHTML = priceSlider.value

    priceSlider.addEventListener('input', function () {
        priceValue.innerHTML = this.value
    })

    //for bedrooms
    var bedroomSlider = document.getElementById('bedroom-slider')
    var bedroomValue = document.getElementById('bedroom-value')

    bedroomValue.innerHTML = bedroomSlider.value

    bedroomSlider.addEventListener('input', function () {
        bedroomValue.innerHTML = this.value
    })
})

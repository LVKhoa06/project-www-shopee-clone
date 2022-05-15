const CONST_IMG_SAMPLE = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg';

async function fetchSampleProducts() {
    await fetch("assets/script/product-list-sample.json")
        .then(response => response.json())
        .then(data => {
            populateProductList(data);
        });
} // fetchSampleProducts

function populateProductList(products) {
    const productListContainer = document.querySelector('.big-content__product-list');
    const locations = ['Huế', 'Hà Nội', 'Tp. Hồ Chí Minh', 'Phú Yên'];
    const locationsCount = locations.length;

    products.forEach(item => {
        const { title, favorite, discount, priceFrom, priceTo, freeShip, sold, rating, location, img } = item;
        
        // Product element
        const product = document.createElement('div');
        product.classList.add('product-list__product');
        product.setAttribute('favorite', favorite);
        product.setAttribute('discount', discount > 0 ? '1' : '0');
        product.setAttribute('freeShip', freeShip);

        // Favorite
        const favoriteDiv = document.createElement('div');
        favoriteDiv.classList.add('product-list__product__favorite');
        favoriteDiv.innerText = 'Yêu thích';
        product.appendChild(favoriteDiv);

        // Discount
        const discountDiv = document.createElement('div');
        discountDiv.classList.add('product-list__product__discount');
        discountDiv.innerHTML = `<p>${discount}%</p><span>GIẢM</span>`;
        product.appendChild(discountDiv);

        // Image
        const image = document.createElement('img');
        image.src = CONST_IMG_SAMPLE;
        product.appendChild(image);

        // Below-image div
        const belowImageDiv = document.createElement('div');
        belowImageDiv.classList.add('product-list__product__below-img');
        let priceRandom1 = getRandomIntegerFromTo(5, 200) * 1000;
        let priceRandom2 = getRandomIntegerFromTo(10, 500) * 1000;
        const priceFromRandom = Math.min(priceRandom1, priceRandom2);
        const priceToRandom = Math.max(priceRandom1, priceRandom2);

        belowImageDiv.innerHTML = `
        <p role="product-list__product__name" class="lorem 50">${title}</p>
        <div>
            <p class="product-list__product__price">₫${formatNumberWithThousandSeparator(priceFromRandom)} - ₫${formatNumberWithThousandSeparator(priceToRandom)}</p>
            <p class="product-list__product__freeship">🚛</p>
        </div>
        <div>
            <p title="Thích" class="product-list__product__like">♡</p>
            <p class="product-list__product__sold" rating="${getRandomIntegerFromTo(1, 5)}">Đã bán ${sold}</p>
        </div>
        <p class=" product-list__product__location">${locations[getRandomIntegerFromTo(0, locationsCount - 1)]}</p>
        `;
        product.appendChild(belowImageDiv);

        productListContainer.appendChild(product);
    }); // forEach 
} // populateProductList

fetchSampleProducts();


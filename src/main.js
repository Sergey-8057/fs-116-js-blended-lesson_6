import {
  getAllProducts,
  getproductByID,
  addProduct,
} from './requests/products';
import {
  markupAllProducts,
  markupProduct,
  markupNewProduct,
} from './services/markupService';

const allProducts = document.querySelector('#allProducts');
const singleProductForm = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');
const newProductForm = document.querySelector('#newProductForm');
const newProductSection = document.querySelector('#newProductSection');

// getAllProducts().then(console.log); ???

// Task - 1

getAllProducts().then(({ data: { products } }) => {
  // console.log(products);
  // const marcupCards = markupAllProducts(products)
  // allProducts.insertAdjacentHTML('beforeend', marcupCards)
});

// Task - 2

singleProductForm.addEventListener('submit', findproductByID);

function findproductByID(event) {
  event.preventDefault();
  const id = event.target.elements.id.value;
  // getproductByID(id).then(console.log);
  getproductByID(id).then(({ data }) => {
    // console.log(data);
    const markupSingleCard = markupProduct(data);
    singleProduct.innerHTML = markupSingleCard;
    singleProductForm.reset();
  });
}

// Task - 3

newProductForm.addEventListener('submit', addNewProduct);

function addNewProduct(event) {
  // event.preventDefault(); ???
  const title = event.target.elements.title.value;
  const description = event.target.elements.description.value;
  const price = event.target.elements.price.value;

  const newProduct = { title, description, price };

  addNewProduct(newProduct).then(({ data }) => {
    const markupNewCard = markupNewProduct(data);
    singleProduct.innerHTML = markupNewCard;
    singleProductForm.reset();
  });
}

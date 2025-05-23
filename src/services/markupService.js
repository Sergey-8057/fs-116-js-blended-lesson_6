// Task - 1

export const markupAllProducts = products => {
  return products
    .map(({ brand, id, description, images, price, title }) => {
      return `<li data-id="${id}">
      <img src="${images[0]}" alt="${title}" width='200'/>
      <h3>Brand: "${brand}"</h3>
      <h4>Model: "${title}"</h4>
      <p>Price: "${price}"</p>
      <p>Description: "${description}"</p>
    </li>`;
    })
    .join('');
};

// Task - 2

export const markupProduct = ({
  brand,
  id,
  description,
  images,
  price,
  title,
}) => {
  return `<li data-id="${id}">
      <img src="${images[0]}" alt="${title}" width='300'/>
      <h3>Brand: "${brand}"</h3>
      <h4>Model: "${title}"</h4>
      <p>Price: "${price}"</p>
      <p>Description: "${description}"</p>
    </li>`;
};

// Task - 3

export const markupNewProduct = ({
  id,
  description,
  price,
  title,
}) => {
  return `<li data-id="${id}">
      <h4>Model: "${title}"</h4>
      <p>Price: "${price}"</p>
      <p>Description: "${description}"</p>
    </li>`;
};
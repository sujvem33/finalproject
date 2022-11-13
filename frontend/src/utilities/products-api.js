const BASE_URL = "/api/products";

export async function allProducts() {
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid");
  }
}

export async function eachProduct(category) {
  const res = await fetch(`${BASE_URL}/${category}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid");
  }
}

export async function searchProduct(searchTerm) {
  const res = await fetch(`${BASE_URL}/search/${searchTerm}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid");
  }
}

export async function createOneProduct(productData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  if (res.ok) {
    return res;
  } else {
    throw new Error("Invalid Post request");
  }
}


export async function getOneProduct(category, id) {
  const res = await fetch(`${BASE_URL}/${category}/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid");
  }
}



export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    
  });

  if (res.ok) {
    return res;
  } else {
    throw new Error("Invalid delete");
  }
}
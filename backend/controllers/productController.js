const Product = require("./../models/products");

const data = require("./../data/productData");
exports.seedProducts = async (request, response) => {
  try {
    await Product.remove({});
    const newProduct = await Product.insertMany(data.attireData);
    response.status(201).json({
      status: "success",
      data: { newProduct },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.getAllProducts = async (request, response) => {
  try {
    const allProducts = await Product.find();
    response.status(200).json({
      status: "success",
      data: { allProducts },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
};

exports.getProducts = async (request, response) => {
  try {
    let producttype = request.params.category;
    console.log(producttype);
    const allProducts = await Product.find({ category: producttype });
    response.status(200).json({
      status: "success",
      data: { allProducts },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
};

exports.searchProducts = async (request, response) => {
  try {
    let searchTerm = request.params.searchTerm;
    const searchProducts = await Product.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    });
    response.status(200).json({
      status: "success",
      data: { searchProducts },
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      error: error,
    });
  }
};


exports.deleteProduct = async (request, response) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(request.params.id);

    response.status(201).json({
      status: "success",
      data: {deletedProduct},
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.createOneProduct = async (request, response) => {
  try {
    const newProduct = await Product.create({
      name: request.body.name,
      image: request.body.image,
      category: request.body.category,
      description: request.body.description,
      price: request.body.price,
    });

    response.status(201).json({
      status: "success",
      data: {
        newProduct,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};


exports.getOneProduct = async (request, response) => {
  try {
    const OneProduct = await Product.find({ _id: request.params.id });

    if (!OneProduct) {
      throw new Error("Product Not Found");
    }
    response.status(200).json({
      status: "success",
      data: {
        OneProduct
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};


exports.updateProduct = async (request, response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      request.params.id,
      request.body
    );

    response.status(201).json({
      status: "success",
      data: {updatedProduct},
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};
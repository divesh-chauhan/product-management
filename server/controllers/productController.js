const Product = require('../models/productModel');

// @des add product
// @route POST /api/product/add

const addProduct = async (req, res) => {
    try {
        const product = await new Product(req.body);
        await product.save();
        res.status(201).json({msg:'product added successfull.y'})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:'failed to add new product ⚠'});
    }
};

// @des get all products
// @route GET /api/product

const getProducts = async (req, res) => {
    try {
       const products = await Product.find();
       res.status(200).json({products:products});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:'faild to get all products ⚠'});
    }
};

// @des update product
// @route PUT /api/product/update

const updateProduct = async (req, res) => {
    try {
       const id = req.params.id;
       const updatedData = req.body;

       const updatedProduct = await Product.findByIdAndUpdate(id,{ $set:{...updatedData} },{ new:true, runValidators:true });

       if (! updatedProduct) {
          res.status(404).json({msg:'product not updated ⚠'});
       }
       res.status(200).json({msg:'product updated successfullt', product:updatedProduct});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:'failed to update ⚠'});
    }
};


// @des delete product
// @route DELETE /api/product/delete

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await Product.findByIdAndDelete(id);
        res.status(200).json({msg:'product deleted successfully.'});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:'failed to delete ⚠'});
    }
};


module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
}
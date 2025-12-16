import * as ProductService from "../services/productsService.js"

export const createProduct = async(req, res) => {
 try {
  const product = await ProductService.createProduct(req.body);
  res.status(201).json(product);

 }catch(err) {
     res.status(500).json({ error: "error creating the product" });

 }
}

export const getAllProducts = async(req, res) => {
 try{
  const products = await ProductService.getAllProducts();
  res.status(201).json(product);

 }catch(err) {
  res.status(500).json({ error: "Could not fetch products" });
 }
}

export const getProductById = async(req, res) => {
 try {
  const id = Number(req.params.id);
  const product = await ProductService.getProductById(id)
  res.json(product);
 }catch(err) {
  res.status(404).json({ error: "Not found" });
 }
}

export const updateProduct = async(req, res) => {
 try {
  const id = Number(req,params.id);
  const product = await ProductService.updateProduct(id);
  res.json(product);
 }catch(err) {
  res.status(404).json({ error: "error updating the product" });
   
 }
}
export const deleteProduct = async(req, res) => {
 const id = Number(req.params.id);
 await ProductService.deleteProduct(id);
 res.status(204).send();

}
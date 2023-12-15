package com.app.service;

import java.util.List;

import com.app.entities.Product;

public interface ProductService {
	
	public Product saveProduct(Product newProduct);
	
	public List<Product> getAllProducts();
	
	public Product getProductById(Integer id);
	
	public String deleteProductById(Integer id);

}

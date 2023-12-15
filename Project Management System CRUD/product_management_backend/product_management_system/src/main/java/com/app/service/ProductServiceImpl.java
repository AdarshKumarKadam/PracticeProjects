package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excep.ResourceNotFoundException;
import com.app.entities.Product;
import com.app.repository.ProductRepository;

import jakarta.transaction.Transactional;

@Service 
@Transactional

public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepo;
	
	@Override
	public Product saveProduct(Product newProduct) {
		return productRepo.save(newProduct);
	}

	@Override
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}

	@Override
	public Product getProductById(Integer id) {
		return productRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
	}

	@Override
	public String deleteProductById(Integer id) {
		Product prod =  productRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
		if(prod!=null) {
			productRepo.delete(prod);
			return "Product no. "+prod.getId()+"deleted Successfully!!!";
		}
		
		return "Product not deleted!!!!";
	}

}

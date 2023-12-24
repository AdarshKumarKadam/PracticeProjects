package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Product;
import com.app.service.ProductService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/products")
public class ProductController {

	
	@Autowired
	private ProductService prodServ;
	
	@PostMapping("/saveProduct")
	public ResponseEntity<Product> saveProduct(@RequestBody  Product newProduct){
		return new ResponseEntity<Product>(prodServ.saveProduct(newProduct), HttpStatus.CREATED);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<Product>> getAllProducts(){
		return new ResponseEntity<List<Product>>(prodServ.getAllProducts(), HttpStatus.OK);
	}
	
	
	@GetMapping("/{productId}")
	public ResponseEntity<Product> getProductById(@PathVariable Integer productId){
		return new ResponseEntity<Product>(prodServ.getProductById(productId),HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/deleteProduct/{productId}", produces = { "application/json", "application/*+json" })
	public ResponseEntity<Void> deleteProductById(@PathVariable Integer productId) {
	    prodServ.deleteProductById(productId);
	    return ResponseEntity.ok().build();
	}

	
	@PatchMapping("/editProduct")
	public ResponseEntity<Product> editProduct(@RequestBody  Product newProduct){
		return new ResponseEntity<Product>(prodServ.saveProduct(newProduct), HttpStatus.CREATED);
	}
	
}

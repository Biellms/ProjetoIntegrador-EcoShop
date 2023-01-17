package com.ecoshop.controller;

import java.math.BigDecimal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecoshop.model.Produto;
import com.ecoshop.repository.ProdutoRepository;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@GetMapping
	public ResponseEntity<List<Produto>> getAll(){
		return ResponseEntity.ok(produtoRepository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Produto> getById(@PathVariable long id){
		return produtoRepository.findById(id)
			.map(resposta -> ResponseEntity.ok(resposta))
			.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/produto/{produto}")
	public ResponseEntity<List<Produto>> getByProduto(@PathVariable String produto){
		List<Produto> resp = produtoRepository.findAllByNomeProdutoContainingIgnoreCase(produto);
		
		if (resp.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(resp);
        }
	}
	
	@GetMapping("/categoria/{id}")
    public ResponseEntity<List<Produto>> getByProdutoPorCategoria(@PathVariable Long id){
	    List<Produto> resp = produtoRepository.buscarProdutoPorCategoria(id);
	    
        if (resp.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(resp);
        }
    }
	
	@GetMapping("/preco_inicial/{inicio}/preco_final/{fim}")
	public ResponseEntity<List<Produto>> getByPrecoEntre(@PathVariable BigDecimal inicio, @PathVariable BigDecimal fim){
	    List<Produto> resp = produtoRepository.buscarProdutoEntre(inicio, fim);
		
		if (resp.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(resp);
        }
	}
	
	@GetMapping("/preco_maior/{preco}")
	public ResponseEntity<List<Produto>> getByPrecoMaior(@PathVariable BigDecimal preco ){
	    List<Produto> resp = produtoRepository.findByPrecoGreaterThanOrderByPreco(preco);
	    
	    if (resp.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(resp);
        }
	}
	
	@GetMapping("/preco_menor/{preco}")
	public ResponseEntity<List<Produto>> getByPrecoMenor(@PathVariable BigDecimal preco){
	    List<Produto> resp = produtoRepository.findByPrecoLessThanOrderByPrecoDesc(preco);
	    
	    if (resp.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(resp);
        }	
	}
	
	@PostMapping 
	public ResponseEntity<Produto> postProduto(@Valid @RequestBody Produto produto){ 
		return ResponseEntity.status(HttpStatus.CREATED).body(produtoRepository.save(produto));
	}
	
	@PutMapping
	public ResponseEntity<Produto> putProduto(@Valid @RequestBody Produto produto) {
		return produtoRepository.findById(produto.getId())
				.map(resposta -> {
					return ResponseEntity.ok().body(produtoRepository.save(produto));
				})
				.orElse(ResponseEntity.notFound().build());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteProduto(@PathVariable long id) {
		
		return produtoRepository.findById(id)
				.map(resposta -> {
					produtoRepository.deleteById(id);
					return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
				})
				.orElse(ResponseEntity.notFound().build());
	}
}

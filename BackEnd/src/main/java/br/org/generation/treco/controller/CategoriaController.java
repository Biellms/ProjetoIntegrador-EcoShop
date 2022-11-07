package br.org.generation.treco.controller;

import java.util.List;

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

import br.org.generation.treco.model.Categoria;
import br.org.generation.treco.repository.CategoriaRepository;

@RestController
@RequestMapping("/categorias") // Tudo que vier com o endereço /postagens, ela vai executar
@CrossOrigin(origins = "*", allowedHeaders = "*") //Relação com frontend - Liberar requisições de qualquer origem, ou origem específica
public class CategoriaController {
	
	@Autowired //Injeção de dependência - Transferindo a responsabilidade de criar a postagem para o Spring
	private CategoriaRepository categoriaRepository;
	
	@GetMapping
	public ResponseEntity<List<Categoria>> getAll(){ //Classe responsável por retornar as requisições, se deram certo ou errado emite o erro.
		return ResponseEntity.ok(categoriaRepository.findAll());
		// select * from tb_postagens;
	}
	
	@GetMapping("/{id}") // dentro das chaves, indica que é um parâmetro
	public ResponseEntity<Categoria> getById(@PathVariable long id){ // Pega o valor indicado no parametro, e coloca dentro do método long id
		return categoriaRepository.findById(id)
				.map(resposta -> ResponseEntity.ok(resposta)) // cria o objeto resposta que vai receber o findById, se achar devolve a resposta
				.orElse(ResponseEntity.notFound().build()); // Se não encontrar, informa que não achou	
	}
	
	@GetMapping("/categoria/{categoria}") // indica que é categoria, e depois o parâmetro
	public ResponseEntity<List<Categoria>> getByCategoria(@PathVariable String categoria){ 
		return ResponseEntity.ok(categoriaRepository.findAllByNomeCategoriaContainingIgnoreCase(categoria));	
	}
	
	@PostMapping
	public ResponseEntity<Categoria> postCategoria(@RequestBody Categoria categoria){ 
		//pega o conteúdo do corpo da requisição e transforma em objeto do tipo categoria
		return ResponseEntity.status(HttpStatus.CREATED).body(categoriaRepository.save(categoria));
	}
	
	@PutMapping
	public ResponseEntity<Categoria> putCategoria(@RequestBody Categoria categoria){ 
		return categoriaRepository.findById(categoria.getId())
				.map(resposta -> ResponseEntity.status(HttpStatus.OK).body(categoriaRepository.save(categoria)))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletaCategoria(@PathVariable long id) {
		return categoriaRepository.findById(id)
				.map(resposta -> {
					categoriaRepository.deleteById(id);
					return ResponseEntity.ok().build();
				})
				.orElse(ResponseEntity.notFound().build());

	}
		
}

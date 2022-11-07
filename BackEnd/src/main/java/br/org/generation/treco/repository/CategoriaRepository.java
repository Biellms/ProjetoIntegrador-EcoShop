package br.org.generation.treco.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.treco.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
	
	// SELECT * FROM tb_postagens WHERE nomeCategoria LIKE "%?%";
	public List <Categoria> findAllByNomeCategoriaContainingIgnoreCase(String categoria);
	
}

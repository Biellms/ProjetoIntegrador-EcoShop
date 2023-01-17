package com.ecoshop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecoshop.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
	
	// SELECT * FROM tb_categorias WHERE nomeCategoria LIKE "%?%";
	public List <Categoria> findAllByNomeCategoriaContainingIgnoreCase(String categoria);
	
}

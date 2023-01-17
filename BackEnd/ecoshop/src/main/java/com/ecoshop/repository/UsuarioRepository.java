package com.ecoshop.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecoshop.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	// SELECT * FROM tb_usuarios WHERE usuario LIKE '%?%';
	public Optional<Usuario> findByUsuario(String usuario);
	
	public List<Usuario> findAllByNomeContainingIgnoreCase(String nome);
}


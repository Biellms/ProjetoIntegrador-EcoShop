package com.ecoshop.model;

import java.util.*;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.beans.factory.annotation.Value;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_categorias")
public class Categoria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank
	@Size(max = 255)
	private String nomeCategoria;
	
	@NotBlank
	@Size(max = 255)
	private String descricao;

	@Value("true")
	private Boolean ativo;

	// Uma categoria para muitos produtos
	@OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL) // cascade = Qualquer alteração propaga para todas os relacionamentos.
	@JsonIgnoreProperties("categoria") // Evita o efeito cascata no banco de dados
	private List<Produto> produto;
	
	// Getters and Setters
	public long getId() { return id; }

	public void setId(long id) { this.id = id; }

	public String getNomeCategoria() { return nomeCategoria; }

	public void setNomeCategoria(String nomeCategoria) { this.nomeCategoria = nomeCategoria; }

	public String getDescricao() { return descricao; }

	public void setDescricao(String descricao) { this.descricao = descricao; }

	public Boolean getAtivo() { return ativo; } 

	public void setAtivo(Boolean ativo) { this.ativo = ativo; }

	public List<Produto> getProduto() { return produto; }

	public void setProduto(List<Produto> produto) { this.produto = produto; }

}

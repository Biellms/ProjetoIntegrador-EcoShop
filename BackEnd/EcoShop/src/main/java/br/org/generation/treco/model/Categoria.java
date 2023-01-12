package br.org.generation.treco.model;

import java.util.*;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.beans.factory.annotation.Value;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "tb_categoria") // Dizer o nome da tabela
public class Categoria {

	// Atributos
	@Id // Chave Primaria
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto incremento
	private long id;
	
	@NotNull(message = "O atributo Nome da Categoria é obrigatório!")
	@Size(max = 255, message = "O Nome da Categoria deve conter no mínimo 5 caracteres e no máximo 100!")
	private String nomeCategoria;
	
	@NotNull(message = "O atributo descrição é obrigatório!")
	@Size(min = 5, max = 1000, message = "O descrição deve conter no mínimo 10 caracteres e no máximo 1000!")
	private String descricao;
	
	// @Column(columnDefinition = boolean default 'true')
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

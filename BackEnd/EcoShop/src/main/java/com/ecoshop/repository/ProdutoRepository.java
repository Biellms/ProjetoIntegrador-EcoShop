package com.ecoshop.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecoshop.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{
	
	//SELECT * FROM tb_produto WHERE nomeProduto LIKE "%?%";
	public List <Produto> findAllByNomeProdutoContainingIgnoreCase(String produto);
	
	//SELECT * FROM tb_produto WHERE preco > ?;
	public List <Produto> findByPrecoGreaterThanOrderByPreco(BigDecimal preco);
	
	//SELECT * FROM tb_produto WHERE preco < ?;
	public List <Produto> findByPrecoLessThanOrderByPrecoDesc(BigDecimal preco);
	
	@Query(value = "select * from tb_produtos where preco between :inicio and :fim", nativeQuery = true)
	public List <Produto> buscarProdutoEntre(@Param("inicio") BigDecimal inicio, @Param("fim") BigDecimal fim);

	@Query(value = "SELECT * FROM tb_produtos WHERE categoria_id = :id", nativeQuery = true)
    public List <Produto> buscarProdutoPorCategoria(@Param("id") Long id);

}

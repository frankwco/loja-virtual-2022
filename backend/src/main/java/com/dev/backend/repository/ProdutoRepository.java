package com.dev.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.backend.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{
    
}

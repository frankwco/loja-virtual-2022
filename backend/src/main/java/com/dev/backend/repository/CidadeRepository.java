package com.dev.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.backend.entity.Cidade;

public interface CidadeRepository extends JpaRepository<Cidade, Long>{
    
}

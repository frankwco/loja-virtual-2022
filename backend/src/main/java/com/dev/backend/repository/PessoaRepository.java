package com.dev.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.backend.entity.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long>{
    
}

package com.dev.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.backend.entity.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
    
}

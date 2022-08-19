package com.dev.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.backend.entity.Permissao;

public interface PermissaoRepository extends JpaRepository<Permissao, Long>{
    
}

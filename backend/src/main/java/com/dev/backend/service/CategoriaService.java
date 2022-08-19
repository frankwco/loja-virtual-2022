package com.dev.backend.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.backend.entity.Categoria;
import com.dev.backend.repository.CategoriaRepository;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Categoria> buscarTodos() {
        return categoriaRepository.findAll();
    }

    public Categoria inserir(Categoria objeto) {
        objeto.setDataCriacao(new Date());
        Categoria objetoNovo = categoriaRepository.saveAndFlush(objeto);
        return objetoNovo;
    }

    public Categoria alterar(Categoria objeto) {
        objeto.setDataAtualizacao(new Date());
        return categoriaRepository.saveAndFlush(objeto);
    }

    public void excluir(Long id) {
        Categoria objeto = categoriaRepository.findById(id).get();
        categoriaRepository.delete(objeto);
    }
}

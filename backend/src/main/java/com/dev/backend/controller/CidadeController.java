package com.dev.backend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.backend.entity.Cidade;
import com.dev.backend.service.CidadeService;

@RestController
@RequestMapping("/api/cidade")
public class CidadeController {
    
    @Autowired
    private CidadeService cidadeService;

    @GetMapping("/")
    public List<Cidade> buscarTodos(){
       return cidadeService.buscarTodos();
    }

    @PostMapping("/")
    public Cidade inserir(@RequestBody Cidade objeto){
        return cidadeService.inserir(objeto);
    }

    @PutMapping("/")
    public Cidade alterar(@RequestBody Cidade objeto){
        return cidadeService.alterar(objeto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        cidadeService.excluir(id);
        return ResponseEntity.ok().build();
    }

}
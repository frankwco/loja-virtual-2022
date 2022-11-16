package com.dev.backend.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.dev.backend.service.PessoaDetailService;

public class AuthFilterToken extends OncePerRequestFilter{

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PessoaDetailService pessoaDetailService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, 
    FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String jwt = getToken(request);
            if(jwt!=null && jwtUtil.validarToken(jwt, request)){
                String email = jwtUtil.getEmailToken(jwt);
                UserDetails userDetails =  pessoaDetailService.loadUserByUsername(email);
                UsernamePasswordAuthenticationToken authenticationToken = 
                new UsernamePasswordAuthenticationToken(userDetails,null, userDetails.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);

            }
        } catch (Exception e) {
            System.out.println("Não foi possível setar a autenticação do usuário"+e.getMessage());
        }
        //System.out.println("Do FILTER");
        filterChain.doFilter(request, response);
    }

    private String getToken(HttpServletRequest request){
        String headerToken = request.getHeader("Authorization");
        if(StringUtils.hasText(headerToken) && headerToken.startsWith("Bearer ")){
            return headerToken.replace("Bearer ", "");
        }
        return null;
    }
    
}

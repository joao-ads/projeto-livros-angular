import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {

  livros: Livro [];

  constructor(private livroService : LivroService) { }

  ngOnInit(): void {
    this.livros = this.listarLivros();
    this.livros = [
     new Livro(1, "Aquela Força Medonha", "C. S. Lewis"),
     new Livro(1, "Cristianismo Puro e Simples", "C. S. Lewis"),
     new Livro(1, "A Abolição do Homem", "C. S. Lewis"),
     new Livro(1, "Cartas do Inferno", "C. S. Lewis")
   ]
  }

  listarLivros(): Livro[]{
    return this.livroService.listarLivros();
  }

}

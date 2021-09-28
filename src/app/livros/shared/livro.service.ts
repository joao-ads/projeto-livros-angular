import { Injectable } from '@angular/core';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor() { }

  listarLivros(): Livro[]{
    const livros = localStorage['livros'];
    return livros?JSON.parse(livros): [];
  }

  cadastrar(livro: Livro): void{
    const livros = this.listarLivros();
    livro.id = new Date().getTime();
    livros.push(livro);
    localStorage['livros'] = JSON.stringify(livros)
  }

  buscarPorId(id: number): Livro{
    const livros : Livro[] = this.listarLivros();
    return livros.find(livro => livro.id === id);
  }

  atualizar(livro: Livro): void{
    const livros: Livro[] = this.listarLivros();
    livros.forEach((obj, index, objs)=>{
      if(livro.id === obj.id){
        objs[index] = livro;
      }
    });
    localStorage['livros'] = JSON.stringify(livros);
  }

  remover(id: number): void{
    let livros: Livro[] = this.listarLivros();
    livros = livros.filter(livros => livros.id !== id);
    localStorage['livros'] = JSON.stringify(livros);
  }

}

import { Routes } from "@angular/router";
import { ListarLivroComponent } from "./listar";

    export const LivroRoutes: Routes = [{
        path: 'livros',
        redirectTo: 'livros/listar'
    },
    {
        path:'livros/listar',
        component: ListarLivroComponent
    }

];
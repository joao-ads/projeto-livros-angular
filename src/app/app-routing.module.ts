import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroRoutes } from './livros';

export const router : Routes = [
    {
        path:'',
        redirectTo: 'livros/listar',
        pathMatch:'full'
    },
    ...LivroRoutes
]

@NgModule({
    imports :[ RouterModule.forRoot(router)],
    exports :[ RouterModule]
})

export class AppRoutingModule {}
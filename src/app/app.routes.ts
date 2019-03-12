import { Routes } from '@angular/router';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { MinhasExperienciasComponent } from './minhas-experiencias/minhas-experiencias.component';
import { MinhasHabilidadesComponent } from './minhas-habilidades/minhas-habilidades.component';


export const ROUTES: Routes = [
    {path: 'sobremim', component: SobreMimComponent},
    {path: 'minhasexperiencias', component: MinhasExperienciasComponent},
    {path: 'minhashabilidades', component: MinhasHabilidadesComponent}
];
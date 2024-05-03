import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  listaTareas: string[] = [];
  nuevaTarea: string = '';



  private _tareasService = inject(TareasService);


  ngOnInit(){
    this.listaTareas = this._tareasService.getTareas(); // Hace uso del servicio para obtener las tareas
  }

  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea); // Hace uso del servicio para agregar una tarea
    this.nuevaTarea = '';
    this.listaTareas = this._tareasService.getTareas(); // Hace uso del servicio para obtener las tareas
  }

  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index); // Hace uso del servicio para eliminar una tarea
    this.listaTareas = this._tareasService.getTareas(); // Hace uso del servicio para obtener las tareas
  }

}

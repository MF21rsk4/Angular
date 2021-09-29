import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /*  liste de tâches */
  tasks = [];
  taskInput : string;

  constructor() {
/*    this.tasks = [  {id: 1, title: "Task 1", checked: false}, 
                    {id: 2, title: "Task 2", checked: false}, 
                    {id: 3, title: "Task 3", checked: false}, 
                    {id: 4, title: "Task 4", checked: false} ];     */              
  }

/*  Ajoute un élément dans la liste de tâches */
  addTasks() {
/*    test si le champ n'est pas vide */
    if (this.taskInput) {
/*      test si la liste n'est pas vide */
      if (this.tasks.length) {
  /*      dernier élément du tableau de tâches */
        let last = this.tasks[this.tasks.length-1];
  /*      Ajouter le contenu du champ à la liste de tâches */
        this.tasks.push({id: last.id + 1, title: this.taskInput, checked: false});        
      } else {
  /*      Ajouter le contenu du champ à la liste de tâches dans le cas où la liste est vide  */        
        this.tasks.push({id: 1, title: this.taskInput, checked: false});         
      }
/*      Effacer le champ Input */
      this.taskInput = '';    
    }
  
  }

/*  Modifier l'état d'un élément dans la liste */
  toggleState(index) {
/*    Boucle dans la liste de tâches*/
    for (let i = 0; i < this.tasks.length; i++){
/*      Test si l'index est égal à l'id de la tâche */
      if (this.tasks[i].id === index) {
/*        Bascule l'état du champ "checked" */
        this.tasks[i].checked = !this.tasks[i].checked;
/*        on quitte la boucle une fois trouvée */
        break;
      }
    }
  }  

/*  Supprime les éléments sélectionnés dans la liste */
  deleteSelectedTasks() {
/*    Boucle dans la liste de tâches*/
    for (let i = this.tasks.length-1; i>=0; i--){
/*      Test si le champ "checked" est vrai */
      if (this.tasks[i].checked) {
/*        Efface l'élément du tableau */
        this.tasks.splice(i, 1);
      }
    }    
  }

/*  Supprime tous les éléments */
  deleteAllTasks() {
    this.tasks = [];
  }

}

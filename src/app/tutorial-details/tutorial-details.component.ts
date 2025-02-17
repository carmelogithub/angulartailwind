import { Component, Input } from '@angular/core';
import { Tutorial } from '../tutorial';
import { TutorialServiceService } from '../tutorial-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  imports: [],
  templateUrl: './tutorial-details.component.html',
  styleUrl: './tutorial-details.component.css'
})
export class TutorialDetailsComponent {

  @Input() viewMode=false;

  @Input() currentTutorial: Tutorial={
    title:'',
    description:'',
    published:false
  };

  constructor(private servicio:TutorialServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(!this.viewMode){
       this.getTutorial(this.route.snapshot.params['id']);
    }
   
    //console.log(this.currentTutorial.id);
  }

  getTutorial(id:string):void{
    this.servicio.get(id).subscribe({
      next: (data)=>{
        this.currentTutorial=data;
        console.log(data);
      }
  });
  }

}//cierra class

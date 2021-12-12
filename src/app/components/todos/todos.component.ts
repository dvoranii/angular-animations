
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit, AfterViewInit {

  @ViewChild('sectionFour', {read: ElementRef}) sectionFour: ElementRef | any;
  @ViewChild('sectionFive', {read: ElementRef}) sectionFive: ElementRef | any;

  observer:any;

  constructor() { }

  ngOnInit(): void {

    this.intersectionObserver();
  
  }

  ngAfterViewInit():void{

    this.observer.observe(this.sectionFour.nativeElement);
    this.observer.observe(this.sectionFive.nativeElement);


  }

  intersectionObserver(){
    let options = {
      root: null,
      rootMargin:'0px',
      threshold:0
    }

    this.observer = new IntersectionObserver((entries, _observer) =>{
      entries.forEach(entry => {
        console.log(entry);


        if(entry.intersectionRatio > 0){
          entry.target.classList.add('animate');
          
        }else{
          console.log('out of view');
          entry.target.classList.remove('animate');   
        }
            
      })
    }, options)
  }
  
}


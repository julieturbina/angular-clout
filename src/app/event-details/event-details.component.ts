import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  providers: [EventService]
})
export class EventDetailsComponent implements OnInit {
  getEventDetails: any;
  event: any = {};

  constructor(
    
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router

  ) { }

  //===========RETEST LATER=============!!!!!! 

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEventDetails(params['id']);
    });
  }

//  ngOnInit() {
//     this.route.data.subscribe((resolved) => {
//       this.event = resolved['event'];
//     });
//   } 

//   getEventDetails(id) {
//     this.eventService.get(id)
//       .subscribe((event) => {
//         this.event = event;
//       });
//   }

// }

deleteEvent() {
  if (window.confirm('Are you sure?')) {
    this.eventService.remove(this.event._id)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}
}
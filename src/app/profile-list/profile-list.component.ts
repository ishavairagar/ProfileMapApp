import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent {
  profiles = [
    {
      name: 'Isha Nageshwar Vairagar',
      photo: 'path/to/john-doe-photo.jpg',
      description: 'Software Developer'
      // You can add more properties as needed, including address
    },
    {
      name: 'SamruddhiPachpinde',
      photo: 'path/to/jane-smith-photo.jpg',
      description: 'Graphic Designer'
      // You can add more properties as needed, including address
    }
    // Add more profile objects as needed
  ];
     selectedProfile : any = null ;
  showSummaryOnMap(profile: any) {
    // Logic to show the summary of the selected profile on the map
    this.selectedProfile = profile;
  }
}

import { Component } from '@angular/core';
import { RouterModule,  } from '@angular/router'; // ✅ Tilføj dette

@Component({
  selector: 'app-om',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './om.html',
  styleUrls: ['./om.css']
})
export class OmComponent {}

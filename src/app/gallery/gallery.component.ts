import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  public memesGallery:any = []
   constructor(private _galleryService:GalleryService){
      _galleryService.getMemes().subscribe(
        (memedata:any)=>{
          this.memesGallery = memedata.data.memes
        },
        (err:any)=>{
          alert("internal Server Error")
        }
      )
   }
}

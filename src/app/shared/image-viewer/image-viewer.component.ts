import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CatImageData } from 'src/app/core/models/cat.interface';
import { CatService } from 'src/app/core/services/cat.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent  implements OnInit {
  @Input() referenceImageId!: string;
  public catImage!: CatImageData
  public defaultImage: string = "assets/default-image.png"

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCatImage(this.referenceImageId)
  }

  private getCatImage(referenceImageId: string): void {
    this.catService.getCatImages(referenceImageId).subscribe({
      next: (response:CatImageData)=> this.catImage = response,
      error: (error:HttpErrorResponse)=> console.log(error)
    })
  }
}

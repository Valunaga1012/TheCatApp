import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CatBreed } from 'src/app/core/models/cat.interface';
import { CatService } from 'src/app/core/services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
})
export class CatsPage implements OnInit {
  public catsData!: CatBreed[]
  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCats()
  }

  private getCats(): void {
    this.catService.getCats().subscribe({
      next: (response: CatBreed[])=> this.catsData = response,
      error: (error:HttpErrorResponse)=> console.log(error)
    })
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCategoryComponent } from '../card-category/card-category.component';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { CardFilterAsideComponent } from '../card-filter-aside/card-filter-aside.component';
import { CardInstituteComponent } from '../card-institute/card-institute.component';
import { CardUserComponent } from '../card-user/card-user.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CardPosterComponent } from '../card-poster/card-poster.component';



@NgModule({
  declarations: [
    CardCategoryComponent,
    CardDetailComponent,
    CardFilterAsideComponent,
    CardInstituteComponent,
    CardUserComponent,
    HeaderComponent,
    FooterComponent,
    CardPosterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardCategoryComponent,
    CardDetailComponent,
    CardFilterAsideComponent,
    CardInstituteComponent,
    CardUserComponent,
    HeaderComponent,
    FooterComponent,
    CardPosterComponent,
  ]
})
export class ShareModule { }
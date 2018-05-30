import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { TrendingComponent } from './trending/trending.component';
import { StickerComponent } from './sticker/sticker.component';

const routes: Routes = [
  { path: '', redirectTo: '/trending', pathMatch: 'full'},
  { path: 'trending', component: TrendingComponent },
  { path: 'random', component: RandomComponent },
  { path: 'stickers', component: StickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

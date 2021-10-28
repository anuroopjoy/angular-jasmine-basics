import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CapitalizePipe } from './shared/capitalize.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [LoginComponent, HomeComponent, CapitalizePipe],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

import { Injectable } from '@angular/core';
import { Recipe } from './Recipe';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private listUrl = environment.baseUrl1;
  private detailUrl = environment.baseUrl2;

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.listUrl);

  }


listarRecipes(): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.listUrl);
}

  obtenerRecipePorId(id: number): Observable<Recipe> {
    const url = `${this.detailUrl}/${id}/recipe.json`;
    return this.http.get<Recipe>(url);
  }
}

//YA ESTA BIEN

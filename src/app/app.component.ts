import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountryCapitalGame } from './country-capital-game.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, CountryCapitalGame],
	template: `<app-country-capital-game [data]="data"></app-country-capital-game>`
})
export class AppComponent {
	protected data = {
		Germany: "Berlin",
		Vietnam: "Hanoi",
		France: "Paris",
		United_States: "Washington, D.C.",
		United_Kingdom: "London",
		China: "Beijing",
		Japan: "Tokyo",
		Brazil: "Brasília",
		India: "New Delhi",
		Russia: "Moscow",
		Canada: "Ottawa",
		Australia: "Canberra",
		South_Africa: "Pretoria",
		Mexico: "Mexico City",
		Italy: "Rome",
		Argentina: "Buenos Aires",
		Spain: "Madrid",
		Egypt: "Cairo",
		Turkey: "Ankara",
		Saudi_Arabia: "Riyadh"
	}
}

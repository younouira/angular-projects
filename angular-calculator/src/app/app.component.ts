import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class App {
    valeur1: number | null = null;
    valeur2: number | null = null;
    resultat: number | null = null;

    addition(): void {
        if (this.valeur1 !== null && this.valeur2 !== null) {
            this.resultat = this.valeur1 + this.valeur2;
        }
    }

    soustraction(): void {
        if (this.valeur1 !== null && this.valeur2 !== null) {
            this.resultat = this.valeur1 - this.valeur2;
        }
    }

    multiplication(): void {
        if (this.valeur1 !== null && this.valeur2 !== null) {
            this.resultat = this.valeur1 * this.valeur2;
        }
    }

    division(): void {
        if (this.valeur1 !== null && this.valeur2 !== null && this.valeur2 !== 0) {
            this.resultat = this.valeur1 / this.valeur2;
        } else if (this.valeur2 === 0) {
            this.resultat = null;
            alert('Division par zéro impossible');
        }
    }
}
export class Produktas {
    public pavadinimas: string;
    public kiekis: number = 0;
    public kaina: number;
    public nuolaida: number;

    public constructor(pavadinimas: string, kiekis: number, kaina: number, nuolaida: number){
        this.pavadinimas = pavadinimas;
        this.kaina = kaina;
        this.nuolaida = nuolaida;
        this.kiekis = kiekis;
    }
    public padidinti(): void {
        this.kiekis++;
    }
    public sumazinti(): void {
        this.kiekis--;
    }

}

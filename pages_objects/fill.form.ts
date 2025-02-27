import type { Page } from 'playwright';
import { user } from './const';

export class FillForm {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    // async navigate() {
    //     await this.page.goto('https://www.amazon.fr/');
    //     await expect(this.page).toHaveTitle(/Amazon/);
    // }
 
    async fillform(nom: string, tel: string, mdp: string, mdp2: string) { 
        await this.page.getByRole('textbox', { name: 'Votre nom' }).fill(user.nom);
        await this.page.getByRole('textbox', { name: 'Numéro de téléphone portable' }).fill(user.tel);
        await this.page.getByRole('textbox', { name: 'Mot de passe', exact: true }).fill(user.mdp);
        await this.page.getByRole('textbox', { name: 'Entrez le mot de passe à' }).fill(user.mdp2);
        await this.page.getByRole('button', { name: 'Continuer Vérifier le numéro' }).click();
        // await this.page.getByRole('link', { name: 'Appliquer le filtre 17″ (43)' }).click();
    }
 
 
}
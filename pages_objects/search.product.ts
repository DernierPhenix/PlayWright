import type { Page } from 'playwright';

 
export class SearchProduct {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
 
 
    // async navigate() {
    //     await this.page.goto('https://www.amazon.fr/');
    //     await expect(this.page).toHaveTitle(/Amazon/);
    // }
 
    async openSearchAndClick() {
        
        await this.page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
        await this.page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).fill('Pc Portable Gamer');
        await this.page.getByRole('button', { name: 'Go', exact: true }).click();
        
    }
 
 
}
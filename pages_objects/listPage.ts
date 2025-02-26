import type { Page } from 'playwright';


 
export class ListPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    // async navigate() {
    //     await this.page.goto('https://www.amazon.fr/');
    //     await expect(this.page).toHaveTitle(/Amazon/);
    // }
 
    async filterConfigPc() { 
        await this.page.getByRole('link', { name: 'Appliquer le filtre Intel Core i7 pour affiner les résultats' }).click();
        await this.page.getByRole('link', { name: 'Appliquer le filtre Intel Core i9 pour affiner les résultats' }).click();
        await this.page.getByRole('link', { name: 'Appliquer le filtre 32 Go pour affiner les résultats' }).click();
        // await this.page.getByRole('link', { name: 'Appliquer le filtre 17″ (43)' }).click();
    }
 
 
}
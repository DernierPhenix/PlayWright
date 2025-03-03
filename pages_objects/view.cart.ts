import { Page } from 'playwright';

export class ViewCartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickViewCartButton() {
        await this.page.locator('#sw-gtc').getByRole('link', { name: 'Aller au panier' }).click(); // Assurez-vous que le sélecteur correspond à votre bouton "voir le panier"
    }
}
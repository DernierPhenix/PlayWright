import type { Page } from 'playwright';
import { test, expect } from '@playwright/test';

 
export class LandingPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
 
 
    async navigate() {
        await this.page.goto('https://www.amazon.fr/');
        await expect(this.page).toHaveTitle(/Amazon/);
        // await this.page.getByRole('button', { name: 'Accepter' }).click();
        // await this.page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
        // await this.page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).fill('Pc Portable Gamer');
        // await this.page.getByRole('button', { name: 'Go', exact: true }).click();
    }
 
    async cookies() {
        // const isElementVisible = await this.page.getByRole('button', { name: 'Refuser' });

        //     if (isElementVisible) {
        //         console.log('L\'élément est visible. On clique dessus !');
        //         await this.page.click('button#mon-bouton');  // Remplace par l'action que tu veux effectuer
        //     } else {
        //         console.log('L\'élément n\'est pas visible.');
        //     }
        // }
        const cookies = this.page.getByRole('button', { name: 'Refuser' });
       
        if (await cookies.isVisible()) {
            await cookies.click();
        }
        else {
            console.log('Cookies already accepted');
        }
    }
}
import type { Page } from 'playwright';

 
export class SelectProduct {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async selectProduct() { 
        await this.page.getByRole('listitem').filter({ hasText: 'Asus ROG Strix G18 G814JIR-' }).getByRole('link').first().click();
        await this.page.getByTitle('Ajouter au panier').click();
    //     const nonMerciButton = await this.page.$('button:has-text("Non, merci.")');
    //     if (nonMerciButton) {
    //         await nonMerciButton.click();
    //   }
        
    }

}
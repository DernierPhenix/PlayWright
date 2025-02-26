import type { Page } from 'playwright';

 
export class OrderProduct {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async orderProduct() {
    
    await this.page.getByRole('button', { name: 'Passer la commande (1 article' }).click();
  
    }
}
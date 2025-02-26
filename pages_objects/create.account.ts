import type { Page } from 'playwright';

 
export class CreateAccount {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async createAccount() {
    
    await this.page.getByRole('link', { name: 'Créer votre compte Amazon' }).click();
  
    }
}
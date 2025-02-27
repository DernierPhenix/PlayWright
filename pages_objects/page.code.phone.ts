import type { Page } from 'playwright';
import { user } from './const';

export class CodePhone {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    // async navigate() {
    //     await this.page.goto('https://www.amazon.fr/');
    //     await expect(this.page).toHaveTitle(/Amazon/);
    // }
 
    async codePhone() {

        const verifynum = this.page.getByRole('heading', { name: 'Vérifier le numéro de télé' });
        if (await verifynum.isVisible()) {
               console.log('L\'élément est visible.');
            };
        await this.page.getByRole('textbox', { name: 'Saisissez le code de sécurité' }).fill('123456');
        await this.page.getByRole('button', { name: 'Bouton Vérifier OTP' }).click();
        
        const error = this.page.getByText('Code non valide. Veuillez vé');
        if (await error.isVisible()) {
            console.log('L\'élément 2 est visible.');
        };
 
 
    }
}

// const cookies = this.page.getByRole('button', { name: 'Refuser' });
       
//         if (await cookies.isVisible()) {
//             await cookies.click();
//         }
//         else {
//             console.log('Cookies already accepted');
//         }
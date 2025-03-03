// On importe les classes des pages objects
import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages_objects/landing.page';
import { ListPage } from '../pages_objects/listPage';
import { SearchProduct } from '../pages_objects/search.product';
import { SelectProduct } from '../pages_objects/select.product';
import { OrderProduct } from '../pages_objects/order.product';
import { CreateAccount } from '../pages_objects/create.account';
import { FillForm } from '../pages_objects/fill.form';
import { user } from '../pages_objects/const';
import { CodePhone } from '../pages_objects/page.code.phone';
import { ViewCartPage } from '../pages_objects/view.cart';
import exp from 'constants';
import AxeBuilder from '@axe-core/playwright'; // 1

test.describe('homepage', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://wwwamazon.com/'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4
    console.log(accessibilityScanResults.violations);
    
    // expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});

test('Lancer la page', async ({ page }) => {
  const accueil = new LandingPage(page);
  // const search = new SearchProduct(page);
  // const config = new ListPage(page);
  // const select = new SelectProduct(page);
  // const order = new OrderProduct(page);
  // const account = new CreateAccount(page);
  // const form = new FillForm(page);
  // const code = new CodePhone(page);


  await accueil.navigate();
  expect(page.url()).toBe('https://www.amazon.fr/');
  await page.waitForTimeout(15000);
  await accueil.cookies();
  // await search.openSearchAndClick();
  // await page.waitForTimeout(5000);
  // await config.filterConfigPc();
  // await page.waitForTimeout(5000);
  // await select.selectProduct();
  // await order.orderProduct();
  // await account.createAccount();
  // await form.fillform(user.nom, user.tel, user.mdp, user.mdp2);
  // await code.codePhone();
  // await page.waitForTimeout(5000);

});

test('Chercher un article', async ({ page }) => { 
  const search = new SearchProduct(page);
  await search.navigate();
  await search.openSearchAndClick();
  await page.waitForTimeout(5000);
});

test('choix de la composition de l\'article', async ({ page }) => { 
  const config = new ListPage(page);

  await config.filterConfigPc();
  await page.waitForTimeout(5000);
});

test('Sélection du produit dans la liste', async ({ page }) => { 
  const select = new SelectProduct(page);

  await select.selectProduct();
  await page.waitForTimeout(5000);
});

test('Ajouter le produit au panier', async ({ page }) => { 
  const order = new OrderProduct(page);

  await order.orderProduct();
  await page.waitForTimeout(5000);
});

test('Créer un compte', async ({ page }) => { 
  const account = new CreateAccount(page);

  await account.createAccount();
});

test('Remplir le formulaire', async ({ page }) => { 
  const form = new FillForm(page);

  await form.fillform(user.nom, user.tel, user.mdp, user.mdp2);
});

test('Code de vérification', async ({ page }) => { 
  const code = new CodePhone(page);

  await code.codePhone();
});

//------------------------------------------------------------------------------------------------------

// All tests are for amazon.fr
 
// Test case 1 : Verify navigation to amazon.fr
test('Navigate to amazon.fr', async ({ page }) => {
  const accueil = new LandingPage(page);
  await accueil.navigate();
  expect(page.url()).toBe('https://www.amazon.fr/');
  // await page.waitForTimeout(15000);
  
});
// Step 1: Open the browser and navigate to the amazon.fr
// Expected Result: Verify that the current URL is amazon.fr
 
// Test case 2 : Verify cookie acceptance
test('Accept cookies', async ({ page }) => {
  const accueil = new LandingPage(page); 
  await accueil.navigate();
  await expect(page.url()).toBe('https://www.amazon.fr/');
  await page.waitForTimeout(10000);
  await accueil.cookies();
  const refuseButton = page.locator('button:has-text("Refuser")');
  await expect(refuseButton).not.toBeVisible();
});

// Step 1: Open the browser and navigate to the amazon.fr
// Step 2: Accept cookies
// Expected Result: Verify that the cookies are accepted (the button disappears after the click)
 
// Test case 3 : Verify product search
test('Search for a product', async ({ page }) => {
  const accueil = new LandingPage(page);
  const search = new SearchProduct(page);
  await search.navigate();
  await expect(page.url()).toBe('https://www.amazon.fr/');
  await page.waitForTimeout(10000);
  await accueil.cookies();
  const refuseButton = page.locator('button:has-text("Refuser")');
  await expect(refuseButton).not.toBeVisible(); 
  await search.openSearchAndClick();
  await expect(page).toHaveURL(/.*amazon\.fr\/s\?k=Pc\+Portable\+Gamer.*/);
  await page.waitForTimeout(5000);
});
// Step 1: Open the browser and navigate to the amazon.fr and Close the pop-up
// Step 2: Search for "pc gamer"
// Expected Result: Verify that the search results are displayed
 
// Test case 4 : Verify selection of the first product
test('Select the first product', async ({ page }) => {
  const select = new SelectProduct(page);
  const search = new SearchProduct(page);
  const accueil = new LandingPage(page);
  const config = new ListPage(page);

  

  await search.navigate();
  await page.waitForTimeout(10000);
  await accueil.cookies();
  await search.openSearchAndClick();
  await page.waitForTimeout(5000);
  await config.filterConfigPc();
  await select.selectProduct();
  // await page.waitForTimeout(5000);
});
// Step 1: Navigate to amazon.fr, perform the search
// Step 2: Select the first product
// Expected Result: Verify that the product page is displayed (e.g., check the product title element)
 
// Test case 5 : Verify adding product to cart
test('Add product to cart', async ({ page }) => {
  const select = new SelectProduct(page);
  const search = new SearchProduct(page);
  const accueil = new LandingPage(page);
  const config = new ListPage(page);
  const order = new OrderProduct(page);

  await search.navigate();
  await page.waitForTimeout(10000);
  await accueil.cookies();
  await search.openSearchAndClick();
  await page.waitForTimeout(5000);
  await config.filterConfigPc();
  await select.selectProduct();
  await order.orderProduct();
  await page.waitForTimeout(5000);
});
// Step 1: Navigate to amazon.fr, perform the search and select the product
// Step 2: Add to cart
// Expected Result: Verify that the product is added to the cart (e.g., check for a confirmation message)
 
// Test case 6 : Verify accessing the cart
test('Access the cart', async ({ page }) => {
  
  const select = new SelectProduct(page);
  const search = new SearchProduct(page);
  const accueil = new LandingPage(page);
  const config = new ListPage(page);
  const order = new OrderProduct(page);
  const viewcartpage = new ViewCartPage(page);
  
  await search.navigate();
  await page.waitForTimeout(10000);
  await accueil.cookies();
  await search.openSearchAndClick();
  await page.waitForTimeout(5000);
  await config.filterConfigPc();
  await select.selectProduct();
  // await order.orderProduct();
  // await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await viewcartpage.clickViewCartButton();

});
// Step 1: Navigate to amazon.fr, perform the search and add the product to the cart
// Step 2: Go to the cart
// Expected Result: Verify that the product is present in the cart
 
// Test case 7 : Verify the checkout process
test('Proceed to checkout', async ({ page }) => {
  const order = new OrderProduct(page);
  await order.orderProduct();
  await page.waitForTimeout(5000);
});
// Step 1: Navigate to amazon.fr, perform the search, add the product to the cart and go to the cart
// Step 2: Proceed to checkout
// Expected Result: Verify that the checkout process is initiated (e.g., check for the presence of the checkout page)


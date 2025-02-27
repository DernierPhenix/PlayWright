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


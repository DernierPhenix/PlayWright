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

test('Lancer la page', async ({ page }) => {
  const accueil = new LandingPage(page);
  const search = new SearchProduct(page);
  const config = new ListPage(page);
  const select = new SelectProduct(page);
  const order = new OrderProduct(page);
  const account = new CreateAccount(page);
  const form = new FillForm(page);
  
  await accueil.navigate();
  await accueil.cookies();
  await search.openSearchAndClick();
  await page.waitForTimeout(5000);
  await config.filterConfigPc();
  await page.waitForTimeout(5000);
  await select.selectProduct();
  await order.orderProduct();
  await account.createAccount();
  await form.fillform(user.nom, user.tel, user.mdp, user.mdp2);
  // await page.waitForTimeout(5000);

});


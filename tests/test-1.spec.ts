import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.free.fr/freebox/');
  await page.getByRole('button', { name: 'Refuser: Refuser notre' }).click();
  await page.getByRole('link', { name: 'Voir toute l\'offre' }).nth(1).click();
  await page.getByRole('link', { name: 'S\'abonner' }).nth(1).click();
  await page.getByText('Adresse', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Veuillez entrer un code' }).click();
  await page.getByRole('textbox', { name: 'Veuillez entrer un code' }).fill('59290');
  await page.getByRole('button', { name: 'Continuer' }).click();
  await page.getByLabel('Nom de la voie').selectOption('MOLINEL/RUE/RUE DU/MOLINEL/ALLEE/ALLEE DU');
  await page.goto('https://signup.free.fr/subscribe_promo/00_insert_addr.pl');
  await page.getByLabel('Numéro').selectOption('8B/4473144');
  await page.goto('https://signup.free.fr/subscribe_promo/00_insert_addr.pl');
  await page.getByRole('button', { name: 'Continuer' }).click();
});
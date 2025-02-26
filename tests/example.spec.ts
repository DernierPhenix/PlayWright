import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.amazon.fr/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon/);
  await page.getByRole('button', { name: 'Accepter' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).fill('Pc Portable Gamer');
  await page.getByRole('button', { name: 'Go', exact: true }).click();

});

test('config Pc', async ({ page }) => {
  await page.goto('https://www.amazon.fr/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon/);
  await page.getByRole('button', { name: 'Accepter' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).fill('Pc Portable Gamer');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('link', { name: 'Appliquer le filtre Intel Core i7 pour affiner les résultats' }).click();
  await page.getByRole('link', { name: 'Appliquer le filtre Intel Core i9 pour affiner les résultats' }).click();
  await page.getByRole('link', { name: 'Appliquer le filtre 32 Go pour affiner les résultats' }).click();
  await page.getByRole('link', { name: 'Appliquer le filtre 17″ (43' }).click();
});
test('Choix Pc', async ({ page }) => { 
  await page.goto('https://www.amazon.fr/');
// Expect a title "to contain" a substring.

  await expect(page).toHaveTitle(/Amazon/);
  await page.getByRole('button', { name: 'Accepter' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).fill('Pc Portable Gamer');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('link', { name: 'Appliquer le filtre Intel Core i7 pour affiner les résultats' }).click();
  await page.getByRole('link', { name: 'Appliquer le filtre Intel Core i9 pour affiner les résultats' }).click();
  await page.getByRole('link', { name: 'Appliquer le filtre 32 Go pour affiner les résultats' }).click();
  await page.getByRole('link', { name: 'Appliquer le filtre 17″ (43)' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Asus ROG Strix G18 G814JIR-' }).getByRole('link').first().click();
  await page.getByTitle('Ajouter au panier').click();
  const nonMerciButton = await page.$('button:has-text("Non, merci.")');
  if (nonMerciButton) {
    await nonMerciButton.click();
  }
  await page.getByRole('button', { name: 'Passer la commande (1 article' }).click();
});
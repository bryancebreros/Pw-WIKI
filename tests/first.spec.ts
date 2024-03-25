import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ArticlePage } from '../pages/article.page';

const username = 'Bryansito15'
const pass = 'BRYAN123'
const textEdit = "The dog (Canis familiaris o Canis lupus familiaris, depending if it's considered an species or subspecies of the wolf), called domestic dog; is a mammal carnivore from the family of the canidae, species from the gender Canis. In 2013, estimated global population of dog was between seven hundred million and nine hundred eighty seven millions."

test('scenario 1', async ({ page }) => {
  

  const home = new HomePage(page)
  await home.gotoHomePage()
  await home.login(username, pass)
  await home.verifyLogin(username)
  await home.logOut()

});

test('scenario 2', async ({ page }) => {
  const home = new HomePage(page)
  const article = new ArticlePage(page)

  await home.gotoHomePage()
  await home.login(username, pass) 
  await article.gotoArticlePage('en', 'es', 'Canis+familiaris')
  await page.waitForTimeout(4000)
  await article.goTotranslate()
  await page.waitForTimeout(10000)

  await article.translate(textEdit)
  await page.waitForTimeout(5000)

});



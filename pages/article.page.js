export class ArticlePage {
    constructor(page){
        this.page = page
        this.startEditBtn = '[class="oo-ui-buttonElement-button"]'
        this.editSection = 'section#cxTargetSection2 > span > a'
        this.publishBtn = 'div.oo-ui-toolGroup-tools.oo-ui-barToolGroup-tools.oo-ui-toolGroup-enabled-tools > span > a[tabindex="-1"]'
        this.section = '#cxTargetSection1'

        }
    async gotoArticlePage(from= 'en', to='es' , page){
        await this.page.goto(`https://es.wikipedia.org/w/index.php?title=Especial:Traducci%C3%B3n_de_contenidos&campaign=specialcx&from=en&page=Dog&targettitle=Perro&to=es`)

    }
    async goTotranslate(){
        
        await this.page.locator('div.cx-selected-source-page__actions > span > a').click()
    }
    async translate(text){
        await this.page.locator(this.editSection).click()

        await this.page.locator(this.section).type(text)
        await this.page.locator(this.publishBtn).click()
    }
    
    
}
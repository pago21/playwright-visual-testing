import { Page } from "@playwright/test";

export class MainPage {
    constructor(private page: Page) { }

    acceptTermsHeader = this.page.locator('#S3BnEe')
    acceptTermsButton = this.page.getByRole('button', { name: 'Zaakceptuj wszystko' })
}
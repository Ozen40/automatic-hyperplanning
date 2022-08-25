const puppeteer = require('puppeteer');

(async () => {
    
    //Opens the browser with the hyperplanning login page in 1080p (1920*1080)
    const browser = await puppeteer.launch({ headless: false, args: [`--window-size=1920,1080`], defaultViewport: {width:1920, height:1080} });
    const page = await browser.newPage();
    await page.goto('https://aen092021.hyperplanning.fr/hp/etudiant');
    await page.waitFor(1000)

    //Login to hyperplanning
    await page.type('input#id_34', 'YOUR_LOGIN') //Login
    await page.type('input#id_35', 'YOUR_PASSWORD', ) //Password
    await page.click('button#id_23') //Login button

    //Opens the planning and takes a screenshot
    await page.waitFor(3000)
    for (let i = 0; i < 8; i++) {
        await page.keyboard.press("Tab");
    }
    await page.keyboard.press('Enter')
    await page.screenshot({ path: 'planning.png' }); //Name of the screenshot

    //Close the browser
    await browser.close();
})();
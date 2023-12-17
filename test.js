const webdriver = require('selenium-webdriver');
driver = new webdriver.Builder().forBrowser('chrome').build();
const By = webdriver.By

const assert = require('assert/strict')
const {Select} = require('selenium-webdriver')

async function testRun(){
    await driver.manage().setTimeouts({implicit: 2000})
    await driver.get('https://testdrive.andersenlab.com');

    // driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
    // Выбор авто
    await driver.findElement(By.xpath('//*[@id="slider"]/span[1]')).click();
     // Клюкнуть кнопку продолжить
    await driver.findElement(By.xpath('//*[@id="go_to_step_2"]')).click();
   
    // await driver.findElement(By.xpath('//*[@id="engine"]')).click();
    const SelectEngine = await driver.findElement(By.xpath('//select[@id="engine"]')).click();
    await driver.findElement(By.xpath('//*[@id="engine"]/option[2]')).click();

    const SelectTransmissions = await driver.findElement(By.xpath('//select[@id="transmission"]')).click();
    await driver.findElement(By.xpath('//*[@id="transmission"]/option[2]')).click();

     // Клюкнуть кнопку продолжить
    await driver.findElement(By.xpath('//*[@id="go_to_step_3"]')).click();

// Очистить поле, чтобы очистить его от любых предыдущих данных
//await driver.findElement(By.xpath('//input[@id="form_last_name"]')).clear();

// Enter text Last name
await driver.findElement(By.xpath('//input[@id="form_last_name"]')).sendKeys('Abcd_Абвгд*-{}12345');
// Enter text First name
await driver.findElement(By.xpath('//input[@id="form_first_name"]')).sendKeys('Abcd_Абвгд*-{}12345');
// Enter text Middle name
await driver.findElement(By.xpath('//input[@id="form_middle_name"]')).sendKeys('Abcd_Абвгд*-{}12345');
// Enter text Age
await driver.findElement(By.xpath('//input[@id="form_age"]')).sendKeys('8,-}АбAb')
// Phone number
await driver.findElement(By.xpath('//input[@id="form_phone"]')).clear();
await driver.findElement(By.xpath('//input[@id="form_phone"]')).sendKeys('+7913111222333A,-}АбAb')
 // Клюкнуть кнопку продолжить
 await driver.findElement(By.xpath('//*[@id="go_to_step_4"]')).click();
}


testRun();

 

//*[@id="go_to_step_3"]

//*[@id="engine"]
//*[@id="engine"]/option[2]
// #engine > option:nth-child(2) 

//*[@id="engine"]/option[2]

//*[@id="engine"]
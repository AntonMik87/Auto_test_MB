const webDriver = require('selenium-webdriver');
driver = new webDriver.Builder().forBrowser('chrome').build();
const By = webDriver.By

async function testRun(){
    await driver.manage().setTimeouts({implicit: 2000})
    await driver.get('https://testdrive.andersenlab.com');

    
    await driver.findElement(By.xpath('//*[@id="slider"]/span[1]')).click();
  
    await driver.findElement(By.xpath('//*[@id="go_to_step_2"]')).click();
    
    await driver.findElement(By.xpath('//*[@id="engine"]')).click();
    await driver.findElement(By.css('#engine > option:nth-child(2)'))
    .click();

   //await driver.findElement(By.xpath('//*[@id="engine"]/option[2]')).click();
    
}



testRun();








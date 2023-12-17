const webdriver = require('selenium-webdriver');
driver = new webdriver.Builder().forBrowser('chrome').build();
const By = webdriver.By

const assert = require('assert/strict')
const {Select} = require('selenium-webdriver')

async function testRun(){
    await driver.manage().setTimeouts({implicit: 2000})
    await driver.get('https://testdrive.andersenlab.com');

   // driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
    await driver.findElement(By.xpath('//*[@id="slider"]/span[1]')).click();
  
    await driver.findElement(By.xpath('//*[@id="go_to_step_2"]')).click();
   
    // await driver.findElement(By.xpath('//*[@id="engine"]')).click();
    const SelectEngine = await driver.findElement(By.xpath('//select[@id="engine"]')).click();
    await driver.findElement(By.xpath('//*[@id="engine"]/option[2]')).click();

    const SelectTransmissions = await driver.findElement(By.xpath('//select[@id="transmission"]')).click();
    await driver.findElement(By.xpath('//*[@id="transmission"]/option[2]')).click();
    await driver.findElement(By.xpath('//*[@id="go_to_step_3"]')).click();

} 
testRun();

 

//*[@id="go_to_step_3"]

//*[@id="engine"]
//*[@id="engine"]/option[2]
// #engine > option:nth-child(2) 

//*[@id="engine"]/option[2]

//*[@id="engine"]
// const puppeteer = require('puppeteer');
// const MAX_VOTES = 100000000;

const axios = require('axios');

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

// (async () => {
//   let count = 0;
//   while (count < MAX_VOTES) {
//     const browser = await puppeteer.launch({
//       args: ['--start-maximized'],
//       defaultViewport: null,
//     });

//     const context = await browser.createIncognitoBrowserContext();
//     const page = await context.newPage();
//     await page.goto('https://isango.igihe.com/', {
//       waitUntil: 'domcontentloaded',
//     });

//     try {
//       // const buttonSelector =
//       //   'a.btn.btn-primary.vote[name="vote"][class*="nomine#1-2#20231112"]';

//       // const buttonSelector1 =
//       //   'a.btn.btn-primary.vote[name="vote"][class*="nomine#4-16#20231126"]';

//       const buttonSelector2 =
//         'a.btn.btn-primary.vote[name="vote"][class*="nomine#9-32#20231142"]';
//       // const element = await page.waitForSelector(buttonSelector);
//       // const element1 = await page.waitForSelector(buttonSelector1);
//       const element2 = await page.waitForSelector(buttonSelector2);

//       // await element.click();
//       // await delay(2000);

//       // await element1.click();
//       // await delay(2000);

//       await element2.click();
//       await delay(3000);

//       await element2.dispose();
//     } catch (error) {
//       console.error('Error waiting for selector:', error);
//     }
//     await browser.close();
//     count++;
//     console.log('count', count);
//     await delay(1000);
//   }
// })();

function sendRequest() {
  const url = 'https://isango.igihe.com/premium2.php';
  const payload = new URLSearchParams({
      'nominee': '20231142',
      'catgr': '9-32'
  });

  axios.post(url, payload, {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
  .then(response => {
      console.log(response.data);
  })
  .catch(error => {
      console.error('Error:', error);
  });
}

(async () => {
  let count = 0;
  while (count < 100000000) {
    sendRequest();
    count++;
    console.log('count', count);
    await delay(40000);
  }
})();



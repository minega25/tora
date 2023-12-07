// const puppeteer = require('puppeteer');
// const MAX_VOTES = 100000000;

var http = require('http');
var querystring = require('querystring');

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
  var postData = querystring.stringify({
      'nominee': '20231142',
      'catgr': '9-32'
  });

  var options = {
      hostname: 'isango.igihe.com',
      path: '/premium2.php',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData)
      }
  };

  var req = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`);
      });
      res.on('end', () => {
          console.log('No more data in response.');
      });
  });

  req.on('error', (e) => {
      console.error(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(postData);
  req.end();
}

(async () => {
  let count = 0;
  while (count < 100000000) {
    sendRequest();
    count++;
    console.log('count', count);
    await delay(20000);
  }
})();



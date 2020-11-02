// import fetch from 'node-fetch';
import axios from 'axios';

async function postScreenshot(id, screenshot) {
  await axios
    .post(`${process.env.ENDPOINT}/update-screenshot`, {
      id,
      screenshot,
    })
    .then(res => {
      // console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
}

export async function takeNewScreenshot(id, baseUrl) {
  // console.log(`new screenshot called, for VPN id ${id}. Let's see...`);

  // call lambda (async)
  const body = {
    url: baseUrl,
    cloudinaryFolder: 'vpnf/screenshots',
    fileName: id,
    width: 1920,
    height: 1080,
  };
  await axios
    .post(process.env.SCREENSHOT_LAMBDA, body)
    .then(({ status, data }) => {
      // console.log(status);
      // console.log(data);
      const screenshot = data.url;
      postScreenshot(id, screenshot);
    })
    .catch(error => {
      // console.log('⚠️ 🐛 ⚠️ 🐛 ⚠️ 🐛 There was an error ↓');
      console.log(error);
      // console.log('⚠️ 🐛 ⚠️ 🐛 ⚠️ 🐛 There was an error ↑');
    });
}

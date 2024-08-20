/* eslint-disable @typescript-eslint/no-explicit-any */
const IAS_REQUEST_TIMEOUT = 600;

export default () => {
  return new Promise((resolve) => {
    const timerId = setTimeout(() => {
      resolve('Resolved with timeout');
    }, IAS_REQUEST_TIMEOUT);

    const setupIAS = () => {
      clearTimeout(timerId);
      (<any>window).__iasPET = (<any>window).__iasPET || {};
      (<any>window).__iasPET.queue = (<any>window).__iasPET.queue || [];
      (<any>window).__iasPET.pubId = '931336'; // Ask Rachel
      resolve('loaded');
    };

    // Set up IAS pet.js
    const script = document.createElement('script');
    script.src = '//static.adsafeprotected.com/iasPET.1.js';
    script.setAttribute('async', 'async');
    document.head.appendChild(script);
    script.onload = setupIAS;
    script.onerror = () => {
      resolve('error');
    };
  });
};

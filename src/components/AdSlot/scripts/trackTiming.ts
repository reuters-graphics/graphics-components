export default (timingName: string) => {
  const timestamp = window.performance.now();
  (<any>window).dataLayer = (<any>window).dataLayer || [];
  (<any>window).dataLayer.push({
    event: 'rum_add_timing',
    rum_timing_name: timingName,
    rum_timing_timestamp: timestamp,
  });
};

import { prettifyDate } from '../utils/index';
import { describe, it, expect } from 'vitest';

process.env.TESTING = 'true';

describe('Utils tests', () => {

  it('should format full month correctly', () => {
    const unformatted = 'January 1, 2023, 10:00 AM';
    const formatted = 'Jan. 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformatted)).toBe(formatted);
  });

  it('should format 3-letter abbreviated month correctly', () => {
    const unformatted = 'Jan 1, 2023, 10:00 AM';
    const formatted = 'Jan. 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformatted)).toBe(formatted);
  });

  it('should format March, April, June, July correctly', () => {
    const unformattedMarch = 'Mar 1, 2023, 10:00 AM';
    const formattedMarch = 'March 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedMarch)).toBe(formattedMarch);

    const unformattedApril = 'Apr 1, 2023, 10:00 AM';
    const formattedApril = 'April 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedApril)).toBe(formattedApril);

    const unformattedJune = 'Jun 1, 2023, 10:00 AM';
    const formattedJune = 'June 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedJune)).toBe(formattedJune);

    const unformattedJuly = 'Jul 1, 2023, 10:00 am';
    const formattedJuly = 'July 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedJuly)).toBe(formattedJuly);

    const unformattedSept = 'Sep 1, 2023, 10:00 AM';
    const formattedSept = 'Sept. 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedSept)).toBe(formattedSept);
  });

  it('should format months with periods correctly', () => {
    const unformattedMarch = 'Mar. 1, 2023, 10:00 pm';
    const formattedMarch = 'March 1, 2023, 10:00 p.m.';
    expect(prettifyDate(unformattedMarch)).toBe(formattedMarch);

    const unformattedApril = 'Apr. 1, 2023, 10:00 AM';
    const formattedApril = 'April 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedApril)).toBe(formattedApril);

    const unformattedMay = 'May. 1, 2023, 10:00 am';
    const formattedMay = 'May 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedMay)).toBe(formattedMay);

    const unformattedJune = 'Jun. 1, 2023, 10:00 PM';
    const formattedJune = 'June 1, 2023, 10:00 p.m.';
    expect(prettifyDate(unformattedJune)).toBe(formattedJune);

    const unformattedJuly = 'Jul. 1, 2023, 10:00 PM';
    const formattedJuly = 'July 1, 2023, 10:00 p.m.';
    expect(prettifyDate(unformattedJuly)).toBe(formattedJuly);

    const unformattedSept = 'Sep. 1, 2023, 10:00 PM';
    const formattedSept = 'Sept. 1, 2023, 10:00 p.m.';
    expect(prettifyDate(unformattedSept)).toBe(formattedSept);
  });


  it('should format months on their own properly', () => {
    const unformattedMarch = 'Mar.';
    const formattedMarch = 'March';
    expect(prettifyDate(unformattedMarch)).toBe(formattedMarch);

    const unformattedApril = 'Apr.';
    const formattedApril = 'April';
    expect(prettifyDate(unformattedApril)).toBe(formattedApril);

    const unformattedMay = 'May.';
    const formattedMay = 'May';
    expect(prettifyDate(unformattedMay)).toBe(formattedMay);

    const unformattedJune = 'JUN.';
    const formattedJune = 'June';
    expect(prettifyDate(unformattedJune)).toBe(formattedJune);

    const unformattedJuly = 'Jul.';
    const formattedJuly = 'July';
    expect(prettifyDate(unformattedJuly)).toBe(formattedJuly);

    const unformattedSept = 'sep.';
    const formattedSept = 'Sept.';
    expect(prettifyDate(unformattedSept)).toBe(formattedSept);
  });

  it('should format months with year properly', () => {
    const unformattedMarch = 'MAR. 2025';
    const formattedMarch = 'March 2025';
    expect(prettifyDate(unformattedMarch)).toBe(formattedMarch);

    const unformattedApril = 'apr. 2025';
    const formattedApril = 'April 2025';
    expect(prettifyDate(unformattedApril)).toBe(formattedApril);

    const unformattedMay = 'May. 2025';
    const formattedMay = 'May 2025';
    expect(prettifyDate(unformattedMay)).toBe(formattedMay);

    const unformattedJune = 'Jun. 2025';
    const formattedJune = 'June 2025';
    expect(prettifyDate(unformattedJune)).toBe(formattedJune);

    const unformattedJuly = 'Jul. 2025';
    const formattedJuly = 'July 2025';
    expect(prettifyDate(unformattedJuly)).toBe(formattedJuly);

    const unformattedSept = 'Sep. 2025';
    const formattedSept = 'Sept. 2025';
    expect(prettifyDate(unformattedSept)).toBe(formattedSept);
  });

  it('should fix spacing between time and am/pm', () => {
    const unformattedMarch = 'Mar. 1, 2023, 10:00pm';
    const formattedMarch = 'March 1, 2023, 10:00 p.m.';
    expect(prettifyDate(unformattedMarch)).toBe(formattedMarch);

    const unformattedApril = 'Apr. 1, 2023, 10:00AM';
    const formattedApril = 'April 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedApril)).toBe(formattedApril);

    const unformattedMay = 'May. 1, 2023, 10:00am';
    const formattedMay = 'May 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedMay)).toBe(formattedMay);

    const unformattedJune = 'Jun. 1, 2023, 10:00AM';
    const formattedJune = 'June 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedJune)).toBe(formattedJune);

    const unformattedSept = 'sep. 1, 2023, 10:00PM';
    const formattedSept = 'Sept. 1, 2023, 10:00 p.m.';
    expect(prettifyDate(unformattedSept)).toBe(formattedSept);
  });

  it('should work with lower or upper case', () => {
    const unformattedMarch = 'MAR. 1, 2023, 10:00pm';
    const formattedMarch = 'March 1, 2023, 10:00 p.m.';
    expect(prettifyDate(unformattedMarch)).toBe(formattedMarch);

    const unformattedApril = 'APR. 1, 2023, 10:00AM';
    const formattedApril = 'April 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedApril)).toBe(formattedApril);

    const unformattedMay = 'may. 1, 2023, 10:00am';
    const formattedMay = 'May 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedMay)).toBe(formattedMay);

    const unformattedJune = 'JUN. 1, 2023, 10:00AM';
    const formattedJune = 'June 1, 2023, 10:00 a.m.';
    expect(prettifyDate(unformattedJune)).toBe(formattedJune);
  });

});

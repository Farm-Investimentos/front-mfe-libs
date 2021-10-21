/**
 * @jest-environment jsdom
 */

import { notificationWrapper } from '.';

describe('notificationWrapper', () => {
  it('Should return SUCCESS', () => {
    expect(notificationWrapper('SUCCESS', 'a', 'b')).toBeTruthy();
  });
});

/**
 * Validades if a string matches an document valid
 * @module
 * @param {string} value - the string to be matched
 * @returns {boolean} valid or not
 */

import { isValidCPF, isValidCNPJ } from '.';

export default (value) => (isValidCPF(value) || isValidCNPJ(value));
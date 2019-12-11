/**
 * Convert a string to a usable class name
 * @param  {string} stringToConvert   String of text
 * @return {string}                   Usable class name
 */

module.exports = function(stringToConvert) {
  if (typeof stringToConvert === 'string') {
    return stringToConvert.trim().replace(/[\s-_]+/g, '-').replace(/[^\w-]|^-|-$/g, '-').replace(/-+(?=-)/, '-').toLowerCase();
  }
};

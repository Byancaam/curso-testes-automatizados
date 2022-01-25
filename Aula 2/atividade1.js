class StringManipulations {
  /**
   * Class for string manipulations
   * @param  {String} string
   */
  constructor(string) {
    this.string = string;
  }

  /**
   * Returns the first substring that matches the given string
   * @param  {String} subStr  substring to be matched
   * @return {String}
   */
  findFirstMatch(subStr) {
    const firstMatch = this.string.match(new RegExp(subStr));
    return firstMatch[0];
  }

  /**
   * Returns the last substring that matches the given string
   * @param  {String} subStr  substring to be matched
   * @return {String}
   */
  findLastMatch(subStr) {
    const lasttMatch = this.string.match(new RegExp(subStr, "g"));
    return lasttMatch[0];
  }

  /**
   * Returns the substring between two given other strings
   * @param  {String} subStr1  begining of the match
   * @param  {String} subStr2  ending of the match
   * @return {String}
   */
  substringBetweenMatches(subStr1, subStr2) {
    const matches = this.string.match(new RegExp(subStr1 + "(.*)" + subStr2));
    return matches ? matches[0] : null ;
  }

  /**
    Given the string attribute of the class, 
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2, 
    return instead the empty string.
    * @return {String}
    */
  both_ends() {
    if (this.string.length >= 2) {
      return (
        this.string.substring(0, 2) +
        this.string.substring(this.string.length - 2)
      );
    }
    return " ";
  }

  /**
     Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
  fix_start(str1) {
    const strStart = str1.charAt(0);
    return strStart + str1.slice(1).replace(new RegExp(strStart, "g"), "*");
  }
}

module.exports = StringManipulations;

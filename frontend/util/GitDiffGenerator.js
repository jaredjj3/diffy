export default class {
  // old and new are bodies, which are just strings
  constructor (oldBody, newBody) {
    this.oldBody = oldBody;
    this.newBody = newBody;
  }

  generate () {
    const oldArr = this.oldBody.split("\n");
    const newArr = this.newBody.split("\n");
  }

  // input is two strings, output is an array objects
  // that describe the git differences
  // each output 
  compare (str1, str2) {
    if (str1 === str2) {
      return [];
    }
    
  }
}
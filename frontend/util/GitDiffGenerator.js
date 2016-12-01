const OLD = 'OLD';
const NEW = 'NEW';

export default class {
  // old and new are bodies, which are just strings
  constructor (oldBody, newBody) {
    this.oldLines = oldBody.split("\n");
    this.newLines = newBody.split("\n");
  }

  generate () {
    this.assignByLength();
    const { longer, shorter } = this;
    for (let i = 0; i < longer.length; i++) {
      const str1 = longer[i];
      const str2 = shorter[i];
      debugger
      console.log(this.compare(str1, str2));
    }
  }

  // assigns this.longer and this.shorter based on
  // how many lines this.oldLines and this.newLines has
  assignByLength () {
    const oldLength = Object.keys(this.oldLines);
    const newLength = Object.keys(this.newLines);
    if (oldLength > newLength) {
      this.longer = {
        lines: this.oldLines,
        length: oldLength,
        type: OLD
      };
      this.shorter = {
        lines: this.newLines,
        length: newLength,
        type: NEW
      };
    } else {
      this.longer = {
        lines: this.newLines,
        length: newLength,
        type: NEW
      };
      this.shorter = {
        lines: this.newLines,
        length: oldLength,
        type: OLD
      };
    }
  }

  // input is two strings, output is an array of objects
  // that describe the git differences of each output 
  compare (str1, str2) {
    if (str1 === str2) {
      return [];
    }
    return this.matchPercentage(str1, str2);
  }

  // input is two strings, output is a float between 0 and 1
  // shows the match percentage between two strings, relative
  // to the longer string
  matchPercentage (str1, str2) {
    if (str1 === str2) {
      return 1;
    }
    const freq1 = this.frequency(str1);
    const freq2 = this.frequency(str2);
    let longer, shorter;
    if (freq1.total > freq2.total) {
      longer = freq1;
      shorter = freq2;
    } else {
      longer = freq2;
      shorter = freq1;
    }
    const words = Object.keys(longer);
    let discrepancies = 0;
    words.forEach( word => {
      const shorterWord = word in shorter ? shorter[word] : 0; 
      discrepancies += longer[word] - shorterWord;
    });
    return discrepancies / longer.total;
  }

  // input is a string, output is a object whose keys are words
  // and the corresponding value is the frequency
  frequency (str) {
    const words = str.split(" ");
    const result = {};
    result.total = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word in result) {
        result[word]++;
      } else {
        result[word] = 1;
      }
      result.total++;
    }
    return result;
  }
}
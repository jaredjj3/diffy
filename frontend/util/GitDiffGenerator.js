export const OLD     = 'OLD';
export const NEW     = 'NEW';
export const REMOVED = 'REMOVED';
export const ADDED   = 'ADDED';
export const NONE    = 'NONE';

export default class {
  // old and new are bodies, which are just strings
  constructor (oldBody, newBody) {
    this.oldLines = oldBody.split('\n').filter( line => line.trim() !== '');
    this.newLines = newBody.split('\n').filter( line => line.trim() !== '');
  }

  getGitDiff () {
    this.assignByLength();
    const { longer, shorter } = this;
    const diffed = [];
    for (let i = 0; i < longer.length; i++) {
      const str1 = longer.lines[i];
      const str2 = shorter.lines[i] ? shorter.lines[i] : "";
      if (str1 === str2) {
        diffed.push({ type: NONE, lines: str1 });
      } else {
        const oldStr = longer.type === OLD ? str1 : str2;
        const newStr = shorter.type === NEW ? str2 : str1;
        if (oldStr !== '') {
          diffed.push({ type: REMOVED, lines: oldStr });
        }
        if (newStr !== '') {
          diffed.push({ type: ADDED, lines: newStr });
        }
      }
    }
    return diffed;
  }

  // assigns this.longer and this.shorter based on
  // how many lines this.oldLines and this.newLines has
  assignByLength () {
    const oldLength = Object.keys(this.oldLines).length;
    const newLength = Object.keys(this.newLines).length;
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
        lines: this.oldLines,
        length: oldLength,
        type: OLD
      };
    }
  }

  // input is two strings, output is an array of objects
  // that describe the git differences of each output 
  compare (line1, line2) {

  }

  // input is two strings, output is a float between 0 and 1
  // shows the match percentage between two strings, relative
  // to the longer string
  matchFrac () {
    const freq1 = this.frequency(this.oldLines.join(" "));
    const freq2 = this.frequency(this.newLines.join(" "));
    let longer, shorter;
    if (freq1.total > freq2.total) {
      longer = freq1;
      shorter = freq2;
    } else {
      longer = freq2;
      shorter = freq1;
    }
    const words = Object.keys(longer.words);
    let discrepancies = 0;
    words.forEach( word => {
      const shorterWord = word in shorter.words ? shorter.words[word] : 0; 
      discrepancies += longer.words[word] - shorterWord;
    });
    return discrepancies / longer.total;
  }

  // input is a string, output is a object whose keys are words
  // and the corresponding value is the frequency
  frequency (str) {
    const words = str.split(" ");
    const result = {};
    result.total = 0;
    result.words = {}
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
        .split('')
        .filter( char => ![',','.','!','?'].includes(char))
        .join('')
        .toLowerCase();
      if (word in result) {
        result.words[word]++;
      } else {
        result.words[word] = 1;
      }
    }
    result.total = Object.keys(result.words).length;
    return result;
  }
}
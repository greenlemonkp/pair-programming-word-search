const transpose = function (array) {
    const matrix = [];
    for (let i = 0; i < array[0].length; i++) {
      const col = [];
      for (let j = 0; j < array.length; j++) {
        col.push(array[j][i]);
      }
      matrix.push(col);
    }
    return matrix;
  };
const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    let find = false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(item => item.join(''))
    
    for (nestedArray of horizontalJoin) {
        if (nestedArray.includes(word)) {
            find = true;
        } 
    for (item of verticalJoin) {
        if (item.includes(word)) {
            find = true;
        } 
        
    }
        
         
    }
  return find;
}
module.exports = wordSearch
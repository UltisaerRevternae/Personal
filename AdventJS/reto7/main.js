function drawGift(size, symbol) {
  if (size < 1) {
    return '#\n##\n#';
}
  let result = '';
  let space = size - 2;
  let right = 0

  let left = (size - 2) > 0 ? (size - 2) : 0;

  /// TECHO ///
  result += ' '.repeat(size - 1);
  result += '#'.repeat(size);
  result += '\n';

  /// SUPERIOR ///
  for (let i = 0; i < (size - 2); i ++ , space--, right++) {
    result += ' '.repeat(Math.max(space, 0));
    result += '#';
    result += symbol.repeat(left);
    result += '#';
    result += symbol.repeat(Math.max(right, 0));
    result += '#'.repeat(1);
    result += '\n';
  }

  /// CENTRO ///
  result += '#'.repeat(size);
  result += symbol.repeat(Math.max((size - 2), 0));
  result += '#'.repeat(1);
  result += '\n';


  /// INFERIOR /// 
  for (let i = (size - 2); i > 0; i -- , right--) {
    result += '#';
    result += symbol.repeat(left);
    result += '#';
    result += symbol.repeat(Math.max(right - 1, 0));
    result += '#'.repeat(1);
    result += '\n';
  }

  /// COLA /// 
  result += '#'.repeat(size);
  result += '\n';

  // console.log( result)
  return result
}

drawGift(1, '*');

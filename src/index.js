module.exports = function toReadable(number) {
  let value = '';
  const nums = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  if (number < 10) value = nums[number];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  if (number >= 10 && number < 20) value = teens[number - 10];

  const ties = [
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  if (number >= 20 && number < 100) {
    value =
      number % 10 === 0
        ? ties[number / 10 - 2]
        : `${ties[Math.floor(number / 10) - 2]} ${ties[number % 10]}`;
  }
  return value;
};

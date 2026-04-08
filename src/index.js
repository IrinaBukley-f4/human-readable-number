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
    'forty',
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
        : `${ties[Math.floor(number / 10) - 2]} ${nums[number % 10]}`;
  }
  if (number >= 100 && number < 1000) {
    value =
      number % 100 === 0
        ? `${nums[number / 100]} hundred`
        : `${nums[Math.floor(number / 100)]} hundred ${toReadable(number - Math.floor(number / 100) * 100)}`;
  }
  return value;
};

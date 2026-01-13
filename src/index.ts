const romanize = (num: number): string => {
  if (num <= 0) throw new Error("Number must be greater than 0");

  const romanMap: [number, string][] = [
    [1000000, "M\u0305"],
    [900000, "C\u0305M\u0305"],
    [500000, "D\u0305"],
    [400000, "C\u0305D\u0305"],
    [100000, "C\u0305"],
    [90000, "X\u0305C\u0305"],
    [50000, "L\u0305"],
    [40000, "X\u0305L\u0305"],
    [10000, "X\u0305"],
    [9000, "I\u0305X\u0305"],
    [5000, "V\u0305"],
    [4000, "I\u0305V\u0305"],
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  let result = "";

  for (const [value, numeral] of romanMap) {
    const count = Math.floor(num / value);
    if (count > 0) {
      result += numeral.repeat(count);
      num -= value * count;
    }
  }

  return result;
};

export { romanize };
export default romanize;

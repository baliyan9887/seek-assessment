export function formatIndianNumber(number: number) {
  const numberString = number?.toString();
  const lastThreeDigits = numberString?.slice(-3);
  const otherDigits = numberString?.slice(0, -3);

  const formattedOtherDigits = otherDigits?.replace(
    /\B(?=(\d{2})+(?!\d))/g,
    ","
  );

  if (otherDigits !== "") {
    return `${formattedOtherDigits},${lastThreeDigits}`;
  } else {
    return lastThreeDigits;
  }
}

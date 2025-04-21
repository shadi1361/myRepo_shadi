
export function formatNumberWithCommas(number: number){

  

    const [intPartRaw, decimalPart] = number.toFixed(2).split('.');
  

    const intPart = intPartRaw.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  

    return `${intPart},${decimalPart} €`;
  }
  
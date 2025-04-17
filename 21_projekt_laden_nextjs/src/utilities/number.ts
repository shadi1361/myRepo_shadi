
export function formatNumberWithCommas(number: number){

  
    // Zahl in String mit zwei Dezimalstellen umwandeln
    const [intPartRaw, decimalPart] = number.toFixed(2).split('.');
  
    // Punkte als Tausendertrennzeichen im ganzzahligen Teil hinzufügen
    const intPart = intPartRaw.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    // Formatierter String mit Komma und Euro-Zeichen zurückgeben
    return `${intPart},${decimalPart} €`;
  }
  
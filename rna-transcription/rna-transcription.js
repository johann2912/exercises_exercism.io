//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  
  let rna = dna.split("");

  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "G":
        rna[i] = "C";
        break;
      case "C":
        rna[i] = "G";
        break;
      case "T":
        rna[i] = "A";
        break;
      case "A":
        rna[i] = "U";
        break;
    }
  }
  return rna.join("");
};



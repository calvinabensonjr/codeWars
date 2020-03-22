function DNAStrand(dna){
return dna
.replace(/./g, c => ({A:'T',T: 'A', C: 'G', G: 'C'}[c]));
}

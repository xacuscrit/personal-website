const nama = "abi devangga";
let usia = 30; 

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18){ //kondisi awal
      generasi = "generasi remaja";

       } else if (usia > 18 && usia < 30) {
          generasi = "generasi dewasa";

       } 
       else if(usia >= 30){
           generasi = "anda tua broo";
       } 
       else if(usia < 2 && usia > 10){
           generasi ="anda bayek"
       }
       else {
       // kondisi jika tidak terpenuhi
       generasi = "anda masih bayek imut kunti bogel ukuran saset"
       }
        
       return console.log('generasi saya adalah', generasi);


    }


console.log(nama);
console.log(usia);

generateBiodata();

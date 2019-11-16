// start
function createTriangle(number){
    // harus int
    if(typeof number !== 'number'){
        console.log('argument yang diberikan harus Number!');
    }
    else{
        // buat variabel kosong untuk wadah
        let star = '';
        // baris
        for(var a = 1; a <= number; a++){
            // spasi
            for(var b = number-1; b >= a; b--){
                // perulangan pertama ini akan menghasilkan 4 spasi, berkurang setiap satu perulangan baris
                star += ' ';
            }
            // bintang
            for(var c = 1; c <= a; c++){
                // perulangan pertama ini akan menghasilkan 1 star, bertambah setiap satu perulangan baris 
                star += '*';
            }
            // enter setiap satu perulangan baris
            star += '\n';
        }
        // tampilkan pada console
        console.log(star);
    }
}
// end

// jalankan function
createTriangle(5);
// createTriangle(10);
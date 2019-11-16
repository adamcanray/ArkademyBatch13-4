// start
function cek_kata(string){
    // pecah string menjadi array
    let strToArr = string.split(' ');
    // buat arr kosong untuk menampung Int
    let arrInt = [];

    // perulangan sebanyak strToArr.length
    for(var a = 0; a < strToArr.length; a++){
        // cek jika strToArr index ke-a itu tidak NaN
        if( !isNaN(parseInt(strToArr[a])) ) {
            // maka push 
            arrInt.push(parseInt(strToArr[a]));
        }
    }

    // result
    // length daru strToArr dikurang length dari arrInt hasilnya adalah banyaknya kata yang string
    let result = strToArr.length - arrInt.length + "/" + strToArr.length;

    // kembalikan nilai
    return console.log(result);
}
// end

// jalankan function
cek_kata("ini adalah sebuah kata");
// cek_kata("2 pasang sandal hilang");
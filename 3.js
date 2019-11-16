// start
function cek_kata(string){
    // cek jika argument yang diberikan bukan string
    if( typeof string !== 'string' ){
        console.log("argument yang diberikan bukan string!");
        return false;
    } else{
        // jika string

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
        console.log(result);
        return true;
    }
}
// end

// jalankan function
// cek_kata(1);
cek_kata("ini adalah sebuah kata");
// cek_kata("2 pasang sandal hilang");
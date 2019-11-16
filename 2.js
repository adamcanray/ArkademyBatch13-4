// start
function formValidation(username, password){

    // username
    // cek harus tepat 7 huruf
    if( username.length == 7 ){
        // cek username harus huruf besar semua
        if( username == username.toUpperCase() ){
            // username valid
            console.log("username valid.");
        } else{
            // username tidak huruf besar semua
            console.log("username harus huruf besar semua!");
        }

    } else{
        // username tidak tepat 7 huruf
        console.log("username harus memiliki 7 huruf tidak kurang dan lebih!");
    }

    // password
    // “111*sss
    // cek diawali 3 digit angka
    if( password[0].match(/[0-9]/) ){
        // cek angka berulang
        // password index ke-1 dan ke-2 harus sama dengan index ke-0
        if ( password[1] == password[0] && password[2] == password[0] ){
            // cek simbol '*' setelahnya
            if( password[3].match(/[*]/) ){
                // cek diakhiri 3 huruf
                if( password[4].match(/[a-zA-Z]/) ){
                    // cek huruf berulang
                    if( password[5] == password[4] && password[6] == password[4] ){
                        // sudah diakhiri 3 huruf berulang
                        console.log('password valid.');
                    }else{
                        // password tidak diakhiri huruf berulang
                        console.log('password harus diakhiri huruf berulang!');
                    }
                }else{
                    // jika password tidak diakhiri dengan huruf
                    console.log('password harus diakhiri 3 huruf!');
                }
            }else{
                // password tidak memiliki '*' setelah angka berulang
                console.log("password harus memiliki simbol '*' setelah angka berulang!");
            }
        } else{
            // password tidak angka yang berulang
            console.log('passwod harus diawali angka berulang sebanyak 3 digit!');
        }
    }else{
        // password tidak angka
        console.log('password harus diawali angka!');
    }

}
// end

// jalankan function
formValidation('ARKDEMY', '111*sss');
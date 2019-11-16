// start
function findPair(array){
    // jika typeof array itu bukan 'object' -- array dalam javascript typeof-nya object
    if( typeof array !== 'object' ){
        // bukan array
        console.log('Bukan Array!');
    }else{
        // jika Array

        // buat object kosong
        let objWadah = {};
        
        // perulangan sebanya length array
        for ( var a = 0; a < array.length; a++ ){
            // cari pasangan yang cocok
            // element array index ke-a jadikan key dari object objWadah 
            if (objWadah[array[a]] == null ){
                // buat array kosong
                let wadahPair = [];
                // push element dari array index ke-a
                wadahPair.push(array[a]);
                // jadikan value 
                objWadah[array[a]] = wadahPair;
            } else{
                objWadah[array[a]].push(array[a]);
            }
        }
        
        // var size = Object.keys(objWadah).length;
        // console.log(size);
        
        // 
        let pasangan = [];
        // 
        let tidakPasangan = [];
        
        // tetapkan pasangan
        for(item in objWadah){
            // cek jika pasangan
            if ( objWadah[item].length > 1 ){
                // cek jika pasangan nilai-nya ganjil
                if( objWadah[item].length % 2 == 1 ){
                    // buang satu item-nya
                    objWadah[item].pop();
                    // push item ke tidakPasangan(karena itu nilai yang di pop, berarti tidak berpasangan)
                    tidakPasangan.push(item);
                    
                    // push angka yang sudah berpasangan(genap)
                    pasangan.push([item]);
                }else{
                    // jika genap pasti berpasangan
                    pasangan.push([item]);
                }
            }else{
                // item yang tidak berpasangan
                tidakPasangan.push(item);
            }
        }
        
        // jika ada pasangan
        if ( pasangan.length > 1 ){
            if(pasangan.length == 2){
                console.log(pasangan.length + ' pasangan (penjelasan: terdapat 1 pasang "' +pasangan[0]+'" dan 1 pasangan "'+pasangan[1]+'", '+tidakPasangan[0]+" dan bilangan lain tidak berpasangan.");
            }else{
                console.log(pasangan.length);
            }
        } else{
            console.log("Tidak ada pasangan yang ditemukan!");
        }
        
    }
    
}
// end

// jalankan function
// findPair(11);
// findPair([1,2,3,4,5]);
findPair([1,5,5,10,9,13,5,1]); // Output: 2 pasangan
// findPair([20,50,70,10,70,30,10,30,50]); // Output: 4 pasangan
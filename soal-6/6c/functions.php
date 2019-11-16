<?php
// koneksi ke database
$konek = mysqli_connect('localhost', 'root', '', 'arkademy_batch_13_2');

// fungsi query
function query($query)
{
    // global koneksi
    global $konek;
    // result adalah query ke paramter yang diberikan
    $result = mysqli_query($konek, $query);
    //  array untuk menampung data
    $rows = [];
    // buat perulangan sebanyak data yang ada didatabase
    // ambil semua data dari hasil query di $result berdasarkan baris nya
    while ($row = mysqli_fetch_assoc($result)) {
        // masukan setiap baris dari $row ke array $rows
        $rows[] = $row;
    }
    // kembalikan nilai $rows
    // ps: tanpa $rows dan $row sebenarnya bisa langsung return ke $result, hanya saja agar bisa dilihat data apa saja yang didapat ketika menjalankan query
    return $rows;
}
// fungsi tambah
function tambah($data){
    // 
    global $konek;
    // siapkan data
    $cashier_id = $data['cashier'];
    // ucfirst() -- UpperCase Fisrt -- setiap kata diawali dengan huruf besar
    $product = ucfirst($data['product']);
    $category_id = $data['category'];
    $price = $data['price'];
    // insert ke database
    // ke tabel cahsier
    // $query_cashier = "INSERT INTO cashier VALUES ('','$cashier')";

    // ke tabel category
    // $query_category = "INSERT INTO category VALUES ('', '$category')";
    // query ke database
    // query($query_category);

    // ambil last insert id menggunakan php
    // $last_id = $konek->insert_id;
    // ke tabel product
    $query_product = "INSERT INTO product VALUES ('', '$product', '$price', '$category_id', '$cashier_id')";
    query($query_product);

    // kembalikan nilai baris yang terpengaruhi pada database
    return mysqli_affected_rows($konek);
}
function hapus($id){
    // 
    global $konek;
    query("DELETE FROM product WHERE id = '$id'");
    return mysqli_affected_rows($konek);
}
function edit($data){
    global $konek;
    // siapkan data
    $id_product = $data['id_product'];
    $product = $data['product'];
    $price = $data['price'];
    // query
    query("UPDATE product SET product.name = '$product', product.price = '$price' WHERE id = '$id_product'");
    return mysqli_affected_rows($konek);
}
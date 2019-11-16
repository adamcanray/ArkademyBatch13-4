<?php
// 
require 'functions.php';
// ambil id
$id = $_GET['id'];

// 
if (hapus($id) > 0) {
	//menampilkan alert jika berhasil
	echo "
		<script>
			alert('data berhasil dihapus!');
			document.location.href = 'index.php';
			// redirect ke index.php
		</script>
	";
} else {
	//menampilkanalert jika berhasil
	echo "
		<script>
			alert('data gagal dihapus!');
			document.location.href = 'index.php?';
			//redirect ke index.php
		</script>
	";
}

?>
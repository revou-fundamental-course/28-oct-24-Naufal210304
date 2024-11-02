function calculateBMI() {
    const berat = parseFloat(document.getElementById("Berat-Badan").value);
    const tinggi = parseFloat(document.getElementById("Tinggi-Badan").value) / 100; // convert cm to m

    // Menentukan kategori BMI dan saran
    let kategori = '';
    let saran = '';

    if (berat > 0 && tinggi > 0) {
        const bmi = berat / (tinggi * tinggi);
        document.querySelector(".nilai").textContent = bmi.toFixed(2); // Tampilkan BMI yang dihitung

        // Kategori BMI
        if (bmi < 18.5) {
            kategori = "Kekurangan berat badan";
            saran = "Untuk mengatasi kekurangan berat badan, disarankan untuk berkonsultasi dengan ahli gizi, meningkatkan asupan kalori dengan memilih makanan bergizi seperti kacang-kacangan, avokad, daging tanpa lemak, dan produk susu, serta makan lebih sering dalam porsi kecil; disarankan juga untuk melakukan latihan kekuatan, memantau perkembangan berat badan, mengelola stres, dan membuat rencana menu yang seimbang, serta mempertimbangkan penggunaan suplemen nutrisi jika diperlukan.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            kategori = "Normal";
            saran = "Berat badan Anda ideal. Untuk mempertahankan berat badan ideal, penting untuk menjaga pola makan seimbang yang kaya akan nutrisi, seperti sayuran, buah-buahan, protein tanpa lemak, dan biji-bijian, serta terus berolahraga secara teratur, terutama latihan kardiovaskular dan kekuatan, sambil memantau asupan kalori agar tetap seimbang dengan pengeluaran energi, serta mengelola stres dan tidur yang cukup untuk mendukung kesehatan secara keseluruhan.";
        } else if (bmi >= 25 && bmi < 29.9) {
            kategori = "Kelebihan berat badan";
            saran = "Anda mungkin perlu mempertimbangkan pola hidup lebih sehat.Penyakit yang disebabkan oleh Badan yang gemuk diantaranya : Penyakit jantung koronerStroke,Diabetes melitus tipe 2,Hipertensi (tekanan darah tinggi),Kanker payudara,Perlemakan hati,Penyakit kandung empedu,Ginjal,Prostat,Varises";
        } else {
            kategori = "Obesitas";
            saran = "Untuk mengatasi obesitas, disarankan untuk berkonsultasi dengan ahli gizi atau dokter untuk mendapatkan rencana penurunan berat badan yang aman dan efektif, meningkatkan asupan makanan sehat seperti sayuran, buah-buahan, dan protein tanpa lemak sambil mengurangi konsumsi makanan tinggi lemak dan gula, serta menerapkan kebiasaan makan yang lebih baik dengan makan perlahan dan memperhatikan porsi; selain itu, penting untuk rutin berolahraga, seperti latihan kardiovaskular dan kekuatan, dan memantau perkembangan berat badan untuk mencapai tujuan penurunan berat badan yang realistis dan berkelanjutan.";
        }

        // Update hasil ke elemen HTML
        document.querySelector(".result-card h3").textContent = kategori; // Tampilkan kategori BMI
        document.querySelector(".advice p").textContent = saran; // Tampilkan saran berdasarkan BMI
    } else {
        alert("Mohon isi semua data!");
    }
}

function resetForm() {
    document.querySelector("form").reset();
    document.querySelector(".nilai").textContent = "0"; // Reset nilai BMI
    document.querySelector(".result-card h3").textContent = ""; // Reset kategori
    document.querySelector(".advice p").textContent = ""; // Reset saran
}

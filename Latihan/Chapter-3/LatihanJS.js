// 3.1 Dasar JS

// Buatlah sebuah object constant bernama steamAccount
// Attribute steamAccount: email, password, isVerified, wallet, games (array of objects), friends (array of object steamAccount)
// Attribute setiap object games: name, rank (string)
// Tampilkan (console log) rank game pertama dari teman pertama

function steamAccountFunc() {
    steamAccount = {
        email : 'email@email.com',
        password : 'pass',
        isVerified : true,
        wallet : 5000000,
        games : [
            'Pokémon Legends: Arceus',
            'Uncharted: Legacy of Thieves',
            'Strange Horticulture'
        ],
        friends : [
            {
                email : 'email@email.com',
                password : 'pass',
                isVerified : true,
                wallet : 5000000,
                games : [
                    'Pokémon Legends: Arceus',
                    'Uncharted: Legacy of Thieves',
                    'Strange Horticulture'
                ]
            },
            {
                email : 'email@email.com',
                password : 'pass',
                isVerified : true,
                wallet : 5000000,
                games : [
                    'Pokémon Legends: Arceus',
                    'Uncharted: Legacy of Thieves',
                    'Strange Horticulture'
                ]
            },
            {
                email : 'email@email.com',
                password : 'pass',
                isVerified : true,
                wallet : 5000000,
                games : [
                    'Pokémon Legends: Arceus',
                    'Uncharted: Legacy of Thieves',
                    'Strange Horticulture'
                ]
            },
        ]
    }

    console.log(steamAccount['friends'][0]['games'][0])
}

//------------------------------------------------------------------------------------------------------------------------
// 3.2 Operator JS

// Buatlah sebuah variabel integer x dan y, lakukan penjumlahan terhadap kedua variabel tersebut lalu lakukan pengecekan,
// apabila hasilnya lebih dari 0 maka lakukan pengecekan lagi, jika hasilnya habis dibagi 2 maka tuliskan pesan
// “Angka lebih dari 0 dan habis dibagi 2”. Jika tidak tuliskan “Angka tidak lebih dari 0”.

// Selesaikan menggunakan ternary operator!

function ternaryOperator(x, y) {
    let x = 1, y = 2
    console.log((x + y) > 0 ?( ((x + y) % 2) == 0 ? 'Angka lebih dari 0 dan habis dibagi 2' : 'Angka lebih dari 0 dan tidak habis dibagi 2' ): 'Angka tidak lebih dari 0' )
}

// Yudi ingin menarik uang sebanyak X rupiah dari ATM. Mesin ATM hanya akan menerima transaksi jika X kelipatan 5
// dan saldo rekening Yudi memiliki cukup uang untuk melakukan transaksi penarikan (termasuk biaya bank). Untuk
// setiap penarikan yang berhasil, bank mengenakan biaya 0,5 rupiah.
// Diberikan X adalah uang yang ingin yudi tarik dan Y adalah jumlah uang dalam rekening Yudi. Ayo hitung saldo
// akun Yudi setelah melakukan transaksi!

function soalSatu (){
    let x = 5, y = 100
    if ( y-x >= 0.5 ){
        if ( x%5 === 0){
            y= y-x
        }
    } 
    y = y-0.5
    console.log(y)
}

// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// ● - A : 91 - 100
// ● - B : 81 - 90
// ● - C : 71 - 80
// ● - D : 61 - 70
// ● - E : <= 60\
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

function soalDua (){
  let nilai = 90
  console.log(nilai >= 91 ? "A" : nilai >= 81 ? "B" : nilai >= 71 ? "C" : nilai >= 61 ? "D" : "E")
}

// Diberikan sebuah string alamat IP yang valid. Untuk
// setiap tanda . pada alamat IP gantilah menjadi tanda ()

function soalTiga(){
    let IPAddress = "www.google.com"
    let newIPAddress = ""
    for( let i = 0; i < IPAddress.length; i++){
        if (IPAddress[i] === "."){
            newIPAddress = newIPAddress + "()"
        }else{
            newIPAddress = newIPAddress + IPAddress[i]
        }
    }
    console.log(newIPAddress)
}

// Diberikan sebuah angka n, jumlahkanlah
// masing-masing digit pada angka tersebut.

function soalEmpat (){
    let n = 2022
    let textN = n.toString()
    let sumOfN = 0
    for(let i=0;i<textN.length;i++){
        sumOfN = sumOfN + parseInt(textN[i])
    }
    console.log(sumOfN)
}


// Diberikan sebuah string s. Tentukan apakah terdapat
// karakter `a` dan `b` yang jarak `a ke b` atau `b ke a`
// yang memiliki jarak minimal 3 karakter.
// Return "YES" jika ya dan "NO" jika tidak.

function soalLima (){
    let kata = "acabACABAcaB"
    let indexA = [], indexB = []
    for ( let i = 0; i < kata.length ; i++ ){
        if ( kata[i].toLowerCase() === "a" ){
      indexA.push(i)
    }
    
    if ( kata[i].toLowerCase() === "b" ){
        indexB.push(i)
        console.log("B")
    }
}
console.log("A", indexA)
console.log("B", indexB)
loop1 :
for (let i=0;i<indexA.length;i++){
    loop2 :
    for (let j=0;j<indexB.length;j++){
        if (Math.abs(indexA[i] - indexB[j]) >= 3){
            console.log("FOUND A at index: ", indexA[i], " and B at index: ", indexB[j])
            break loop1
        }
    }
}
}

//------------------------------------------------------------------------------------------------------------------------
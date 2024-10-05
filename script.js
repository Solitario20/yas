let nov = prompt('Zəhmət olmasa, alacağınız geyimin növünü təyin edin(məs:Şalvar)')
let olcu = prompt('Zəhmət olmasa, geyimin ölçüsünü daxil edin')
let reng = prompt('Zəhmət olmasa, istədiyiniz rəngi qeyd edin')
let qiymet = prompt('Zəhmət olmasa, ala biləcəyiniz qiyməti daxil edin')
let netice;
if (qiymet < 21) {
    netice = `Mağaza yazısını klik edərək seçim edə bilərsiniz`
}
else {
    netice = `Bu geyim 20 manatdan baha olduğu üçün almağınız qeyri-mümkündür`
}
document.getElementById('yas').innerHTML = netice
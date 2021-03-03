var divApps = new Vue({
  el: "#divApps",
  data: {
    developer: "Rizka Junainah",
  },
  methods: {
    pengujianAtc: function () {
      $("#divUtama").load("pengujian.html");
      $(".button-collapse").sideNav("hide");
    },
    daftarPenyakitAtc: function () {
      $("#divUtama").load("daftarPenyakit.html");
      $(".button-collapse").sideNav("hide");
    },
  },
});


// Inisialisasi 
$(".materialboxed").materialbox();
$(".button-collapse").sideNav();
$("select").material_select();
var loading = "<div class='progress'><div class='indeterminate'></div></div>";
$("#divUtama").html(loading);
$("#divUtama").load("utama.html");
$("#judulApps").html("Aplikasi Pencarian Hadist Shahih, Hasan, Dha'if, dan Maudhu'");

function updateSistem() {
  $("#divUtama").load("");
  Materialize.toast("Tak ada respon dari server", 1100);
}



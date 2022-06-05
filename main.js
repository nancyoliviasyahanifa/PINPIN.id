setInterval(function () {
  fetch("http://localhost/api")
    .then((hasil) => hasil.json())
    .then((res) => {
      console.log(res);
      document.getElementById("pintu").innerHTML = res.PINTU;
      document.getElementById("nama").innerHTML = res.NAMA;
    });
}, 1000);
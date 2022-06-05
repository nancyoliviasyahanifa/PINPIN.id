setInterval(function () {
  fetch("https://pinpin-cps.herokuapp.com/api")
    .then((hasil) => hasil.json())
    .then((res) => {
      console.log(res);
      document.getElementById("pintu").innerHTML = res.PINTU;
      document.getElementById("nama").innerHTML = res.NAMA;
      document.getElementById("uid").innerHTML = res.UID_KTM;
      document.getElementById("uid").innerHTML = res.UID_KTP;
      document.getElementById("uid").innerHTML = res.UID_WHITECARD;
    });
}, 1000);
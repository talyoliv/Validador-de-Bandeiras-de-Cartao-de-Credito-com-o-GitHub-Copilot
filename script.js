function checkCard() {
  const cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, '');
  const result = document.getElementById("result");

  const bandeiras = [
    { nome: "Visa", regex: /^4\d{12}(\d{3})?$/, icone: '<i class="fa-brands fa-cc-visa"></i>' },
    { nome: "MasterCard", regex: /^(5[1-5]\d{14}|2(2[2-9]|[3-6]\d|7[01])\d{12})$/, icone: '<i class="fa-brands fa-cc-mastercard"></i>' },
    { nome: "American Express", regex: /^3[47]\d{13}$/, icone: '<i class="fa-brands fa-cc-amex"></i>' },
    { nome: "Diners Club", regex: /^3(0[0-5]|[68]\d)\d{11}$/, icone: '<i class="fa-brands fa-cc-diners-club"></i>' },
    { nome: "Discover", regex: /^6(?:011|5\d{2})\d{12}$/, icone: '<i class="fa-brands fa-cc-discover"></i>' },
    { nome: "JCB", regex: /^(?:352[89]|35[3-8]\d)\d{12}$/, icone: '<i class="fa-brands fa-cc-jcb"></i>' },
    { nome: "HiperCard", regex: /^(38|60)\d{11,17}$/, icone: '💳' },
    { nome: "Aura", regex: /^50\d{17}$/, icone: '💳' },
    { nome: "Voyager", regex: /^8699\d{11}$/, icone: '💳' },
    { nome: "EnRoute", regex: /^(2014|2149)\d{11}$/, icone: '💳' }
  ];

  const bandeira = bandeiras.find(b => b.regex.test(cardNumber));

  result.innerHTML = bandeira
    ? `Bandeira: ${bandeira.nome} ${bandeira.icone}`
    : "Bandeira não identificada 😢";
}

function clearFields() {
  document.getElementById("cardNumber").value = "";
  document.getElementById("result").innerHTML = "";
}

    
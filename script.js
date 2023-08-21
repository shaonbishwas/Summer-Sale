function addCardName(name) {
  const parent = document.getElementById("add-card-name");
  const count = parent.childElementCount;
  const li = document.createElement("li");
  li.innerText = `${count + 1}. ${name}`;
  parent.appendChild(li);
}
function calculateCost(cost) {
  const totalPriceText = document.getElementById("total-price");
  const totalPrice = cost + parseFloat(totalPriceText.innerText);
  const totalText = document.getElementById("total");
  totalText.innerText = totalPrice.toFixed(2);
  if (totalPrice > 0) {
    const purchaseBtn = document.getElementById("purchase");
    purchaseBtn.removeAttribute("disabled");
  }
  if (totalPrice > 199) {
    const purchaseBtn = document.getElementById("apply");
    purchaseBtn.removeAttribute("disabled");
    purchaseBtn.addEventListener("click", function () {
      const tCost = document.getElementById("total-price").innerText;
      const coupon = document.getElementById("coupon-input");
      if (coupon.value === "SELL200") {
        const discountText = document.getElementById("discount");
        const totalText = document.getElementById("total");
        const discountAmount = parseFloat(tCost) * 0.2;
        discountText.innerText = discountAmount.toFixed(2);
        const finalPrice = parseFloat(tCost) - discountAmount;
        totalText.innerText = finalPrice.toFixed(2);
        coupon.value = "";
      }
    });
  }

  totalPriceText.innerText = totalPrice.toFixed(2);
}

const items = document.getElementsByClassName("card");

for (const item of items) {
  item.addEventListener("click", function () {
    const itemName = item.querySelector("h1");
    const itemCost = parseFloat(item.querySelector("span").innerText);
    calculateCost(itemCost);
    addCardName(itemName.innerText);
  });
}
document.getElementById("go-home").addEventListener("click", function () {
  location.reload();
});

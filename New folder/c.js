const Cme = document.getElementById("Cme");
const CmyA = document.getElementById("CmyA")
const my_checkbox = document.getElementById("my-checkbox")
Cme.style.display = "block";
CmyA.style.display = "none";
my_checkbox.addEventListener("change", function () {
    if (my_checkbox.checked) {
        Cme.style.display = "none";
        CmyA.style.display = "block";
    } else {
        Cme.style.display = "block";
        CmyA.style.display = "none";
    }
});
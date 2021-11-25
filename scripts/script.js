const caesarSelect = document.getElementById("select-caesar");
const polybiusSelect = document.getElementById("select-polybius");
const substitutionSelect = document.getElementById("select-substitution");
const caesarBlock = document.getElementById("caesar-block");
const polybiusBlock = document.getElementById("polybius-block");
const substitutionBlock = document.getElementById("substitution-block");

caesarSelect.addEventListener("click", () => {
  !caesarSelect.classList.contains("btn-active") &&
    caesarSelect.classList.add("btn-active");

  polybiusSelect.classList.remove("btn-active");
  substitutionSelect.classList.remove("btn-active");

  caesarBlock.classList.remove("hidden");
  polybiusBlock.classList.add("hidden");
  substitutionBlock.classList.add("hidden");
});

polybiusSelect.addEventListener("click", () => {
  !polybiusSelect.classList.contains("btn-active") &&
    polybiusSelect.classList.add("btn-active");

  caesarSelect.classList.remove("btn-active");
  substitutionSelect.classList.remove("btn-active");

  caesarBlock.classList.add("hidden");
  polybiusBlock.classList.remove("hidden");
  substitutionBlock.classList.add("hidden");
});

substitutionSelect.addEventListener("click", () => {
  !substitutionSelect.classList.contains("btn-active") &&
    substitutionSelect.classList.add("btn-active");

  caesarSelect.classList.remove("btn-active");
  polybiusSelect.classList.remove("btn-active");

  caesarBlock.classList.add("hidden");
  polybiusBlock.classList.add("hidden");
  substitutionBlock.classList.remove("hidden");
});

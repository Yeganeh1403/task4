const birth = document.getElementById("birth");
const par = document.getElementById("par");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const birthD = birth.value;
    const year = Number(birthD.slice(0, 4));
    const month = Number(birthD.slice(4, 6));
    const day = Number(birthD.slice(6));

    const currentDate = new Date();
    let ageYear = currentDate.getFullYear() - year;
    let ageMonth = currentDate.getMonth() + 1 - month;
    let ageDay = currentDate.getDate() - day;

    if (ageDay < 0) {
        ageMonth--;
        ageDay += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }

    par.textContent = `You are ${ageYear} years, ${ageMonth} months, and ${ageDay} days old`;
});
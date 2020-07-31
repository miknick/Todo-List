
const settingDateAsToday = () => {
    var field = document.querySelector("#date");
    var date = new Date();

    // Set the date
    field.value = date.getFullYear().toString() + '-' +
        (date.getMonth() + 1).toString().padStart(2, 0) + '-' +
        date.getDate().toString().padStart(2, 0);
}
export { settingDateAsToday }
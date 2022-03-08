let instructor = {
    full_name: {
        first_name: "Ibrahim",
        last_name: "Altay"
    },
    age: 28,
    truth: true,
    sheets: ["HTML", "CSS"],
    a: null,

    name: function() {
        return this.full_name.first_name + " " + this.full_name.last_name;
    }
};

let tools = ["Selenium", "Cypress", "Protractor"];

const string = tools.toString();

const join = tools.join(" * ");


tools.forEach((x)=>{
    if (x == "Cypress") {
        console.log("Element found");
    } else {
        console.log("Element not found");
    }
});
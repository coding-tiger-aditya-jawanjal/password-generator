import "./style.css";

const output = document.getElementById("output");
const minus = document.getElementById("minus");
const num = document.getElementById("num");
const add = document.getElementById("add");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");

const tags = {
	low: false,
	upp: true,
	sym: false,
	num: false,
};

const handleAddInput = (tag) => {
	if (tag.id === "upper") {
		tags.upp = true;
	}
	if (tag.id === "lower") {
		tags.low = true;
	}
	if (tag.id === "number") {
		tags.num = true;
	}
	if (tag.id === "symbol") {
		tags.sym = true;
	}
};

const handleRemoveInput = (tag) => {
	if (tag.id === "upper") {
		tags.upp = false;
	}
	if (tag.id === "lower") {
		tags.low = false;
	}
	if (tag.id === "number") {
		tags.num = false;
	}
	if (tag.id === "symbol") {
		tags.sym = false;
	}
};

const handleAdd = () => {
	let numVal = parseInt(num.innerText);
	if (numVal > 20) {
		return;
	}
	num.innerText = String(numVal + 1);
};

const handleMinus = () => {
	let numVal = parseInt(num.innerText);
	if (numVal < 7) {
		return;
	}
	num.innerText = String(numVal - 1);
};

const handleGeneratePassword = () => {
	let dict = "";

	if (tags.upp) dict += "QWERTYUIOPASDFGHJKLZXCVBNM";
	if (tags.low) dict += "qwertyuiopasdfghjklzxcvbnm";
	if (tags.num) dict += "0123456789";
	if (tags.sym) dict += "!@#$%&";
	copy.innerHTML = `<i class="fa-regular fa-copy mr-2" ></i>Copy`;
	let pass = "";
	for (let i = 0; i < parseInt(num.innerText); i++) {
		const element = Math.floor(Math.random() * dict.length);
		pass += dict[element];
	}
	output.innerText = pass;
};

const handleToggleColor = (tag) => {
	if (tag.classList.value.includes("bg-green-500")) {
		tag.classList.remove("bg-green-500");
		tag.classList.add("bg-gray-400");
		handleRemoveInput(tag);
	} else {
		tag.classList.remove("bg-gray-400");
		tag.classList.add("bg-green-500");
		handleAddInput(tag);
	}
};

const handleCopy = () => {
	navigator.clipboard
		.writeText(output.innerText)
		.then(() => {
			copy.innerHTML = `<i class="fa-regular fa-copy mr-2" ></i>Copied !`;
		})
		.catch((err) => {
			alert(err.message);
		});
};

upper.addEventListener("click", () => handleToggleColor(upper));
lower.addEventListener("click", () => handleToggleColor(lower));
symbol.addEventListener("click", () => handleToggleColor(symbol));
number.addEventListener("click", () => handleToggleColor(number));

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

generate.addEventListener("click", handleGeneratePassword);
copy.addEventListener("click", handleCopy);

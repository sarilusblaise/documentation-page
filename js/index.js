const DomElement = (selector) => {
	try {
		if (document.querySelector(selector))
			return document.querySelector(selector);
		throw new Error(`${selector} does'nt exist or it's not a valid selector`);
	} catch (err) {
		console.log(err);
	}
};

const closeBtn = DomElement("#close-btn");
const openBtn = DomElement("#open-btn");
const navbar = DomElement("#navbar");
const display = DomElement(".display");

display.addEventListener("click", function (event) {
	const id = event.target.id;
	console.log(id);
	if (id == "bar-open") {
		navbar.classList.remove("hide-navbar");
	} else {
		navbar.classList.add("hide-navbar");
	}
});

closeBtn.addEventListener("click", () => {
	navbar.classList.add("hide-navbar");
});

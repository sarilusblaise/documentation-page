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
const onLightBtn = DomElement(".light-btn-on");
const offLightBtn = DomElement(".light-btn-off");
const linkItems = document.querySelectorAll(".link-item");

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

onLightBtn.addEventListener("click", () => {
	document.body.classList.add("dark-mode");
	offLightBtn.classList.remove("hide-btnLightDarkMode");
	onLightBtn.classList.add("hide-btnLightDarkMode");
});

offLightBtn.addEventListener("click", () => {
	document.body.classList.remove("dark-mode");
	offLightBtn.classList.add("hide-btnLightDarkMode");
	onLightBtn.classList.remove("hide-btnLightDarkMode");
});

navbar.addEventListener("click", (event) => {
	const classList = event.target.classList;
	if (classList.contains("nav-link")) {
		linkItems.forEach((item) => {
			item.classList.remove("active");
		});
		event.target.parentNode.classList.add("active");
	}
});

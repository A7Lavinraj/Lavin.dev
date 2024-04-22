const YOUR_SERVICE_ID = "service_kf8mc9u";
const YOUR_TEMPLATE_ID = "template_cb3h6in";
const YOUR_PUBLIC_ID = "ubHAt0bvrEN3KxEoS";

const elements = document.querySelectorAll(".hidden");
const navbarLarge = document.querySelector(".navbar#large");
const navbarSmall = document.querySelector(".navbar#small");
const cursor = document.querySelector(".cursor");
const works = document.querySelectorAll(".img-container img");
const popup = document.querySelector(".popup");

function onSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.srcElement);

  try {
    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {
      from_name: data.get("username"),
      from_email: data.get("email"),
      message: data.get("message"),
    });
  } catch (error) {
    console.error(error);
  }

  event.target.reset();
  popup.classList.add("visible");
  setTimeout(() => popup.classList.remove("visible"), 3000);
}

function onWindowLoad() {
  let thresoldHeight = (window.innerHeight / 5) * 4;

  if (navbarLarge.getBoundingClientRect().bottom < 0)
    navbarSmall.classList.add("show");
  else navbarSmall.classList.remove("show");

  elements.forEach((element) => {
    if (thresoldHeight > element.getBoundingClientRect().top)
      element.classList.add("show");
  });
}

/* Hamburger toggle functionality */

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".sidebar-list").classList.toggle("open");
});

/* Window load event */

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader-container").classList.toggle("hidden");
    document.querySelector(".hero-section").classList.toggle("load");
    document.querySelector(".navbar#large").classList.toggle("load");
    setTimeout(onWindowLoad, 500);
  }, 3200);

  emailjs.init(YOUR_PUBLIC_ID);
  document.querySelector("form").addEventListener("submit", onSubmit);

  window.addEventListener("scroll", onWindowLoad);

  window.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  works.forEach((work) => {
    work.addEventListener("mouseover", () => {
      cursor.style.padding = "4rem";
      cursor.style.fontSize = "1rem";
      cursor.firstElementChild.style.width = "1rem";
    });

    work.addEventListener("mouseout", () => {
      cursor.style.padding = "0rem";
      cursor.style.fontSize = "0rem";
      cursor.firstElementChild.style.width = "0rem";
    });
  });
});

const linksURL = "https://yourgithubusername.github.io/wdd230/data/links.json";

const section = document.querySelector(".lessons");
const h3 = document.createElement("h3");
const ul = document.createElement("ul");

h3.textContent = "Learning Activities";

section.appendChild(h3);

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (data) => {
    data.lessons.forEach(lesson => {
        lesson.links.forEach(link => {
            let li = document.createElement("li");
            let a = document.createElement("a");

            a.setAttribute("href", link.url);
            a.setAttribute("target", "_blank");
            a.textContent = `${lesson.lesson}: ${link.title}`;

            li.appendChild(a);
            ul.appendChild(li);
        });
    });
    section.appendChild(ul);
}

getLinks();

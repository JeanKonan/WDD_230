
const baseURL = "https://jeanKonan.github.io/wdd230/";
const membersURL = "https://jeanKonan.github.io/wdd230/data/members.json";
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const directory = document.querySelector(".directory_list");

grid.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
    getLinks(displayMembersGrid); // Call getLinks with displayMembersGrid as the callback
});

list.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
    getLinks(displayMembersList); // Call getLinks with displayMembersList as the callback
});

async function getLinks(callback) {
    const response = await fetch(membersURL);
    const data = await response.json();
    callback(data); // Call the callback function with the data
}

const displayMembersGrid = (data) => {
    directory.innerHTML = ''; // Clear the directory
    data.member.forEach(member => {
        
        let section = document.createElement("section");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let icon = document.createElement("img");
        let membership = document.createElement("p");
        let info = document.createElement("p");
        
        section.setAttribute("id", "cards")

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        website.textContent = `${member.website}`;
    
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', `Logo of ${member.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '340');
        icon.setAttribute('height', '440');
            
        membership.textContent = `${member.membershipLevel}`;
        info.textContent = `${member.otherInfo}`;
        
        section.append(icon, name, address, phone, website, membership, info);
        directory.appendChild(section);
    });
}

const displayMembersList = (data) => {

    directory.innerHTML = ''; // Clear the directory
    let ul = document.createElement("ul");

    data.member.forEach(member => {
        
        let li = document.createElement("li");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let membership = document.createElement("p");
        let info = document.createElement("p");
        
        li.setAttribute("id", "line");

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        website.textContent = `${member.website}`;
            
        membership.textContent = `${member.membershipLevel}`;
        info.textContent = `${member.otherInfo}`;

        li.append(name, address, phone, website, membership, info);
        ul.appendChild(li);
    });
    directory.appendChild(ul);
}

// Call getLinks with displayMembersList as the callback when the page loads
getLinks(displayMembersList);

// const membersURL = "data/members.json";
const membersURL = "https://jeanKonan.github.io/wdd230/chamber/data/members.json";

document.addEventListener('DOMContentLoaded', function () {

    fetch(membersURL)
    .then(response => response.json())
    .then(data => {
        var filteredMembers = data.member.filter(function (member) {
            return member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold';
        });
        function shuffle(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
    
        var shuffledMembers = shuffle(filteredMembers);
    
        // Get the spotlights section
        var spotlightsSection = document.querySelector('.spotlights');
    
        // Display two to three random members in the spotlights section
        for (var i = 0; i < Math.min(3, shuffledMembers.length); i++) {
            var member = shuffledMembers[i];
    
            // Create an article element
            var article = document.createElement('article');
    
            // Create an image element
            var img = document.createElement('img');
            img.src = member.icon;
            img.alt = 'Spotlight-' + (i + 1);
    
            // Create an h4 element for the member name
            var h4 = document.createElement('h4');
            h4.className = 'spt-name';
            h4.textContent = member.name;
    
            // Create a div element for the description
            var description = document.createElement('div');
            description.className = 'description';
            description.textContent = member.spotlight;
    
            // Append the elements to the article
            article.appendChild(img);
            article.appendChild(h4);
            article.appendChild(description);
    
            // Append the article to the spotlights section
            spotlightsSection.appendChild(article);
        }
    
    })
    .catch(error => console.error('Error:', error));

});

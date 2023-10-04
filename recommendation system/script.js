document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("recommendation-form");
    const recommendationResults = document.getElementById("recommendation-results");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get user inputs
        const name = document.getElementById("name").value;
        const skills = document.getElementById("skills").value;
        const college = document.getElementById("college").value;

        // Process inputs and generate recommendations
        const recommendations = generateRecommendations(name, skills, college);

        // Display recommendations
        displayRecommendations(recommendations);
    });

    function generateRecommendations(name, skills, college) {
        // Replace with your recommendation generation logic
        return ["Job A", "Job B", "Job C"];
    }

    function displayRecommendations(recommendations) {
        recommendationResults.innerHTML = ""; // Clear previous recommendations

        const resultsHeader = document.createElement("h3");
        resultsHeader.textContent = "Recommended Jobs:";
        recommendationResults.appendChild(resultsHeader);

        const resultList = document.createElement("ul");
        recommendations.forEach(job => {
            const jobItem = document.createElement("li");
            jobItem.textContent = job;
            resultList.appendChild(jobItem);
        });
        recommendationResults.appendChild(resultList);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const contactStatus = document.getElementById("contact-status");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simulate sending the message (replace with actual sending logic)
        setTimeout(() => {
            contactStatus.textContent = `Message sent from ${name} (${email}): ${message}`;
        }, 1000);

        // Clear form fields
        contactForm.reset();
    });
});

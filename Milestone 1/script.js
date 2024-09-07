// Function to toggle visibility of a section
function toggleSection(buttonId, sectionId) {
    var button = document.getElementById(buttonId);
    var section = document.getElementById(sectionId);
    button.addEventListener('click', function () {
        if (section.style.display === 'none') {
            section.style.display = 'block';
            button.textContent = 'Hide';
        }
        else {
            section.style.display = 'none';
            button.textContent = 'Show';
        }
    });
}
// Toggle functionality for each section
toggleSection('toggleSkills', 'skillsSection');
toggleSection('toggleContact', 'contactSection');
toggleSection('toggleObjective', 'objectiveSection');
toggleSection('toggleEducation', 'educationSection');
toggleSection('toggleExperience', 'experienceSection');

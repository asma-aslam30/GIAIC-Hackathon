 function toggleSection(buttonId: string, sectionId: string) {
    const button = document.getElementById(buttonId) as HTMLButtonElement;
    const section = document.getElementById(sectionId) as HTMLElement;
  
    button.addEventListener('click', () => {
      if (section.style.display === 'none') {
        section.style.display = 'block';
        button.textContent = 'Hide';
      } else {
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
  
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        const items = skill.querySelectorAll('li');
        items.forEach(item => {
            let skillWeight = parseFloat(item.dataset.skillWeight); // Get skill-weight parameter
            let gradientColor = calculateGradientColor(skillWeight);
            item.style.background = gradientColor;
        });
    });

    function calculateGradientColor(skillWeight) {
        let lowColor = getComputedStyle(document.documentElement).getPropertyValue('--skill-weight-low');
        let highColor = getComputedStyle(document.documentElement).getPropertyValue('--skill-weight-high');
        let percentage = (skillWeight - 1) * 25; // Calculate percentage based on skill weight range (1-5)
        return `linear-gradient(to right, ${lowColor} 0%, ${highColor} ${percentage}%, ${highColor} 100%)`;
    }


    // const skillsContainer = document.querySelector('#skills');
    // let skills = Array.from(document.querySelectorAll('#skills > div'));

    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // }

    // skills = shuffleArray(skills);
    // skills.forEach(skill => {
    //     skillsContainer.appendChild(skill);
    // });

    // const filterRadios = document.querySelectorAll('input[name="filter"]');
    // filterRadios.forEach(radio => {
    //     radio.addEventListener('change', function() {
    //         const selectedFilter = this.id;

    //         skills.forEach(skill => {
    //             skill.style.display = 'none';
    //         });

    //         if (selectedFilter === 'all') {
    //             skills.forEach(skill => {
    //                 skill.style.display = 'block';
    //             });
    //         } else {
    //             const filteredSkills = document.querySelectorAll(`[skill-type="${selectedFilter}"]`);
    //             filteredSkills.forEach(skill => {
    //                 skill.style.display = 'block';
    //             });
    //         }
    //     });
    // });
});

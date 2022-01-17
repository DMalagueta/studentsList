// School where student study
let h1Title = document.querySelector('h1.title');
let school = document.createElement('span');

school.textContent = ' ETIC';
h1Title.appendChild(school);

// Students course
let h3Title = document.querySelector('h3.title');
let course = document.createElement('span');

course.textContent = 'Web Developement ';
h3Title.insertBefore(course, h3Title.firstChild);


// Students List
let students = [
    {   
        number: '2',
        name: 'Rodrigo Lucas',
        schoolNumber: '11692',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '4',
        name: 'Fabio Cristovao',
        schoolNumber: '11706',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '6',
        name: 'Diogo Malagueta',
        schoolNumber: '11712',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '8',
        name: 'Joao Gonçalves',
        schoolNumber: '11855',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '10',
        name: 'Miguel Silva',
        schoolNumber: '11939',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '12',
        name: 'Nuno Cunha',
        schoolNumber: '11987',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '14',
        name: 'Andressa Ferreira',
        schoolNumber: '12010',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '16',
        name: 'Mariia Popadiuk',
        schoolNumber: '12021',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '18',
        name: 'Gonçalo Dias',
        schoolNumber: '12047',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '20',
        name: 'Frederico Dias',
        schoolNumber: '06255',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '22',
        name: 'Tomas Nascimento',
        schoolNumber: '12048',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '24',
        name: 'David Simoes',
        schoolNumber: '12067',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '26',
        name: 'Paulo Sequeira',
        schoolNumber: '12076',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '28',
        name: 'Sofia Moreira',
        schoolNumber: '12077',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '30',
        name: 'Mafalda Santos',
        schoolNumber: '12078',
        photo: 'https://via.placeholder.com/150'
    },
    {   
        number: '32',
        name: 'Diogo Lopes',
        schoolNumber: '12079',
        photo: 'https://via.placeholder.com/150'
    }

];

// Testing array
students.map( student => console.log(`${student.number} - ${student.name}`));

let grid = document.querySelector('section.grid');

students.map( student => {

    grid.innerHTML += `
        <article>
            <img src="${student.photo}">
            <h1>N.º ${student.number} - ${student.name}</h1>
            <p>${student.schoolNumber}<p>
        
        
        </article>
    
    
    
    `;




})
// const specialtyPhysicians = [
//     {
//         id: 1,
//         first_name: "clara",
//         last_name: "burke",
//         specialty: "maternal, fetal medicine",
//         img: "../images/face-9.jpg",
//         gender: "female"
//     },
//     {
//         id: 2,
//         first_name: "geneva",
//         last_name: "curtis",
//         specialty: "cardiology",
//         img: "../images/face-10.jpg",
//         gender: "female"
//     },
//     {
//         id: 3,
//         first_name: "meghan",
//         last_name: "brewer",
//         specialty: "gastroenterology",
//         img: "../images/face-11.jpg",
//         gender: "female"
//     },
//     {
//         id: 4,
//         first_name: "vernon",
//         last_name: "owens",
//         specialty: "family medicine",
//         img: "../images/face-12.jpg",
//         gender: "male"
//     },
//     {
//         id: 5,
//         first_name: "lynne",
//         last_name: "green",
//         specialty: "pediatrics",
//         img: "../images/face-13.jpg",
//         gender: "female"
//     },
//     {
//         id: 6,
//         first_name: "heather",
//         last_name: "sherman",
//         specialty: "internal medicine",
//         img: "../images/face-14.jpg",
//         gender: "female"
//     }
// ];

// window.addEventListener("DOMContentLoaded", () => {
//     let specialtiesGrid = document.querySelector(".specialties-grid");

//     let specialtiesMap = specialtyPhysicians.map((specialty) => {
//         return `<div class="specialties-grid-item">
//                     <img src="${specialty.img}" alt="physician-photo" class="physician-img">
//                     <p>${specialty.specialty}</p>
//                 </div>`;
//     });
//     specialtiesMap = specialtiesMap.join("");
//     specialtiesGrid.innerHTML = specialtiesMap;
// });

// ====================== //
// ====================== //

// const physicians = [
//     {
//         id: 1,
//         first_name: "steven",
//         last_name: "santiago",
//         specialty: "podiatry",
//         img: "../images/face-1.jpg",
//         gender: "male"
//     },
//     {
//         id: 2,
//         first_name: "jan",
//         last_name: "sharp",
//         specialty: "nephrology",
//         img: "../images/face-2.jpg",
//         gender: "female"
//     },
//     {
//         id: 3,
//         first_name: "joy",
//         last_name: "mckenzie",
//         specialty: "pulmonology",
//         img: "../images/face-3.jpg",
//         gender: "female"
//     },
//     {
//         id: 4,
//         first_name: "sophie",
//         last_name: "mccormik",
//         specialty: "general surgery",
//         img: "../images/face-4.jpg",
//         gender: "female"
//     },
//     {
//         id: 5,
//         first_name: "dave",
//         last_name: "morrison",
//         specialty: "neurosurgery",
//         img: "../images/face-5.jpg",
//         gender: "male"
//     },
//     {
//         id: 6,
//         first_name: "leigh",
//         last_name: "morton",
//         specialty: "internal medicine",
//         img: "../images/face-6.jpg",
//         gender: "female"
//     },
//     {
//         id: 7,
//         first_name: "jamie",
//         last_name: "rodgers",
//         specialty: "urology",
//         img: "../images/face-7.jpg",
//         gender: "male"
//     },
//     {
//         id: 8,
//         first_name: "horace",
//         last_name: "roberts",
//         specialty: "anesthesiology",
//         img: "../images/face-8.jpg",
//         gender: "female"
//     },
//     {
//         id: 9,
//         first_name: "clara",
//         last_name: "burke",
//         specialty: "maternal, fetal medicine",
//         img: "../images/face-9.jpg",
//         gender: "female"
//     },
//     {
//         id: 10,
//         first_name: "geneva",
//         last_name: "curtis",
//         specialty: "cardiology",
//         img: "../images/face-10.jpg",
//         gender: "female"
//     },
//     {
//         id: 11,
//         first_name: "meghan",
//         last_name: "brewer",
//         specialty: "gastroenterology",
//         img: "../images/face-11.jpg",
//         gender: "female"
//     },
//     {
//         id: 12,
//         first_name: "vernon",
//         last_name: "owens",
//         specialty: "family medicine",
//         img: "../images/face-12.jpg",
//         gender: "male"
//     },
//     {
//         id: 13,
//         first_name: "lynne",
//         last_name: "green",
//         specialty: "pediatrics",
//         img: "../images/face-13.jpg",
//         gender: "female"
//     },
//     {
//         id: 14,
//         first_name: "heather",
//         last_name: "sherman",
//         specialty: "internal medicine",
//         img: "../images/face-14.jpg",
//         gender: "female"
//     },
//     {
//         id: 15,
//         first_name: "johnathan",
//         last_name: "erikson",
//         specialty: "gynecology",
//         img: "../images/face-15.jpg",
//         gender: "male"
//     },
//     {
//         id: 16,
//         first_name: "joe",
//         last_name: "chandler",
//         specialty: "dermatology",
//         img: "../images/face-16.jpg",
//         gender: "male"
//     },
//     {
//         id: 17,
//         first_name: "angelina",
//         last_name: "collins",
//         specialty: "neurology",
//         img: "../images/face-17.jpg",
//         gender: "female"
//     }
// ];

// let resultsGrid = document.querySelector(".results-grid");

// let physicianMap = physicians.map((physician) => {
//     return `<div class="results-grid-item result">
//                     <img src="${physician.img}" alt="physician-photo" class="physician-img">
//                     <h3>${physician.first_name} ${physician.last_name}</h3>
//                     <p>${physician.specialty}</p>
//                 </div>`;
// });
// physicianMap = physicianMap.join("");
// resultsGrid.innerHTML = physicianMap;

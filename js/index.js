const reviews = [
  {
    id: 1,
    company: "TechSavvy Analytics",
    review: "QuickSQL has transformed our data analysis process. With their instant SQL prompts, we now effortlessly uncover valuable insights that drive our informed business decisions effectively.",
    person: "Emily Williams, Data Analyst",
    img: "./img/image-3.png"
  },
  {
    id: 2,
    company: "HealthTech Solutions",
    review: "HealthTech Solutions relies on the instant SQL prompts from this service to streamline our healthcare data analysis. It's become an essential tool in providing actionable insights to improve patient care.",
    person: "Dr. David Roberts, Chief Medical Officer",
    img: "./img/image-4.png"
  },
  {
    id: 3,
    company: "RetailGenius Insights",
    review: "QuickSQL has revolutionized how we understand customer behavior. Their instant SQL prompts empower our retail team to quickly extract valuable trends, helping us optimize our inventory and sales strategies.",
    person: "Sarah Thompson, Retail Operations Manager",
    img: "./img/image-5.png"
  }
];

// Select items
const company = document.getElementById('company');
const review = document.getElementById('review');
const person = document.getElementById('person');
const img = document.getElementById('person-img');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Set starting item
let currentItem = 0;

// Show person based on item
function showReview(){
  const item = reviews[currentItem];
  company.textContent = item.company;
  review.textContent = `"${item.review}"`;
  person.textContent = item.person;
  img.src = item.img;
  img.alt = `Image of ${item.person}`; 
};

// Load initial item
window.addEventListener('DOMContentLoaded', function() {
  showReview();
});

// Show next review
nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showReview();
});

// Show previous review
prevBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showReview();
})


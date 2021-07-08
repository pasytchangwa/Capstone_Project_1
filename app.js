// Mobile Menu
const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('#close-btn');
const getSidebar = document.querySelector('#sidebar');
// show sidebar
openNav.addEventListener('click', () => {
  getSidebar.classList.add('show-sidebar');
});
closeNav.addEventListener('click', () => {
  getSidebar.classList.remove('show-sidebar');
});

// DYNANMIC SECTION :Creating the speaker object
const image1 = document.createElement('img');
image1.src = '../assets/image-main/picture1.jpg';
const image2 = document.createElement('img');
image2.src = '../assets/image-main/picture2.jpg';
const image3 = document.createElement('img');
image3.src = '../assets/image-main/picture3.jpg';
const image4 = document.createElement('img');
image4.src = '../assets/image-main/picture4.jpg';
const image5 = document.createElement('img');
image5.src = '../assets/image-main/picture5.png';
const image6 = document.createElement('img');
image6.src = '../assets/image-main/picture6.jpg';
// create speaker name
const speakerName1 = document.createElement('p');
speakerName1.innerHTML = 'Max Chuard, Temenos';
const speakerName2 = document.createElement('p');
speakerName2.innerHTML = 'Hardeep Gulati';
const speakerName3 = document.createElement('p');
speakerName3.innerHTML = 'Sanga Viswanathan';
const speakerName4 = document.createElement('p');
speakerName4.innerHTML = 'Bernard Tyson';
const speakerName5 = document.createElement('p');
speakerName5.innerHTML = 'Nicole Eagan';
const speakerName6 = document.createElement('p');
speakerName6.innerHTML = 'Lisa Schreiber';
// Create speaker Title
const speakerTitle1 = document.createElement('i');
speakerTitle1.innerHTML = ' Professor in Biochemistry at Yales';
const speakerTitle2 = document.createElement('i');
speakerTitle2.innerHTML = 'Chief Executive Officer at pfizer';
const speakerTitle3 = document.createElement('i');
speakerTitle3.innerHTML = 'Senior Vice President of Product Development at J&J';
const speakerTitle4 = document.createElement('i');
speakerTitle4.innerHTML = 'Professor in Virology at Yales';
const speakerTitle5 = document.createElement('i');
speakerTitle5.innerHTML = 'Co-Chief research Officer at ACS';
const speakerTitle6 = document.createElement('i');
speakerTitle6.innerHTML = 'Chief Product Development Officer at Icosagen';
// About speaker
const aboutSpeaker1 = document.createElement('p');
aboutSpeaker1.innerHTML = 'pisicing elit. Porro impedit, aliquid quaerat consequuntur quis hic ad itaque. Quis, sunt ';
const aboutSpeaker2 = document.createElement('p');
aboutSpeaker2.innerHTML = 'ectetur adipisicing elit. Porro impedit, aliquid quaerat consequuntur quis hic ad  sunt atque';
const aboutSpeaker3 = document.createElement('p');
aboutSpeaker3.innerHTML = 'nsectetur adipisicing elit. Porro impedit, aliquid quaerat consequuntur quis hic ad ue';
const aboutSpeaker4 = document.createElement('p');
aboutSpeaker4.innerHTML = 'Quis, sunt atq dolor sit amet consectetur adipisicing elit. Porro impedit, aliquid';
const aboutSpeaker5 = document.createElement('p');
aboutSpeaker5.innerHTML = 'met consectetur adipisicin. Porro impedit, aliquid quaerat consequuntur quis hic ad';
const aboutSpeaker6 = document.createElement('p');
aboutSpeaker6.innerHTML = 'amet consectetur adipisicing elit. Porro impedit, aliquid quaerat consequuntur quis';

let speaker1 = {};
let speaker2 = {};
let speaker3 = {};
let speaker4 = {};
let speaker5 = {};
let speaker6 = {};

const speakers = [
  (speaker1 = {
    Image: image1.src,
    Name: speakerName1.innerHTML,
    Title: speakerTitle1.innerHTML,
    About: aboutSpeaker1.innerHTML,
  }),
  (speaker2 = {
    Image: image2.src,
    Name: speakerName2.innerHTML,
    Title: speakerTitle2.innerHTML,
    About: aboutSpeaker2.innerHTML,
  }),
  (speaker3 = {
    Image: image3.src,
    Name: speakerName3.innerHTML,
    Title: speakerTitle3.innerHTML,
    About: aboutSpeaker3.innerHTML,
  }),
  (speaker4 = {
    Image: image4.src,
    Name: speakerName4.innerHTML,
    Title: speakerTitle4.innerHTML,
    About: aboutSpeaker4.innerHTML,
  }),
  (speaker5 = {
    Image: image5.src,
    Name: speakerName5.innerHTML,
    Title: speakerTitle5.innerHTML,
    About: aboutSpeaker5.innerHTML,
  }),
  (speaker6 = {
    Image: image6.src,
    Name: speakerName6.innerHTML,
    Title: speakerTitle6.innerHTML,
    About: aboutSpeaker6.innerHTML,
  }),
];
// Call the speaker section to dynamically create its content
const sectionSpeaker = document.querySelector('#speakers-section');
const speakerHeader = document.querySelector('.speakers-header');
const speakerSection = document.querySelectorAll('.speaker');
const moreItems = document.querySelector('#more-items');
const hidePartner = document.querySelector('#hide-partner');
const hideFooter = document.querySelector('#hide-footer');
const allSpeakers = document.querySelector('.speakers');

// Create the More bar
const showMore = document.createElement('div');
showMore.className = 'show-more';
const moreparagraph = document.createElement('p');
moreparagraph.innerHTML = 'More';
moreparagraph.style.width = '50%';
moreparagraph.style.color = '#272a31';
moreparagraph.style.textTransform = 'uppercase';
moreparagraph.style.fontSize = '1rem';
moreparagraph.style.fontWeight = '700';
moreparagraph.style.textAlign = 'end';
showMore.appendChild(moreparagraph);
const chevron = document.createElement('span');
chevron.style.display = 'inline-block';
chevron.style.fontSize = '1rem';
chevron.style.width = '50%';
chevron.style.color = '#ec5242';
chevron.innerHTML = '<i class="material-icons" style="font-size:36px">expand_more</i>';
chevron.style.textAlign = 'start';
showMore.appendChild(chevron);
showMore.style.width = '100%';
showMore.style.height = '3rem';
showMore.style.display = 'flex';
showMore.style.columnGap = '10px';
showMore.style.marginTop = '1.5rem';
showMore.style.justifyContent = 'center';
showMore.style.alignItems = 'center';
showMore.style.border = '2px solid #272a31';
// console.log(speakerSection[0].firstElementChild.children[1].innerHTML);
window.addEventListener('load', () => {
  if (window.innerWidth < 768) {
    sectionSpeaker.style.display = 'flex';
    speakerHeader.innerHTML = 'featured speakers';
    moreItems.style.display = 'none';
    hidePartner.style.display = 'none';
    hideFooter.style.display = 'none';
    allSpeakers.appendChild(showMore);
    chevron.addEventListener('click', () => {
      moreItems.style.display = 'grid';
      hidePartner.style.display = 'flex';
      hideFooter.style.display = 'flex';
      showMore.style.display = 'none';
      moreItems.style.transition = 'all 0.5 linear';
    });
  } else if (window.innerWidth >= 768) {
    sectionSpeaker.style.display = 'flex';
    speakerHeader.innerHTML = 'featured speakers';
    moreItems.style.display = 'grid';
    hidePartner.style.display = 'flex';
    hideFooter.style.display = 'flex';
    showMore.style.display = 'none';
  }
  for (let i = 0; i < speakerSection.length; i += 1) {
    if (speakerSection[i].classList.contains('speaker1')) {
      speakerSection[i] = speaker1;
      speakerSection[i].firstElementChild.firstElementChild.src = speakers[i].Image;
      speakerSection[i].lastElementChild.children[0].innerHTML = speakers[i].Name;
      speakerSection[i].lastElementChild.children[1].innerHTML = speakers[i].Title;
      speakerSection[i].lastElementChild.children[3].innerHTML = speakers[i].About;
    }
    if (speakerSection[i].classList.contains('speaker2')) {
      speakerSection[i] = speaker2;
      speakerSection[i].firstElementChild.firstElementChild.src = speakers[i].Image;
      speakerSection[i].lastElementChild.children[0].innerHTML = speakers[i].Name;
      speakerSection[i].lastElementChild.children[1].innerHTML = speakers[i].Title;
      speakerSection[i].lastElementChild.children[3].innerHTML = speakers[i].About;
    }
    if (speakerSection[i].classList.contains('speaker3')) {
      speakerSection[i] = speaker3;
      speakerSection[i].firstElementChild.firstElementChild.src = speakers[i].Image;
      speakerSection[i].lastElementChild.children[0].innerHTML = speakers[i].Name;
      speakerSection[i].lastElementChild.children[1].innerHTML = speakers[i].Title;
      speakerSection[i].lastElementChild.children[3].innerHTML = speakers[i].About;
    }
    if (speakerSection[i].classList.contains('speaker4')) {
      speakerSection[i] = speaker4;
      speakerSection[i].firstElementChild.firstElementChild.src = speakers[i].Image;
      speakerSection[i].lastElementChild.children[0].innerHTML = speakers[i].Name;
      speakerSection[i].lastElementChild.children[1].innerHTML = speakers[i].Title;
      speakerSection[i].lastElementChild.children[3].innerHTML = speakers[i].About;
    }
    if (speakerSection[i].classList.contains('speaker5')) {
      speakerSection[i] = speaker5;
      speakerSection[i].firstElementChild.firstElementChild.src = speakers[i].Image;
      speakerSection[i].lastElementChild.children[0].innerHTML = speakers[i].Name;
      speakerSection[i].lastElementChild.children[1].innerHTML = speakers[i].Title;
      speakerSection[i].lastElementChild.children[3].innerHTML = speakers[i].About;
    } else if (speakerSection[i].classList.contains('speaker6')) {
      speakerSection[i] = speaker6;
      speakerSection[i].firstElementChild.firstElementChild.src = speakers[i].Image;
      speakerSection[i].lastElementChild.children[0].innerHTML = speakers[i].Name;
      speakerSection[i].lastElementChild.children[1].innerHTML = speakers[i].Title;
      speakerSection[i].lastElementChild.children[3].innerHTML = speakers[i].About;
    }
  }
});

// Display more speakers and partners in home page

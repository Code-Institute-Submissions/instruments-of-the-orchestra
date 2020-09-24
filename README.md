# Instruments Of The Orchestra

Instruments Of The Orchestra is a fun and interactive quiz aimed at school children who have an interest in music or have recently started learning a musical instrument. The aim of the quiz is to teach school children about the different instruments used in an orchestra.

Insert Am I Responsive Image Here

A demo of the website can be found here: [www.instrumentsoftheorchestra.com](https://kirstchat.github.io/instruments-of-the-orchestra/)

---

## Contents

- [**User Experience (UX)**](<#user-experience-(ux)>)

  - Project Goals
  - User Goals
  - Design
    - Colour Scheme
    - Typography
    - Imagery
  - Wireframes

- [**Features**](#features)

  - Features that have been implemented
  - Features left to be implemented

- [**Technologies**](#technologies-used)

  - Languages Used
  - Frameworks, Libraries and Programs Used

- [**Testing**](#testing)

- [**Deployment**](#deployment)

- [**Credits**](#credits)

---

## User Experience (UX)

### Project Goals

The goal of this project is to create a fun and interactive quiz aimed at school children that will allow them to learn about the different instruments used in an orchestra. Throughout the quiz, the user will learn more about the different instruments and instrument families in the orchestra by being presented with a fact when they answer a question correctly. If a user answers incorrectly, they will be asked to try again until they choose the correct answer. The quiz is designed to be a learning tool and doesn't keep a score of the questions the user has answered correctly. By creating this quiz, I hope to help school children learn more about the orchestra and encourage them to take an interest in music.

### User Goals

- As a **user**, I want to easily understand the main purpose of the site on my first visit
- As a **user**, I want to be able to easily navigate throughout the site
- As a **user**, I want to learn about the different instruments used in an orchestra
- As a **user**, I want to have a fun playing the quiz and also have fun learning
- As a **user**, I want to be able to easily contact the site owner to provide feedback about the quiz
- As a **user**, I want to see what other projects the site owner has worked on

### Site Owner Goals

- As a **site owner**, I want the user to be greeted with a welcome message with a short explanation on what the site is so the user instantly understands the purpose of the site
- As a **site owner**, I want to include links on all pages of the site to allow the user to easily navigate to the other pages
- As a **site owner**, I want to create a quiz that will teach the user about the different instruments used in an orchestra
- As a **site owner**, I want to create a fun and interactive experience for the user that will engage them throughout
- As a **site owner**, I want to include a feedback form to allow the user to easily contact me and leave feedback about the quiz and/or the website itself
- As a **site owner**, I want to include links to my GitHub profile and my LinkedIn profile so the user can see what other work I've been doing if they're interested

### Design

#### Colour Scheme

[](https://coolors.co/f94144-f67584-f8961e-f9c74f-90be6d-43aab1-264653)

#### Typography

[ABeeZee Font](https://fonts.google.com/specimen/ABeeZee?preview.text_type=custom&query=abee)

Used throughout the site

About the font: ABeeZee is a children's learning font. Open, friendly and simple, the definite shapes support the process of learning to read and write. The italic carefully reminds young readers of fluent writing movements and inspires them to create their own unique handwriting.

[Grandstander Font](https://fonts.google.com/specimen/Grandstander?preview.text_type=custom&category=Display,Handwriting,Monospace&query=grand)

Used for the website title on the welcome container

Bit more fun looking

#### Imagery

To make the background of the site more fun and appealing for the user, I drew some music notes and other music related symbols using [Procreate](https://procreate.art/ipad) on an iPad.

Images have been taken from various sites as it was difficult to find free to use images. All websites have been credited in the credit section of this README - only being used for educational purposes.

### Wireframes

The wireframes for my site were created using [Balsamiq](https://balsamiq.com/). I created wireframes for mobile, tablet and desktop devices. Links to the wireframes can be found below:

| Mobile | Tablet | Desktop |
| :----: | :----: | :-----: |
| [Home Page](https://github.com/KirstChat/instruments-of-the-orchestra/blob/master/assets/wireframes/home-mobile.pdf) | [Home Page](https://github.com/KirstChat/instruments-of-the-orchestra/blob/master/assets/wireframes/home-tablet.pdf) | [Home Page](https://github.com/KirstChat/instruments-of-the-orchestra/blob/master/assets/wireframes/home-desktop.pdf) |
| [Quiz Examples](https://github.com/KirstChat/instruments-of-the-orchestra/blob/master/assets/wireframes/quiz-examples-mobile.pdf) | [Quiz Examples](https://github.com/KirstChat/instruments-of-the-orchestra/blob/master/assets/wireframes/quiz-examples-tablet.pdf) | [Quiz Examples](https://github.com/KirstChat/instruments-of-the-orchestra/blob/master/assets/wireframes/quiz-examples-desktop.pdf) |
| [Contact Form](https://github.com/KirstChat/instruments-of-the-orchestra/blob/master/assets/wireframes/contact-form-mobile.pdf) | [Contact Form](https://github.com/KirstChat/instruments-of-the-orchestra/blob/master/assets/wireframes/contact-form-tablet.pdf) | [Contact Form](https://github.com/KirstChat/instruments-of-the-orchestra/blob/master/assets/wireframes/contact-form-desktop.pdf) |

[Contents](#contents)

---

## Features

### Features that have been implemented

- Navigation Bar with a Home Button and About Modal

- Footer with links to social media and contact form

- Quiz - Started following layout in Web Dev video but struggled to run a conditional on answers | Changed looping method to Fisher-Yates - considered to be more reliable | Changed method again to follow James Quick video on Building a JavaScript Quiz App

- Feedback Form - added EmailJS

### Features left to be implemented

- Sound Based Questions and/or sound of each instrument on well done message - Test on a branch

- Difficulty setting - different number of questions for each setting - Test on a branch

- Learning Section

- Additional Resources Page - Links to other good websites for extra learning

- Randomize the answer order in the buttons

[Contents](#contents)

---

## Technologies Used

### Languages

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Frameworks, Libraries and Programs

- [Bootstrap v4.5](https://getbootstrap.com/)
  - Bootstrap was used to give the website a simple, responsive layout.
- [Google Fonts](https://fonts.google.com/)
  - Google Fonts was used to add the Grandstander and ABeeZee fonts to the site
- [Font Awesome](https://fontawesome.com/)
  - Font Awesome was used to add icons for...
- [Git](https://git-scm.com/)
  - Git was used for version control by utilising the terminal in VS Code to commit to Git and push to GitHub.
- [GitHub](https://github.com/)
  - GitHub was used to store the project code that was pushed from VS Code.
- [VS Code](https://code.visualstudio.com/)
  - Visual Studio Code was the IDE used to code the project.
- [Balsamiq](https://balsamiq.com/)
  - Balsamiq was used to create the wireframes for desktop, tablet and mobile during the design process.
- [EmailJS](https://www.emailjs.com/)

[Contents](#contents)

---

## Testing

Created a branch to update the text content of the answer buttons from the object array in a different way. With the first version where I looped through the array to update the text, I was unable to find a way to see if the button clicked was true or false.

### Testing User Stories from UX Section

### Further Testing

### Known Bugs

Issue with audio repeating/playing at the same time as other audio clip when button is clicked in initial script - fixed with latest version.

Issue with question count - fixed with changing where getQuestions function was called - new issue with user not being able to try the question again.

[Contents](#contents)

---

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps:

1. After pushing the project to GitHub, I opened the GitHub site and logged in.
2. After logging in, I located the repository for the project:
3. At the top of the repository, I clicked on the "Settings" button.
4. On the settings page, I scrolled down to the "GitHub Pages" section.
5. Under "Source", I selected "Master Branch" from the dropdown menu.
6. After the page refreshed itself, I scrolled back down to the "GitHub Pages" section to retrieve the link to the published site.

The site can be viewed here:

### Making a Local Clone

To clone the repository to make a local copy on your computer, follow these steps:

1. Open GitHub and locate the GitHub repository:
2. Under the repository name, click "Code" or "Clone" and copy the link to clone the repository using "HTTPS".
3. After copying the link, open terminal on your computer. This step can also be done in the terminal on an IDE.
4. Change the current working directory to the location where you want the cloned directory to be saved.
5. Type git clone, and then paste the URL: - see example below:

<!-- ```
git clone
```

6. Press Enter to create a local clone. -->

[Contents](#contents)

---

## Credits

### Code

[Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&list=PLyn9ak24qaCvBSsurq-Q1fGKEXXUzsJmf&index=2&t=718s) - How to build a JavaScript Quiz App - Original Quiz Script

[James Q Quick](https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=5) - How to build a JavaScript Quiz App - Updated Quiz Script

[W3Schools](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3) - Button Animation

[Fisher-Yates Shuffle](https://javascript.info/task/shuffle) - Loop through an array randomly - Original Quiz Script

[Favicon](https://www.w3.org/2005/10/howto-favicon) - Adding a Favicon to a webpage

[setTimeOut](https://stackoverflow.com/questions/42228423/set-div-to-hidden-then-visible-after-time-delay) - How to hide content again after a certain amount of time - Original Quiz Script

[Button Loop](https://www.freecodecamp.org/news/master-the-art-of-looping-in-javascript-with-these-incredible-tricks-a5da1aa1d6c5/) - Original Quiz Script

### Content

- All content on the site was written by the developer.
- The README.md is based on the Code Institute sample README.

### Media

Sound

[Correct Sound](https://freesound.org/people/Bertrof/sounds/351566/)
[Incorrect Sound](https://freesound.org/people/Bertrof/sounds/351565/)

Images

As the site is for educational purposes, I used images from a variety of sites as it was difficult to find all the images needed for the quiz on free image sites.

[Orchestra Vector](https://www.freepik.com/vectors/music)

[About Modal Icons and Guessing/Thinking Icon](https://www.flaticon.com/authors/freepik)

[Violin](https://en.wikipedia.org/wiki/Violin) | [Violinist](https://unsplash.com/photos/qtYhAQnIwSE)

[Harp](https://unsplash.com/photos/_Wv88h0iXc8)

[Double Bass](https://unsplash.com/photos/k4MQU76YTUI)

[Cello](https://en.wikipedia.org/wiki/Cello) | [Cellist](https://pixabay.com/photos/cello-string-instrument-instrument-521172)

[Flute](https://pixabay.com/photos/music-jazz-flute-musician-3090204/)

[Oboe](https://en.wikipedia.org/wiki/Oboe) | [Oboist](https://blog.primephonic.com/instrument-envy-and-perfection-an-interview-with-san-francisco-symphonys-principal-oboist)

[Bassoon](https://www.yamaha.com/en/musical_instrument_guide/bassoon/play/play002.html)

[Clarinet](https://en.wikipedia.org/wiki/Clarinet) | [Clarinetist](https://pixabay.com/photos/clarinetist-clarinet-jazz-concert-786605/)

[Trumpet](https://unsplash.com/photos/A10y2Eq7OHY)

[French Horn](https://eac.libguides.com/c.php?g=623145&p=4341274)

[Trombone](https://unsplash.com/photos/I_82mPvViOg)

[Tuba](https://www.dkfindout.com/uk/music-art-and-literature/musical-instruments/tuba/)

[Snare Drum](https://pixabay.com/photos/snare-drum-drums-music-small-drum-2661290/) | [Drum Sticks](https://pixabay.com/photos/drum-music-drums-musical-instrument-2720582/)

[Timpani](https://www.dkfindout.com/us/music-art-and-literature/musical-instruments/timpani/)

[Xylophone](https://www.dkfindout.com/us/music-art-and-literature/musical-instruments/xylophone/)

[Bass Drum](https://www.thomann.de/gb/adams_bd36_22_concert_bass_drum_fs.htm)

[Cymbals](https://www.thomann.de/gb/zildjian_20_a_symphonic_viennese_tone.htm) | [Cymbal Players](https://en.wikipedia.org/wiki/Clash_cymbals)

[Piano](https://unsplash.com/photos/tdo2GLH18Ls)

[Guitar](https://unsplash.com/photos/gioH4gHo0-g)

### Acknowledgements

My Mentor

The Code Institute Slack Community

[Contents](#contents)

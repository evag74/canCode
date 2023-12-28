const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('progress-bar-animation');
            console.log("intersection!!");
            return;
        }

        entry.target.classList.remove('progress-bar-animation');
    })
});

const progressBars = document.querySelectorAll('.progress-bar-inside');
progressBars.forEach((el) => console.log(el));

// Still have to figure out how to use querySelectorAll, currently elements aren't being caught
progressBars.forEach((element) => observer.observe(element));

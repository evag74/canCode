(function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('progress-bar-animation');
                return;
            }

            entry.target.classList.remove('progress-bar-animation');
        })
    });
    window.addEventListener('load', function() {
        const progressBars = document.querySelectorAll(".progress-bar-inside");

        progressBars.forEach(bar => observer.observe(bar));
    })
})()

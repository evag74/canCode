(function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                return;
            }

            entry.innerHTML = "0";
        })
    });

    function countUp(element, limit) {
    }

    window.addEventListener("load", function() {
        const runningNumbers = document.querySelectorAll(".running-numbers");

        runningNumbers.forEach(num => observer.observe(num));
    });
})();

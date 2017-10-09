var searchButtons = document.querySelectorAll('.search-field');

searchButtons.forEach( function (searchButton) {
    {
        searchButton.onclick = function (event) {
            this.classList.toggle('active');

            var panel = this.parentNode.querySelector ('.outgoing-panel');
            panel.classList.toggle('show');
        }
    }});

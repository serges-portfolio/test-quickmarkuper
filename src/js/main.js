(() => {
    function useIsotope(event) {

        let isotopeGrid = new Isotope( '.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.sizer'

            }
        });

        let applyFilterFromLink = (linkObject) => {
            let filterValue = linkObject.dataset.filter;
            isotopeGrid.arrange({ filter: filterValue });
        };

        let filterGrid = function( event ) {
            event.preventDefault();

            applyFilterFromLink(this);

            let activeBtn = document.querySelector('.active');
            if (activeBtn) {
                activeBtn.classList.remove('active');
            }
            this.classList.add('active');
        };

        document.querySelectorAll('.filter-button').forEach(filterBtn => {
            filterBtn.addEventListener( 'click', filterGrid);
        });


        let activeBtn = document.querySelector('.active');

        applyFilterFromLink(activeBtn);
    }

    document.addEventListener('DOMContentLoaded', useIsotope);
})();

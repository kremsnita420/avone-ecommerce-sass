// ! Sidebar filters toggle
const filterOpen = document.getElementsByClassName('filter-toolbar__btn')
const filterClose = document.getElementsByClassName('product-filters-sidebar__close-icon')

const sidebarFilters = document.getElementsByClassName('product-filters-sidebar')


if (filterOpen && filterClose && sidebarFilters) {
    filterOpen[0].addEventListener("click", () => {
        sidebarFilters[0].classList.add("product-filters-sidebar--visible")
        sidebarFilters[0].classList.remove("product-filters-sidebar--hidden")
    });

    filterClose[0].addEventListener("click", () => {
        sidebarFilters[0].classList.add("product-filters-sidebar--hidden")
        sidebarFilters[0].classList.remove("product-filters-sidebar--visible")
    });
}
/* eslint-disable prettier/prettier */
document.addEventListener('DOMContentLoaded', () => {
    var dropdown = document.getElementsByClassName('dropdown')
    var list = document.getElementsByClassName('main_rents')

    function changeTab(tabIndex) {
        var tabs = document.getElementsByClassName('tab')
        var tabContents = document.getElementsByClassName('tab-content')
        var selectedTab = document.getElementsByClassName('tab')[tabIndex - 1]
        var selectedTabContent = document.getElementById(
            'tab-content-' + tabIndex
        )

        // Remove "active" class from all tabs
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active')
        }

        // Add "active" class to the selected tab
        selectedTab.classList.add('active')

        // Hide all tab contents
        for (var j = 0; j < tabContents.length; j++) {
            tabContents[j].style.display = 'none'
        }

        // Show the selected tab content
        if (selectedTabContent) {
            selectedTabContent.style.display = 'block'
        }
    }
})

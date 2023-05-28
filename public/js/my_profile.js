/* eslint-disable prettier/prettier */
document.addEventListener('DOMContentLoaded', () => {
    var tabs = document.getElementsByClassName('tab')
    var tabContents = document.getElementsByClassName('tab-content')
    var profile_details = document.getElementById('profile_details')
    var membership_details = document.getElementById('membership_details')
    var ads_details = document.getElementById('ads_details')
    var inbox_details = document.getElementById('inbox_details')

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', (e) => {
            if (e.target.dataset.type === 'profile') {
                profile_details.style.display = 'block'
                inbox_details.style.display = 'none'
                ads_details.style.display = 'none'
                membership_details.style.display = 'none'
            }
            if (e.target.dataset.type === 'membership') {
                membership_details.style.display = 'block'
                profile_details.style.display = 'none'
                inbox_details.style.display = 'none'
                ads_details.style.display = 'none'

                console.log('let add some profile content')
            }
            if (e.target.dataset.type === 'ads') {
                ads_details.style.display = 'block'
                profile_details.style.display = 'none'
                inbox_details.style.display = 'none'
                membership_details.style.display = 'none'
                console.log('let add some profile content')
            }

            if (e.target.dataset.type === 'inbox') {
                inbox_details.style.display = 'block'
                profile_details.style.display = 'none'
                ads_details.style.display = 'none'
                membership_details.style.display = 'none'
                console.log('let add some profile content')
            }
        })
    }

    // function changeTab(tabIndex) {
    //     var selectedTab = document.getElementsByClassName('tab')[tabIndex - 1]
    //     var selectedTabContent = document.getElementById(
    //         'tab-content-' + tabIndex
    //     )

    //     // Remove "active" class from all tabs
    //     for (var i = 0; i < tabs.length; i++) {
    //         tabs[i].classList.remove('active')
    //     }

    //     // Add "active" class to the selected tab
    //     selectedTab.classList.add('active')

    //     // Hide all tab contents
    //     for (var j = 0; j < tabContents.length; j++) {
    //         tabContents[j].style.display = 'none'
    //     }
    //     // Show the selected tab content
    //     if (selectedTabContent) {
    //         selectedTabContent.style.display = 'block'
    //     }
    // }
})

const contentArray = [...document.getElementById('content').children];
const tabsArray = [...document.getElementById('tabs').children];
let current = 0;


const switchTab = (tabId) => {
	contentArray[current].hidden = true;
	contentArray[tabId].hidden = false;

	tabsArray[current].classList.toggle('active');
	tabsArray[tabId].classList.toggle('active');

	current = tabId;
}

document.getElementById('tabs').addEventListener('click', (event)=> {
	if(event.target.classList.contains('tab')) {
		switchTab(event.target.id);
	}
})
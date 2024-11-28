// List items (to be dynamically added)
const listItems = [
    'Learn JavaScript',
    'Complete Web Development Course',
    'Build a Portfolio',
    'Apply for Jobs',
    'Become a Web Developer'
];

// Load saved preferences from localStorage when the page loads
window.onload = function() {
    // Check and apply saved list style preference
    const savedListStyle = localStorage.getItem('listStyle');
    if (savedListStyle) {
        document.getElementById('dynamic-list').classList.add(savedListStyle);
        document.getElementById('list-style').value = savedListStyle;
    }

    // Dynamically add list items
    addListItems();
};

// Add list items dynamically to the page
function addListItems() {
    const listContainer = document.getElementById('dynamic-list');
    listContainer.innerHTML = ''; // Clear existing list items
    listItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = item;
        listContainer.appendChild(listItem);
    });
}

// Save list style preference to localStorage
document.getElementById('save-button').addEventListener('click', function() {
    const selectedListStyle = document.getElementById('list-style').value;

    // Save the selected list style to localStorage
    localStorage.setItem('listStyle', selectedListStyle);

    // Apply the selected list style
    const listContainer = document.getElementById('dynamic-list');
    listContainer.className = ''; // Reset any previous list style class
    listContainer.classList.add(selectedListStyle); // Apply the selected list style

    alert('Preferences saved!');
});

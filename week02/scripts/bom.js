const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Event listener for the "Add Chapter" button
button.addEventListener('click', function () {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value; // Set the li text content to the chapter name
        deleteButton.textContent = '❌'; // Set the text for the delete button

        li.append(deleteButton); // Append the delete button to the li
        list.append(li); // Append the li to the list

        // Add an event listener to the delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li); // Remove the li from the list
            input.focus(); // Focus the input field
        });

        input.value = ''; // Clear the input field after adding a chapter
        input.focus(); // Send focus back to the input field
    } else {
        // If the input is blank, show a message and return focus to the input
        alert('Please enter a chapter!');
        input.focus(); // Focus back on the input field
    }
});

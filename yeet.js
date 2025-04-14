
// Dynamically change text content
function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'Text has been changed dynamically!';
}

// Modify CSS styles via JavaScript
function changeStyle() {
    const styleElement = document.getElementById('dynamicText');
    styleElement.style.color = 'blue';
    styleElement.style.fontSize = '20px';
    styleElement.style.fontWeight = 'bold';
}

// Add or remove an element when a button is clicked
function toggleElement() {
    const container = document.getElementById('container');
    const existingElement = document.getElementById('dynamicElement');

    if (existingElement) {
        container.removeChild(existingElement);
    } else {
        const newElement = document.createElement('div');
        newElement.id = 'dynamicElement';
        newElement.textContent = 'This is a dynamically added element!';
        newElement.style.marginTop = '10px';
        container.appendChild(newElement);
    }
}
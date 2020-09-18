var itemList = document.getElementById('items');
var form     = document.getElementById('addForm');
var filter   = document.getElementById('filter');

// Add event Listener to Submit area
form.addEventListener('submit', addItem);
// Delete event Listener to Delete Button
itemList.addEventListener('click', removeItem);
// Filter Products
filter.addEventListener('keyup', filterItems);


// Function addItem

function addItem (e) {
    e.preventDefault();
    console.log(1);

    // Get Submit text area value
    var newItem = document.getElementById('item').value;
    console.log(newItem);
    // Create li 
    var li  = document.createElement('li');
    // Add class
    li.className =  'list-group-item';
    //Create Text Node                      Have attention this code!
    li.textContent = newItem;  

    //Create New Delete Button
    var deleteBtn = document.createElement('button');
    //Append class to newly created Delete Button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append Text context
    deleteBtn.textContent = 'Delete';


    li.appendChild (deleteBtn);
    itemList.appendChild(li);

}
// Function removeItem

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure?, its not able to get "Undone"')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

// Function for Filter Element

function filterItems (e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
        //Get List
        var items = itemList.getElementsByTagName('li');
    // Convert to an Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = ' none';
        }
    });
}


// select form
let form = document.getElementById('addForm');
// put ul into variable
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// create submit event (when user submits, go to func addItem)
form.addEventListener('submit', addItem);

// delete event listener
itemList.addEventListener('click', removeItem);

// create filter event
filter.addEventListener('keyup', filterItems);

// create item func
function addItem(e){
    e.preventDefault(); 

    // Get input val
    let newItem = document.getElementById('item').value;

    // create new li
    let li = document.createElement('li');
    // add class
    li.classList.add('list-group-item');
    // add textNode to input val
    li.appendChild(document.createTextNode(newItem));

    // create delete button elem
    let deleteBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // apend button to li
    li.appendChild(deleteBtn);

    // append li to list
    itemList.appendChild(li);
}

// remove item func
function removeItem(e){
    if(e.target.classList.contains('delete')){ // when you press delete button...
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// create filter items func
function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // get li's
    let items = itemList.getElementsByTagName("li");
    // convert to arr
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !== -1){
            item.style.display = "block";
        }else{
            item.style.display = 'none';
        }
    })
}

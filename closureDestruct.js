// Q.1
function createCounter() {
    let count = 0;
    return function() {
    count++;
    console.log('Click count: ${count}');
    };
    }
    let clickCounter = createCounter();
    
    clickCounter(); 
    clickCounter(); 

// Q.2
JavaScript
let order = {
orderId: "123456",
productName: "Laptop",
quantity: 2
};

console.log("Without Destructuring:");
console.log("Order ID:", order.orderId);
console.log("Product Name:", order.productName);
console.log("Quantity:", order.quantity);

console.log("\nWith Destructuring:");
let {orderId, productName, quantity} = order;
console.log("Order ID:", orderId);
console.log("Product Name:", productName);
console.log("Quantity:", quantity);


// Q.3
function shoppingCart() {
    const cartItems = [];
    return {
    getCartItems: function () {
    return cartItems;
    }
    };
    }
    const cart = shoppingCart();
    console.log('Cart Items:', cart.getCartItems());
    // OUTPUT: Cart Items: []


// Q4.
function shoppingCart() {
    const cartItems = [];
    function itemIndexInCart(productId) {
      return cartItems.findIndex(item => item.id === productId);
    }
    return {
      addItem: function(product) {
        const itemIndex = itemIndexInCart(product.id);
        if (itemIndex !== -1) {
          cartItems[itemIndex].quantity++;
        } else {
          cartItems.push({id: product.id, name: product.name, price: product.price, quantity: 1});
        }
      },
      getCartItems: function() {
        return cartItems;
      }
    };
  }
  const carts = shoppingCart();
  console.log('Cart Items:', cart.getCartItems());
  
  const product1 = { id: 1, name: 'Product 1', price: 10};
  const product2 = { id: 2, name: 'Product 2', price: 20};
  cart.addItem(product1);
  cart.addItem(product2);
  cart.addItem(product1);
  console.log('Cart Items:', cart.getCartItems());
 

// Q.5
function shoppingCart() {
    const cartItems = [];
    function itemIndexInCart (productId) {
    return cartItems.findIndex(item => item.id === productId);
    }
    return {
    addItem: function (product) {
    const itemIndex = itemIndexInCart (product.id);
    if (itemIndex !== -1) {
    cartItems[itemIndex].quantity++;
    } else {
    cartItems.push({id: product.id, name: product.name, price: product.price,
    quantity: 1});
    }
},
removeItem: function (productId) {
const indexToRemove = itemIndexInCart (productId);
if (indexToRemove !== -1) {
cartItems.splice(indexToRemove, 1);
}
},
getCartItems: function () {
return cartItems;
}
};
}
const cart1 = shoppingCart();
console.log('Cart Items:', cart.getCartItems());

const products1 = { id: 1, name: 'Product 1', price: 10 };
const products2 = { id: 2, name: 'Product 2', price: 20};
cart.addItem(products1);
cart.addItem(products2);
cart.addItem(products1);
console.log('Cart Items:', cart.getCartItems());

const product3 = { id: 1, name: 'Product 1', price: 10};
const product4 = { id: 2, name: 'Product 2', price: 20};
cart.addItem(product3);
cart.addItem(product4);
cart.addItem(product3);
console.log('Cart Items:', cart.getCartItems());
cart.removeItem(2);
console.log('cart Items:',cart.getCartItems());
    
// Q.6

function createPlaylist (playlistName) {
    let playlist = [];
    return {
    addSong: function (songName, artist) {
    playlist.push({songName, artist});
    },
    listSongs: function() {
    if (playlist.length === 0) {
    console.log(`${playlistName} Playlist is empty.`);
    } else {
    console.log(`${playlistName} Playlist: ${playlist.map(song =>
    `${song.songName} by ${song.artist}`).join(', ')}`);
    }
}
};
}
// Task 2: Add Song to Playlist
function addSong (playlist, songName, artist) {
playlist.addSong (songName, artist);
}
// Task 3: List Songs in Playlist
function listSongs (playlist) {
}
playlist.listSongs();
const myPlaylist = createPlaylist("My Favorites");
addSong (myPlaylist, "Song1", "Artist1");
addSong (myPlaylist, "Song2", "Artist2");
addSong (myPlaylist, "Song3", "Artist3");
listSongs (myPlaylist); 
    
    
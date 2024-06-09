import React, { useState } from 'react';
import ProductList from './ProductList';

const AdminDashboard = ({ onLogout }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ]);

  const handleEditProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
      <ProductList products={products} onEditProduct={handleEditProduct} />
    </div>
  );
};

export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      loadProducts();
    }
  }, [isLoggedIn]);

  const loadProducts = async () => {
    const response = await fetch('/api/products');
    const products = await response.json();
    setProducts(products);
  };

  const saveProducts = async (products) => {
    await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(products),
    });
    loadProducts();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (username === 'eletron' && password === 'eletron') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProducts = [...products];
    if (editingIndex !== null) {
      newProducts[editingIndex] = { name: productName, price: productPrice };
    } else {
      newProducts.push({ name: productName, price: productPrice });
    }
    saveProducts(newProducts);
    setProductName('');
    setProductPrice('');
    setEditingIndex(null);
  };

  const handleEditProduct = (index) => {
    setProductName(products[index].name);
    setProductPrice(products[index].price);
    setEditingIndex(index);
  };

  const handleDeleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    saveProducts(newProducts);
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Product Price"
          required
        />
        <button type="submit">{editingIndex !== null ? 'Edit' : 'Add'} Product</button>
      </form>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
            <button onClick={() => handleEditProduct(index)}>Edit</button>
            <button onClick={() => handleDeleteProduct(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


import React, { useState } from 'react';

const EditProduct = ({ product, onSave }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...product, name, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

import React, { useState } from 'react';
import EditProduct from './EditProduct';

const ProductList = ({ products, onEditProduct }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleEditClick(product)}>Edit</button>
          </li>
        ))}
      </ul>
      {editingProduct && (
        <EditProduct
          product={editingProduct}
          onSave={(updatedProduct) => {
            onEditProduct(updatedProduct);
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
};

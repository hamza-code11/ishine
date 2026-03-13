import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Home from './pages/web/Home';
import Shop from './pages/web/Shop';
import ProductDetailPage from './pages/web/ProductDetailPage';
import ProductPage from './pages/web/ProductPage';
import WholesalePage from './pages/web/WholesalePage';

import Login from './pages/web/Login';
import Signup from './pages/web/Signup';
import Checkout from './pages/web/Checkout';
import MyAccount from './pages/web/MyAccount';
import OrderConfirmation from './pages/web/OrderConfirmation';
import About from './pages/web/About';
import PrivacyPolicy from './pages/web/PrivacyPolicy';
import TermsAndConditions from './pages/web/TermsAndConditions';
import Contact from './pages/web/Contact';
import TrackOrder from './pages/web/TrackOrder';
import Wishlist from './pages/web/Wishlist';
import Cart from './pages/web/Cart';
import Payment from './pages/web/Payment';


// Admin Pages 
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import ProductCreate from './pages/admin/products/ProductCreate';

import BrandCreate from './pages/admin/brands/BrandCreate';
import BrandEdit from './pages/admin/brands/BrandEdit';
import BrandsList from './pages/admin/brands/BrandsList';

import CategoryCreate from './pages/admin/categories/CategoryCreate';
import CategoryEdit from './pages/admin/categories/CategoryEdit';
import CategoryList from './pages/admin/categories/CategoriesList';

import SubCategoryCreate from './pages/admin/subcategories/SubCategoryCreate';
import SubCategoryEdit from './pages/admin/subcategories/SubCategoryEdit';
import SubCategoriesList from './pages/admin/subcategories/SubCategoriesList';

import CustomerList from './pages/admin/customers/CustomerList';
import CmsManager from './pages/admin/CmsManager/CmsManager';



// import AdminProducts from './pages/admin/AdminProducts';
// import AdminCategories from './pages/admin/AdminCategories';
// import AdminBrands from './pages/admin/AdminBrands';
// import AdminBanners from './pages/admin/AdminBanners';
// import AdminMenu from './pages/admin/AdminMenu';
// import AdminOrders from './pages/admin/AdminOrders';
// import AdminUsers from './pages/admin/AdminUsers';
// import AdminSettings from './pages/admin/AdminSettings';

// const ProtectedRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   if (!user) return <Navigate to="/login" />;
//   return children;
// };

// const AdminRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   if (!user) return <Navigate to="/login" />;
//   if (user.role !== 'admin') return <Navigate to="/" />;
//   return children;
// };

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Main App Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
          <Route path="/wholesale" element={<WholesalePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/account" element={<MyAccount />} />
          {/* <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} /> */}
          {/* <Route path="/account" element={<ProtectedRoute><MyAccount /></ProtectedRoute>} /> */}
          <Route path="/wishlist" element={<Wishlist />} />
          {/* <Route path="/order-confirmation" element={<ProtectedRoute><OrderConfirmation /></ProtectedRoute>} /> */}
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track-order" element={<TrackOrder />} />

          {/* Admin Routes */}
          {/* <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}> */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products/add" element={<ProductCreate />} />


            <Route path="brands/add" element={<BrandCreate />} />
            <Route path="brands/edit" element={<BrandEdit />} />
            <Route path="brands" element={<BrandsList />} />

            <Route path="categories/add" element={<CategoryCreate />} />
            <Route path="categories/edit" element={<CategoryEdit />} />
            <Route path="categories" element={<CategoryList />} />

            <Route path="subcategories/add" element={<SubCategoryCreate />} />
            <Route path="subcategories/edit" element={<SubCategoryEdit />} />
            <Route path="subcategories" element={<SubCategoriesList />} />

            <Route path="Customers" element={<CustomerList />} />
            <Route path="CmsManager" element={<CmsManager />} />



            {/* <Route path="categories" element={<AdminCategories />} />
            <Route path="brands" element={<AdminBrands />} />
            <Route path="banners" element={<AdminBanners />} />
            <Route path="menu" element={<AdminMenu />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="settings" element={<AdminSettings />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
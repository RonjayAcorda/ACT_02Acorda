function Navbar(){
    return (
<header class="site-header sticky-top py-1 bg-dark">
  <nav class="container d-flex flex-column flex-md-row justify-content-between ">
    <a class="py-2 text-light" href="#" aria-label="Product">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
    </a>
    <a class="py-2 d-none d-md-inline-block text-light" href="#">Tour</a>
    <a class="py-2 d-none d-md-inline-block text-light" href="#">Features</a>
    <a class="py-2 d-none d-md-inline-block text-light" href="#">Enterprise</a>
    <a class="py-2 d-none d-md-inline-block text-light" href="#">Support</a>
    <a class="py-2 d-none d-md-inline-block text-light" href="#">Cart</a>
  </nav>
</header>
    );
}
export default Navbar;
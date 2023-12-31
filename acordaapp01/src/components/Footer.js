function Footer() {
    return (
      <div>
        <hr></hr>
        <footer class="py-5 container">
          
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Main</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Partners</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Google</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Microsoft</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Tesla</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Space X</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Apple</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>References</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">General Motors</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">MDB Bootstrap</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Photo1</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Photo2</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Photo3</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"></input>
            <button class="btn btn-dark" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

  </footer>
      </div>
        
    );
}
export default Footer;
const EcommerceTemplate = {
  generateTemplate: () => {
    return `
      <div class="ecommerce-container" style="font-family: Arial, sans-serif; max-width: 100%; margin: 0 auto; padding: 20px;">
        <!-- Header -->
        <header style="background-color: #ffffff; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 100;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h1 style="margin: 0; color: #333; font-size: 24px;">MyStore</h1>
            <nav style="display: flex; gap: 20px;">
              <a href="#" style="text-decoration: none; color: #333;">Home</a>
              <a href="#" style="text-decoration: none; color: #333;">Shop</a>
              <a href="#" style="text-decoration: none; color: #333;">Cart (0)</a>
            </nav>
          </div>
        </header>

        <!-- Experia Inline Container -->
        <div id="experia-inline"></div>

        <!-- Hero Section -->
        <section style="
          margin: 20px 0; 
          text-align: center; 
          padding: 80px 20px; 
          background-image: url('https://picsum.photos/1600/400?random=0');
          background-size: cover;
          background-position: center;
          position: relative;
          color: white;
          ">
          <!-- Dark overlay -->
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 1;
          "></div>
          <!-- Content -->
          <div style="position: relative; z-index: 2;">
            <h2 style="font-size: 48px; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Summer Sale</h2>
            <p style="font-size: 24px; margin-bottom: 30px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">Up to 50% off on selected items</p>
            <button style="background-color: #007bff; color: white; border: none; padding: 15px 40px; border-radius: 5px; cursor: pointer; font-size: 18px; transition: all 0.3s ease;">Shop Now</button>
          </div>
        </section>

        <!-- Featured Products -->
        <section style="margin: 40px 0;">
          <h3 style="text-align: center; margin-bottom: 30px; color: #333; font-size: 32px;">Featured Products</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            <!-- Product 1 -->
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; transition: transform 0.2s; hover:transform: translateY(-5px);">
              <img src="https://picsum.photos/400/300?random=1" alt="Product 1" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;">
              <h4 style="margin: 10px 0; color: #333;">Summer T-Shirt</h4>
              <p style="color: #666; margin-bottom: 10px;">Comfortable cotton t-shirt</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: bold; color: #333;">$29.99</span>
                <button style="background-color: #28a745; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Add to Cart</button>
              </div>
            </div>

            <!-- Product 2 -->
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
              <img src="https://picsum.photos/400/300?random=2" alt="Product 2" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;">
              <h4 style="margin: 10px 0; color: #333;">Denim Jeans</h4>
              <p style="color: #666; margin-bottom: 10px;">Classic fit denim</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: bold; color: #333;">$59.99</span>
                <button style="background-color: #28a745; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Add to Cart</button>
              </div>
            </div>

            <!-- Product 3 -->
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
              <img src="https://picsum.photos/400/300?random=3" alt="Product 3" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;">
              <h4 style="margin: 10px 0; color: #333;">Sneakers</h4>
              <p style="color: #666; margin-bottom: 10px;">Lightweight running shoes</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: bold; color: #333;">$89.99</span>
                <button style="background-color: #28a745; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Add to Cart</button>
              </div>
            </div>

            <!-- Product 4 -->
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
              <img src="https://picsum.photos/400/300?random=4" alt="Product 4" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;">
              <h4 style="margin: 10px 0; color: #333;">Smart Watch</h4>
              <p style="color: #666; margin-bottom: 10px;">Fitness tracking smartwatch</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: bold; color: #333;">$199.99</span>
                <button style="background-color: #28a745; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Add to Cart</button>
              </div>
            </div>

            <!-- Product 5 -->
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
              <img src="https://picsum.photos/400/300?random=5" alt="Product 5" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;">
              <h4 style="margin: 10px 0; color: #333;">Backpack</h4>
              <p style="color: #666; margin-bottom: 10px;">Water-resistant travel backpack</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: bold; color: #333;">$49.99</span>
                <button style="background-color: #28a745; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Add to Cart</button>
              </div>
            </div>

            <!-- Product 6 -->
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
              <img src="https://picsum.photos/400/300?random=6" alt="Product 6" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;">
              <h4 style="margin: 10px 0; color: #333;">Sunglasses</h4>
              <p style="color: #666; margin-bottom: 10px;">UV protection sunglasses</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: bold; color: #333;">$79.99</span>
                <button style="background-color: #28a745; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Add to Cart</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Newsletter -->
        <section style="background-color: #f8f9fa; padding: 40px 20px; text-align: center; margin: 40px 0;">
          <h3 style="color: #333; margin-bottom: 20px;">Subscribe to Our Newsletter</h3>
          <div style="max-width: 500px; margin: 0 auto;">
            <input type="email" placeholder="Enter your email" style="padding: 10px; width: 60%; margin-right: 10px; border: 1px solid #ddd; border-radius: 4px;">
            <button style="background-color: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">Subscribe</button>
          </div>
        </section>

        <!-- Footer -->
        <footer style="background-color: #333; color: white; padding: 40px 20px; margin-top: 40px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px;">
            <div>
              <h4 style="margin-bottom: 20px;">About Us</h4>
              <p style="color: #ccc;">Quality products at affordable prices.</p>
            </div>
            <div>
              <h4 style="margin-bottom: 20px;">Contact</h4>
              <p style="color: #ccc;">Email: info@mystore.com</p>
              <p style="color: #ccc;">Phone: (555) 123-4567</p>
            </div>
            <div>
              <h4 style="margin-bottom: 20px;">Follow Us</h4>
              <div style="display: flex; gap: 10px;">
                <a href="#" style="color: white;">Facebook</a>
                <a href="#" style="color: white;">Twitter</a>
                <a href="#" style="color: white;">Instagram</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <!-- Experia External Container -->
      <div id="experia-external"></div>
    `;
  },
};

export default EcommerceTemplate;

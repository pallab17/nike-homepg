const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="second-button">Category</button>
        </div>
        <div className="hero-brand">
          <p>Also Available On</p>

          <div className="tags">
            <img src="./images/flipkart.png" alt="flipkart" />
            <img src="./images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src="./images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};

export default Hero;

import "./portfolio.scss";

export default function Portfolio() {
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },

    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title = {item.title} />
        ))}
      </ul>
      <div class="container">
        <div class="item">
          <img
            src="https://www.techfunnel.com/wp-content/uploads/2019/07/12-Digital-Banking-Challenges-and-Opportunities-For-the-Banking-Industry-1.png"
            alt=""
          />
          <h3> Banking App</h3>
        </div>
        <div class="item">
          <img
            src="https://www.techfunnel.com/wp-content/uploads/2019/07/12-Digital-Banking-Challenges-and-Opportunities-For-the-Banking-Industry-1.png"
            alt=""
          />
          <h3> Banking App</h3>
        </div>

        <div class="item">
          <img
            src="https://www.techfunnel.com/wp-content/uploads/2019/07/12-Digital-Banking-Challenges-and-Opportunities-For-the-Banking-Industry-1.png"
            alt=""
          />
          <h3> Banking App</h3>
        </div>
        <div class="item">
          <img
            src="https://www.techfunnel.com/wp-content/uploads/2019/07/12-Digital-Banking-Challenges-and-Opportunities-For-the-Banking-Industry-1.png"
            alt=""
          />
          <h3> Banking App</h3>
        </div>
        <div class="item">
          <img
            src="https://www.techfunnel.com/wp-content/uploads/2019/07/12-Digital-Banking-Challenges-and-Opportunities-For-the-Banking-Industry-1.png"
            alt=""
          />
          <h3> Banking App</h3>
        </div>
      </div>
    </div>
  );
}

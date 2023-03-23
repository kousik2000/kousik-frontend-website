import "./index.css";

const portfolioDetail = (props) => {
  const { eachPortfolio } = props;
  const { title, url, imageUrl, github } = eachPortfolio;

  return (
    <a
      href={url}
      class="portfolio-Detail-container"
      target="_blank"
      rel="noreferrer"
    >
      <img src={imageUrl} className="PortfolioImage" alt="portfolio" />
      <div className="title-git-container">
        <p className="portfolio-title">{title}</p>
        <a href={github} className="git-link" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </a>
  );
};

export default portfolioDetail;

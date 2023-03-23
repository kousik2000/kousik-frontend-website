import "./index.css";

const BlogDetail = (props) => {
  const { eachBlog } = props;
  const { title, description, url, imageUrl } = eachBlog;

  return (
    <div class="blogListDetail-container">
      <img src={imageUrl} className="blogImage" alt="blog" />
      <div className="blog-description-container">
        <h1 className="blog-heading">{title}</h1>
        <p className="blog-description">{description}</p>
        <a href={url} target="_blank" rel="noreferrer" className="blog-link">
          Click to View
        </a>
      </div>
    </div>
  );
};

export default BlogDetail;

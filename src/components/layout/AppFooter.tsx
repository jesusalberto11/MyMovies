import "../../styles/components/layout/AppFooter.css";

const AppFooter = () => {
  return (
    <div className="footer flex centered">
      <ul className="footer-list flex centered">
        <li className="footer-list-item">
          <a>
            <span>Terms of Use</span>
          </a>
        </li>
        <li className="footer-list-item">
          <a>
            <span>Help Centre</span>
          </a>
        </li>
        <li className="footer-list-item">
          <a>
            <span>About Us</span>
          </a>
        </li>
      </ul>
      <p className="copyright-text">
        © 2024 Themoviedb and its family of affiliated companies. All rights
        reserved.
      </p>
    </div>
  );
};

export default AppFooter;

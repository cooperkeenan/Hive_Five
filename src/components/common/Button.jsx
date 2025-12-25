export const Button = ({ children, href, variant = 'primary' }) => (
  <a href={href} className={`button button--${variant}`}>
    {children}
  </a>
);
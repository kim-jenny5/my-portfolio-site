export default function Footer({ style: styleFromProps }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styleFromProps} text-xs uppercase`}>© {currentYear} Jenny Kim</footer>
  );
}

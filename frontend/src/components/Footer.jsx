import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-surface w-full py-12 flex flex-col md:flex-row justify-between items-center px-8 border-t border-outline/10 mt-20">
      <div className="mb-6 md:mb-0">
        <span className="text-xl font-bold tracking-tight text-on-surface">
          CaptionCraft
        </span>
        <p className="text-on-surface-variant text-sm mt-2">
          © 2024 CaptionCraft. Powered by AI.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-sm">
        <Link
          className="text-on-surface-variant hover:text-primary underline-offset-4 hover:underline transition-colors duration-300"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-on-surface-variant hover:text-primary underline-offset-4 hover:underline transition-colors duration-300"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="text-on-surface-variant hover:text-primary underline-offset-4 hover:underline transition-colors duration-300"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="text-on-surface-variant hover:text-primary underline-offset-4 hover:underline transition-colors duration-300"
          to="/terms"
        >
          Terms
        </Link>
        <Link
          className="text-on-surface-variant hover:text-primary underline-offset-4 hover:underline transition-colors duration-300"
          to="/privacy"
        >
          Privacy
        </Link>
      </div>
    </footer>
  );
}

import { Link, useLocation } from "react-router-dom";

export default function TopNavBar() {
  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? "text-primary border-b-2 border-primary pb-1 font-bold"
      : "text-on-surface-variant hover:text-on-surface transition-colors";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-container">
      <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto tracking-tight">
        <div className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tight text-on-surface">
            CaptionCraft
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className={getLinkClasses("/")} to="/">
            Home
          </Link>
          <Link className={getLinkClasses("/bio")} to="/bio">
            Bio Generator
          </Link>
          <Link className={getLinkClasses("/hashtags")} to="/hashtags">
            Hashtag Generator
          </Link>
          <Link className={getLinkClasses("/settings")} to="/settings">
            Settings
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/settings" className="hover:bg-surface-container rounded-full transition-all p-2 flex items-center gap-2 text-on-surface-variant hover:text-primary">
            <span className="material-symbols-outlined text-primary" data-icon="settings">
              settings
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

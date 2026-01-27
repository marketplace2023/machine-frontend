import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/dashboard" className="text-xl font-bold text-gray-800">
            Demo App
          </Link>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:bg-gray-100"
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

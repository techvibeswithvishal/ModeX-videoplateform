import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ dark, toggleTheme }: { dark: boolean; toggleTheme: () => void }) {
  const isLoggedIn =
    typeof window !== "undefined" && !!localStorage.getItem("token");

  // Get user role from localStorage (student/instructor)
  const userRole =
    typeof window !== "undefined" ? localStorage.getItem("role") : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/"; // redirect to homepage
  };

  // Determine dashboard link based on role
  const dashboardLink =
    userRole === "instructor" ? "/dashboard/instructor" : "/dashboard/student";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow transition-colors">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Home */}
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          ModeX-video
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          {/* Home button */}
          <Link href="/" className="hover:underline">
            Home
          </Link>

          {/* Courses */}
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>

          {!isLoggedIn ? (
            <>
              {/* Student Auth */}
              <Link href="/auth/student/login" className="hover:underline">
                Student Login
              </Link>
              <Link href="/auth/student/register" className="hover:underline">
                Student Sign Up
              </Link>

              {/* Instructor Auth */}
              <Link href="/auth/instructor/login" className="hover:underline">
                Instructor Login
              </Link>
              <Link href="/auth/instructor/register" className="hover:underline">
                Instructor Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link href={dashboardLink} className="hover:underline">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}

          {/* Theme Toggle */}
          <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
}

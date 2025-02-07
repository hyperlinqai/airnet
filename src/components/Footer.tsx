import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="/auth/login"
            className="text-gray-600 hover:text-blue-600"
          >
            Sign in
          </Link>
          <Link
            href="/auth/register"
            className="text-gray-600 hover:text-blue-600"
          >
            Create account
          </Link>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600"
          >
            Support
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} AirNet360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

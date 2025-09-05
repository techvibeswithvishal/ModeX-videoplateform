export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="container mx-auto text-center text-gray-600">
        &copy; {new Date().getFullYear()}  All rights reserved.
      </div>
    </footer>
  )
}

export default function Footer() {
  return (
    <footer className="bg-text-dark text-bg-light py-6 mt-8">
      <div className="container mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} David Arvidsson. All rights reserved.
      </div>
    </footer>
  );
}
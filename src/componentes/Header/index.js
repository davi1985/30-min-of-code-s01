export function Header({ title }) {
  return (
    <header>
      <div className="max-w-7xl mx-auto pb-6">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      </div>
    </header>
  );
}

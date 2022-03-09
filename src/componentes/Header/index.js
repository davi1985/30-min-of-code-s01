export function Header({ title }) {
  return (
    <header>
      <div className="mx-auto pb-2">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      </div>
    </header>
  );
}

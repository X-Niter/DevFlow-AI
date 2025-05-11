export default function Button({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition"
    >
      {children}
    </button>
  );
}

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search your name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        mb-4
        px-4
        py-2
        border
        rounded
        outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />
  );
}

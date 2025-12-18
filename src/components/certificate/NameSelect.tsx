"use client";

type Participant = {
  name: string;
  rank?: number;
};

type Props = {
  participants: Participant[];
  value: string;
  onChange: (name: string) => void;
};

export default function NameSelect({
  participants,
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded px-3 py-2"
    >
      <option value="">Select your name</option>
      {participants.map((p) => (
        <option key={p.name} value={p.name}>
          {p.name}
        </option>
      ))}
    </select>
  );
}

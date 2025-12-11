interface SectionMarkerProps {
  number: string;
}

export function SectionMarker({ number }: SectionMarkerProps) {
  return (
    <span className="font-mono text-coral text-sm uppercase tracking-widest">
      [{number}]
    </span>
  );
}

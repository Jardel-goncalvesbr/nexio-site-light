import { clientLogos } from "../data/content";

export default function LogosStrip() {
  return (
    <div className="border-y border-borderc bg-sectionBg px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-[0.72rem] uppercase tracking-wide text-muted">
          Empresas que confiam na Nexio Digital
        </p>
        <div className="flex flex-wrap justify-between gap-4">
          {clientLogos.map((name) => (
            <span key={name} className="text-sm font-bold tracking-wide text-muted">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

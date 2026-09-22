import { Icon, icons } from "./Icon";
import type { CardItem } from "../data/content";

interface CardGridProps {
  items: CardItem[];
  cols?: 2 | 3 | 4;
}

export default function CardGrid({ items, cols = 3 }: CardGridProps) {
  const colsClass =
    cols === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : cols === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-5 ${colsClass}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-borderc bg-sectionBg p-6 transition-all hover:-translate-y-1 hover:border-purple hover:shadow-[0_12px_30px_rgba(124,58,237,0.1)]"
        >
          <div className="mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-purple-soft text-purple">
            <Icon path={icons[item.icon as keyof typeof icons]} />
          </div>
          <h3 className="mb-2 text-base font-semibold text-ink">{item.title}</h3>
          <p className="text-sm text-muted">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Card, { CardProps } from './DashboardCard';

export default function SortableCard({ card, columnId }: CardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card.id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? '100' : undefined,
      }}
      {...attributes}
      {...listeners}
    >
      <Card card={card} columnId={columnId} />
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export default function TableSkeleton() {
  return (
    <div className="overflow-hidden  border border-secondary">
      <table className="min-w-full divide-y divide-secondary">
        <thead className="bg-background/35">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-background/50 divide-y divide-secondary">
          {[...Array(4)].map((_, index) => (
            <tr key={index} className="p-2 align-middle">
              <td className="px-6 py-4 whitespace-nowrap">
                <Skeleton className="h-4 w-8" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Skeleton className="h-4 w-24" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                <Skeleton className="h-6 w-6 rounded" />
                <Skeleton className="h-6 w-6 rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

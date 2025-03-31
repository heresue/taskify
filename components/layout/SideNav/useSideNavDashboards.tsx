import { Dashboard, getMyDashboards } from '@/app/(dashboard)/mydashboard/actions';
import { useEffect, useState } from 'react';

export function useSideNavDashboards(itemsPerPage: number) {
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (itemsPerPage <= 0) return;

    async function fetchDashboards() {
      try {
        setLoading(true);
        const response = await getMyDashboards(1, itemsPerPage);
        setDashboards(response.dashboards);
      } catch (err) {
        console.error('sidenav 목록 불러오기 에러:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboards();
  }, [itemsPerPage]);

  return { dashboards, loading, error };
}

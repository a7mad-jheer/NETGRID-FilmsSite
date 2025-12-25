"use client";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

export function PaginationDemo({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)} // <--- هذا الجديد
          />
        </PaginationItem>

        {/* Page numbers */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => goToPage(page)} // <--- هذا الجديد
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)} // <--- هذا الجديد
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

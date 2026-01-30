"use client";

import { useEffect, useState } from "react";
import { searchMovies } from "@/core/utils/api";

// تعريف الأنواع (Types) للـ Props
interface TestProps {
  movieType: string[];
  pageSize: number;
  page: number;
}

// تعريف شكل البيانات المتوقع من API (مثال تقريبي)
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieData {
  results: Movie[];
}

export default function Test({ movieType, pageSize, page }: TestProps) {
  const [data, setData] = useState<Record<string, MovieData>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetching() {
      try {
        const newData: Record<string, MovieData> = {};
        for (const type of movieType) {
          const res = await searchMovies(`movie/${type}`, "", page, pageSize, 0, []);
          newData[type] = res.data; // نفترض API يرجع { results: Movie[] }
        }
        setData(newData);
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    }

    fetching();
  }, [movieType, page, pageSize]);

  // شاشة التحميل
  if (loading) {
    return (
      <div className="bg-white/20 min-w-screen min-h-screen flex items-center justify-center">
        <video autoPlay loop muted width={100} height={100}>
          <source src="/LoadingAnimation.mp4" type="video/mp4" />
          متصفحك لا يدعم الفيديو
        </video>
      </div>
    );
  }

  // بعد انتهاء التحميل
  return (
    <div className="p-4">
      {movieType.map((type) => (
        <div key={type} className="mb-8">
          <h2 className="text-xl font-bold mb-2">{type.toUpperCase()}</h2>
          {data[type]?.results?.length ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data[type].results.map((movie) => (
                <div key={movie.id} className="border p-2 rounded">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full rounded"
                  />
                  <h3 className="mt-2 text-sm font-semibold">{movie.title}</h3>
                </div>
              ))}
            </div>
          ) : (
            <p>لا توجد بيانات لعرضها</p>
          )}
        </div>
      ))}
    </div>
  );
}

"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingEffect from '@/components/LoadingEffect';


interface LoadingContextType {
  setLoading: (loading: boolean) => void;
  loading: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initial page load
    const initialTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(initialTimeout);
  }, []);

  // Handle route changes
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50">
          <LoadingEffect />
        </div>
      )}
      <div className={loading ? 'hidden' : 'block'}>
        {children}
      </div>
    </>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
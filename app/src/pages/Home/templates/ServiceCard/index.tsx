import { ReactNode } from 'react';

interface ServiceCardProps {
  children: ReactNode;
}

export function ServiceCard({ children }: ServiceCardProps) {
  return (
    <>
      <h1>ServiceCard</h1>
      {children}
    </>
  );
}

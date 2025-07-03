"use client"; 

import React from 'react';
import dynamic from 'next/dynamic'; 

const Stack = dynamic(() => import('./Stack'), { ssr: false });

export default function ProjectStackDisplay({ stackItems }) {
  return (
    <div className="max-w-3xl mx-auto"> 
      <Stack items={stackItems} itemHeight={250} gap={30} className="w-full" />
    </div>
  );
}
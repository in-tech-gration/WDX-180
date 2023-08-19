'use client'

import React from "react";

type ITitle = {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6 
}

export default function Title({ children, level = 1 }: ITitle) {

  let fontSize = "text-4xl";
  let fontSizeMD = "text-5xl";
  
  if ( level === 2 ){
    fontSize = "text-3xl";
    fontSizeMD = "text-4xl";
  }
  if ( level === 3 ){
    fontSize = "text-2xl";
    fontSizeMD = "text-3xl";
  }
  if ( level === 4 ){
    fontSize = "text-xl";
    fontSizeMD = "text-2xl";
  }
  if ( level === 5 ){
    fontSize = "text-lg";
    fontSizeMD = "text-xl";
  }
  if ( level === 6 ){
    fontSize = "text-base";
    fontSizeMD = "text-lg";
  }

  const headingElement = React.createElement(
    `h${level}`,
    {
      className: `${fontSize} md:${fontSizeMD} text-slate-800 dark:text-slate-100 font-bold`,
    },
    children
  );

  return (
    <div className="my-4">
      { headingElement }
    </div>
  )
}
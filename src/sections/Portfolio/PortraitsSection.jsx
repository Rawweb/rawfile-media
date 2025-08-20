import React from 'react'
import PortfolioGrid from '@components/ui/PortfolioGrid';

import portfolio from '@assets/portfolio.jpg';
import portfolio1 from '@assets/portfolio-1.jpg';
import portfolio3 from '@assets/portfolio-3.jpg';
import portfolio4 from '@assets/portfolio-4.jpg';

const projects = [
  { name: 'Faces of Resilience', date: 'March 2022', image: portfolio },
  { name: 'A Wedding Tale', date: 'April 2025', image: portfolio1 },
  { name: 'Product Elegance', date: 'January 2020', image: portfolio3 },
  { name: 'Urban Exploration', date: 'September 2021', image: portfolio4 },
];

const PortraitsSection = () => {
  return (
    <div>
      <PortfolioGrid className='border-t border-b border-dark-midLight'
        title="Portraits"
        subtitle="A collection of stunning portraits"
        projects={projects}
      />
    </div>
  )
}

export default PortraitsSection
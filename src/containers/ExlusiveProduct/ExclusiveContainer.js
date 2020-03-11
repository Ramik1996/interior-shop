import React from 'react';
import dataExclusive from '../../constant/dataExclusive';
import ExclusiveComponent from '../../components/ExclusiveProduct/ExclusiveComponent';

function ExclusiveContainer() {
  const exclusiveProduct = dataExclusive.map(product => {
    return (
      <ExclusiveComponent 
        key={product.id}
        name={product.name}
        imgUrl={product.urlImg}
        header={product.header}
        description={product.description}
      />
    )
  })
  return (
    <div className="exclusive-all">
      {exclusiveProduct}
    </div>
  )
}

export default ExclusiveContainer;
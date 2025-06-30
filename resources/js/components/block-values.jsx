import React from 'react';

export default function BlockValues({ values = [] }) {
  return (
    <div className="block-values">
      <div className="container mx-auto">
        <div className="row">
          {values.map((value, index) => (
            <div key={index} className="col-lg-4 col-md-12 col-sm-12">
              <div className="block-value">
                <h2 className="block-title">{value.title}</h2>
                <div className="block-description">
                  <p>{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
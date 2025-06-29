import React from 'react';

export default function BlockValues() {
  return (
    <div className="block-values">
        <div className="container mx-auto">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="block-value">
                        <h2 className="block-title">Programador Web y Multiplataforma</h2>
                        <div className="block-description">
                           <p>
                            Mi portfolio de proyectos web:{" "}
                                <a href="https://github.com/IvanArasco" target="_blank">
                                    https://github.com/IvanArasco
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="block-value">
                        <h2 className="block-title">Conocimientos técnicos</h2>
                        <div className="block-description">
                            <p>
                            PHP, Java, C#, React, Javascript.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="block-value">
                        <h2 className="block-title">Hago realidad la web de tus sueños</h2>
                        <div className="block-description">
                            <p>
                                O eso intento.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

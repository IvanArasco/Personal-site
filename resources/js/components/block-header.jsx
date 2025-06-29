import React from 'react';

export default function Header() {
  return (
    <div className="block-header">
        <div className="container mx-auto">
            <div class="block-in-wrapper">
                <h1 class="block-title">Mi sitio personal</h1>
                <div class="block-description">
                    <p>
                        Soy Iván, desarrollador web y multiplataforma. 
                        Este proyecto es un portfolio autobiográfico hecho con Laravel 
                        y React con la librería Material.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

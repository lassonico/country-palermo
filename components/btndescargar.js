'use client'
import { useState, useEffect } from 'react';

function Boton() {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const isPwaInstalled = () => {
      if ('getInstalledRelatedApps' in window.navigator) {
        window.navigator.getInstalledRelatedApps()
          .then(relatedApps => {
            // Si hay aplicaciones relacionadas instaladas, se considera que la PWA está instalada
            setIsInstalled(relatedApps.length > 0);
          })
          .catch(error => {
            console.log('Error al obtener aplicaciones relacionadas:', error);
          });
      }
    };

    isPwaInstalled();
  }, []);

  const handleDownload = () => {
    window.location.href = '/';
  };

  return (
    <div>
      {!isInstalled && <button onClick={handleDownload} className="bg-[#EEB81D] py-2 px-6 block mx-auto text-white rounded">Descargar App</button>}
    </div>
  );
}

export default Boton;
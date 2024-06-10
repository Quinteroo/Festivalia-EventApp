

export const links = () => {
  // nos aseguramos que las ventanas abiertas por enlaces no se superponen a nuestra app
  const enlaces = document.querySelectorAll('a');

  enlaces.forEach(enlace => {
    enlace.setAttribute('target', '_blank');
  });

}
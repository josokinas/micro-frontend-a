(async () => {
  await import('./index');
  document.body.appendChild(window.MFE.A.root);
  window.MFE.A.render();
})();

const handleProjectMasc = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('project__insight-mask_deactivate')
    }
  });
}
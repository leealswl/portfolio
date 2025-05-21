export function scrollToSection(sectionId, offset = 0) {
 const el = document.getElementById(sectionId);
 if (!el) return;
 
 const top = el.getBoundingClientRect().top + window.pageYOffset - offset;

 window.scrollTo({
   top,
   behavior: 'smooth',
 });
}
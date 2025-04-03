const blockFixed = (selector, direction) => {
  const el = document.querySelector(selector);

  if (!el) return;

  const elHeight = el.offsetHeight;
  const elWidth = el.offsetWidth;

  switch (direction) {
    case 'top':
      document.body.style.paddingTop = `${elHeight}px`;
      break;
    case 'bottom':
      document.body.style.paddingBottom = `${elHeight}px`;
      break;
    case 'left':
      document.body.style.paddingLeft = `${elWidth}px`;
      break;
    case 'right':
      document.body.style.paddingRight = `${elWidth}px`;
      break;
  }
};

// blockFixed('.선택자', '위치');
// 예시 : blockFixed('.btn-group.fixed', 'bottom');
// 예시 : blockFixed('.header', 'top');
blockFixed('.btn-group.fixed', 'bottom');

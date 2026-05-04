document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.querySelector('.profile-card');
    
    // わずかな遅延の後に表示を開始
    setTimeout(() => {
        profileCard.classList.add('visible');
    }, 100);

    // 趣味のアイテムに順次アニメーションを適用する演出（オプション）
    const hobbyItems = document.querySelectorAll('.hobby-item');
    hobbyItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        item.style.transition = `opacity 0.5s ease ${0.5 + index * 0.1}s, transform 0.5s ease ${0.5 + index * 0.1}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    });
});

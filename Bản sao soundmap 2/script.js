// Gắn âm thanh tương ứng (.m4a vẫn chạy được nha)
const sounds = {
  icon1: new Audio('sound1.m4a'),
  icon2: new Audio('sound2.m4a'),
  icon3: new Audio('sound3.m4a'),
};

// Lặp qua từng icon và gắn sự kiện click
Object.keys(sounds).forEach(id => {
  const icon = document.getElementById(id);
  const audio = sounds[id];

  icon.addEventListener('click', () => {
    // Nếu đang phát âm thanh này thì dừng
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
      icon.classList.remove('playing');
      return;
    }

    // Dừng tất cả âm thanh khác
    Object.keys(sounds).forEach(otherId => {
      sounds[otherId].pause();
      sounds[otherId].currentTime = 0;
      document.getElementById(otherId).classList.remove('playing');
    });

    // Phát âm thanh được chọn
    audio.play();
    icon.classList.add('playing');
  });

  // Khi âm thanh phát xong, tắt hiệu ứng sáng
  audio.addEventListener('ended', () => {
    icon.classList.remove('playing');
  });
});
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 10
});

var bounds = [[0,0], [1000,1000]]; // kích thước ảnh
var image = L.imageOverlay('map.png', bounds).addTo(map);

map.fitBounds(bounds);
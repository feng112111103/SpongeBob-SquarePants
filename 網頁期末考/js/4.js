// 顯示下一幕場景
function showNextScene(sceneNumber) {
    const currentScene = document.querySelector('.story-section:not(.hidden)');
    const nextScene = document.getElementById(`scene${sceneNumber}`);
  
    // 隱藏當前場景
    currentScene.classList.add('hidden');
  
    // 顯示下一個場景
    nextScene.classList.remove('hidden');
  }
  
  // 重新開始故事
  function restartStory() {
    const scenes = document.querySelectorAll('.story-section');
    scenes.forEach((scene, index) => {
      scene.classList.add('hidden');
      if (index === 0) {
        scene.classList.remove('hidden');
      }
    });
  }
  
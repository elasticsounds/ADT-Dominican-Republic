var storagePrefix = 'sl-book-storage'

var isPlaying = window.localStorage.getItem(storagePrefix + '/playing') === '1'
var isMaximized = window.localStorage.getItem(storagePrefix + '/maximized') === '1'

function enableControls (trigger, container) {
  var maximize = document.createElement('div')
  maximize.className = 'sl-maximize'
  maximize.style = 'position: absolute; margin: -48px 0 0 -48px;'
  maximize.innerHTML = '<img src="images/up-right-and-down-left-from-center-solid.svg" width="32" height="32" />'
  maximize.addEventListener('click', function (e) {
    e.stopPropagation()
	 if (isMaximized) {
      container.classList.remove('is-maximized')
      isMaximized = false
      window.localStorage.removeItem(storagePrefix + '/maximized')
    } else {
      container.classList.add('is-maximized')
      isMaximized = true
      window.localStorage.setItem(storagePrefix + '/maximized', '1')
    }
  })
  trigger.appendChild(maximize)

  var play = document.createElement('div')
  play.className = 'sl-play'
  play.style = 'position: absolute; margin: -48px 0 0 -96px;'
  play.innerHTML = '<img src="images/play-pause-solid.svg" width="32" height="32" />'
  play.addEventListener('click', function (e) {
    e.stopPropagation()
	 //window.localStorage.setItem("currentvideo", '.sl-video1');
	 var myvideo=localStorage.getItem("currentvideo")
    //var videoEls = container.querySelectorAll('.sl-video')
	var videoEls = container.querySelectorAll(myvideo)
	for (var i = 0; i < videoEls.length; i++) {
      if (videoEls[i].style.display == 'block') {
        var player = videojs(videoEls[i].querySelector('video'))
        if (player.paused()) {
          player.play()
        } else {
          player.pause()
        }
        break
      }
    }
  })
  trigger.appendChild(play)
}

function disableControls (trigger) {
  trigger.querySelector('.sl-maximize').remove()
  trigger.querySelector('.sl-play').remove()
}

window.addEventListener('DOMContentLoaded', function () {
  //var trigger = document.querySelector('.sl-trigger')
  //var container = document.querySelector('.sl-video-container')
  
	var trigger = document.querySelector('.sl-trigger1')
	var container = document.querySelector('.sl-video-container1')
	var trigger2 = document.querySelector('.sl-trigger2')
	var container2 = document.querySelector('.sl-video-container2')
	var trigger3 = document.querySelector('.sl-trigger3')
	var container3 = document.querySelector('.sl-video-container3')
	var trigger4 = document.querySelector('.sl-trigger4')
	var container4 = document.querySelector('.sl-video-container4')
	var trigger5 = document.querySelector('.sl-trigger5')
	var container5 = document.querySelector('.sl-video-container5')
	var trigger6 = document.querySelector('.sl-trigger6')
	var container6 = document.querySelector('.sl-video-container6')
	var trigger7 = document.querySelector('.sl-trigger7')
	var container7 = document.querySelector('.sl-video-container7')
	var trigger8 = document.querySelector('.sl-trigger8')
	var container8 = document.querySelector('.sl-video-container8')
	var trigger9 = document.querySelector('.sl-trigger9')
	var container9 = document.querySelector('.sl-video-container9')
	
 
	container.style.pointerEvents = 'none';
	container2.style.pointerEvents = 'none';
	container3.style.pointerEvents = 'none';
	container4.style.pointerEvents = 'none';
	container5.style.pointerEvents = 'none';
	container6.style.pointerEvents = 'none';
	container7.style.pointerEvents = 'none';
	container8.style.pointerEvents = 'none';
	container9.style.pointerEvents = 'none';
	
	//video2	
	container2.style.display = 'block'
    var videoEl = container2.querySelectorAll('.sl-video2')[0]
    videojs(videoEl.querySelector('video')).play()
    videoEl.style.display = 'block'
    enableControls(trigger2, container2)
    isPlaying = true
    window.localStorage.setItem(storagePrefix + '/playing', '1')

    disableControls(trigger2)
    container2.style.display = 'none'
    Array.prototype.forEach.call(container2.querySelectorAll('.sl-video2'), function (videoEl) {
		videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
    })

    isPlaying = false
    window.localStorage.removeItem(storagePrefix + '/playing')
	
	//video3
	container3.style.display = 'block'
    var videoEl = container3.querySelectorAll('.sl-video3')[0]
    videojs(videoEl.querySelector('video')).play()
    videoEl.style.display = 'block'
    enableControls(trigger3, container3)
    isPlaying = true
    window.localStorage.setItem(storagePrefix + '/playing', '1')

    disableControls(trigger3)
    container3.style.display = 'none'
    Array.prototype.forEach.call(container3.querySelectorAll('.sl-video3'), function (videoEl) {
		videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
    })
    isPlaying = false
    window.localStorage.removeItem(storagePrefix + '/playing')
	  
	//video4
	container4.style.display = 'block'
    var videoEl = container4.querySelectorAll('.sl-video4')[0]
    videojs(videoEl.querySelector('video')).play()
    videoEl.style.display = 'block'
    enableControls(trigger4, container4)
    isPlaying = true
    window.localStorage.setItem(storagePrefix + '/playing', '1')

    disableControls(trigger4)
    container4.style.display = 'none'
    Array.prototype.forEach.call(container4.querySelectorAll('.sl-video4'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
    })
    isPlaying = false
    window.localStorage.removeItem(storagePrefix + '/playing')


	//video5
	container5.style.display = 'block'
    var videoEl = container5.querySelectorAll('.sl-video5')[0]
    videojs(videoEl.querySelector('video')).play()
    videoEl.style.display = 'block'
    enableControls(trigger5, container5)
    isPlaying = true
    window.localStorage.setItem(storagePrefix + '/playing', '1')

    disableControls(trigger5)
    container5.style.display = 'none'
    Array.prototype.forEach.call(container5.querySelectorAll('.sl-video5'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
    })
    isPlaying = false
    window.localStorage.removeItem(storagePrefix + '/playing')
	  
	//video6
	container6.style.display = 'block'
    var videoEl = container6.querySelectorAll('.sl-video6')[0]
    videojs(videoEl.querySelector('video')).play()
    videoEl.style.display = 'block'
    enableControls(trigger6, container6)
    isPlaying = true
    window.localStorage.setItem(storagePrefix + '/playing', '1')

    disableControls(trigger6)
    container6.style.display = 'none'
    Array.prototype.forEach.call(container6.querySelectorAll('.sl-video6'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
    })
    isPlaying = false
    window.localStorage.removeItem(storagePrefix + '/playing')

	//video7
	container7.style.display = 'block'
    var videoEl = container7.querySelectorAll('.sl-video7')[0]
    videojs(videoEl.querySelector('video')).play()
    videoEl.style.display = 'block'
    enableControls(trigger7, container7)
    isPlaying = true
    window.localStorage.setItem(storagePrefix + '/playing', '1')

    disableControls(trigger7)
    container7.style.display = 'none'
    Array.prototype.forEach.call(container7.querySelectorAll('.sl-video7'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
    })
    isPlaying = false
    window.localStorage.removeItem(storagePrefix + '/playing')


	//video8
	container8.style.display = 'block'
    var videoEl = container8.querySelectorAll('.sl-video8')[0]
    videojs(videoEl.querySelector('video')).play()
    videoEl.style.display = 'block'
    enableControls(trigger8, container8)
    isPlaying = true
    window.localStorage.setItem(storagePrefix + '/playing', '1')

    disableControls(trigger8)
    container8.style.display = 'none'
    Array.prototype.forEach.call(container8.querySelectorAll('.sl-video8'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
    })
    isPlaying = false
    window.localStorage.removeItem(storagePrefix + '/playing')
	  
	//video9
	container9.style.display = 'block'
    var videoEl = container9.querySelectorAll('.sl-video9')[0]
    videojs(videoEl.querySelector('video')).play()
    videoEl.style.display = 'block'
    enableControls(trigger9, container9)
    isPlaying = true
    window.localStorage.setItem(storagePrefix + '/playing', '1')

    disableControls(trigger9)
    container9.style.display = 'none'
    Array.prototype.forEach.call(container9.querySelectorAll('.sl-video9'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
    })
    isPlaying = false
    window.localStorage.removeItem(storagePrefix + '/playing')
	  
	  
	  
  if (isMaximized) {
    container.classList.add('is-maximized')
    container2.classList.add('is-maximized')
    container3.classList.add('is-maximized')
    container4.classList.add('is-maximized')
    container5.classList.add('is-maximized')
    container6.classList.add('is-maximized')
    container7.classList.add('is-maximized')
    container8.classList.add('is-maximized')
    container9.classList.add('is-maximized')
  }

  if (isPlaying) {
    container.style.display = 'block'
    var videoEl = container.querySelectorAll('.sl-video1')[0]
    setTimeout(function () {
      videojs(videoEl.querySelector('video')).play()
    }, 200)
    videoEl.style.display = 'block'
    enableControls(trigger, container)
  }

  trigger.addEventListener('click', function () {
    if (!isPlaying) {
      container.style.display = 'block'
      var videoEl = container.querySelectorAll('.sl-video1')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger, container)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
	  window.localStorage.setItem("currentvideo", '.sl-video1');
    } else {
      disableControls(trigger)
      container.style.display = 'none'
      Array.prototype.forEach.call(container.querySelectorAll('.sl-video1'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
    }
  })
  
  trigger2.addEventListener('click', function () {
	if (!isPlaying) {
      container2.style.display = 'block'
      var videoEl = container2.querySelectorAll('.sl-video2')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger2, container2)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
	   window.localStorage.setItem("currentvideo", '.sl-video2');
    } else {
      disableControls(trigger2)
      container2.style.display = 'none'
      Array.prototype.forEach.call(container2.querySelectorAll('.sl-video2'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
    }
  })
  
  trigger3.addEventListener('click', function () {
    if (!isPlaying) {
      container3.style.display = 'block'
      var videoEl = container3.querySelectorAll('.sl-video3')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger3, container3)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
	   window.localStorage.setItem("currentvideo", '.sl-video3');
    } else {
      disableControls(trigger3)
      container3.style.display = 'none'
      Array.prototype.forEach.call(container3.querySelectorAll('.sl-video3'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
    }
  })
  
  trigger4.addEventListener('click', function () {
    if (!isPlaying) {
      container4.style.display = 'block'
      var videoEl = container4.querySelectorAll('.sl-video4')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger4, container4)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
	   window.localStorage.setItem("currentvideo", '.sl-video4');
    } else {
      disableControls(trigger4)
      container4.style.display = 'none'
      Array.prototype.forEach.call(container4.querySelectorAll('.sl-video4'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
    }
  })
  
  trigger5.addEventListener('click', function () {
    if (!isPlaying) {
      container5.style.display = 'block'
      var videoEl = container5.querySelectorAll('.sl-video5')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger5, container5)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
	   window.localStorage.setItem("currentvideo", '.sl-video5');
    } else {
      disableControls(trigger5)
      container5.style.display = 'none'
      Array.prototype.forEach.call(container5.querySelectorAll('.sl-video5'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
    }
  })
  
  trigger6.addEventListener('click', function () {
    if (!isPlaying) {
      container6.style.display = 'block'
      var videoEl = container6.querySelectorAll('.sl-video6')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger6, container6)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
	   window.localStorage.setItem("currentvideo", '.sl-video6');
    } else {
      disableControls(trigger6)
      container6.style.display = 'none'
      Array.prototype.forEach.call(container6.querySelectorAll('.sl-video6'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
    }
  })
  
  trigger7.addEventListener('click', function () {
    if (!isPlaying) {
      container7.style.display = 'block'
      var videoEl = container7.querySelectorAll('.sl-video7')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger7, container7)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
	   window.localStorage.setItem("currentvideo", '.sl-video7');
    } else {
      disableControls(trigger7)
      container7.style.display = 'none'
      Array.prototype.forEach.call(container7.querySelectorAll('.sl-video7'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
    }
  })
  
  trigger8.addEventListener('click', function () {
    if (!isPlaying) {
      container8.style.display = 'block'
      var videoEl = container8.querySelectorAll('.sl-video8')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger8, container8)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
	   window.localStorage.setItem("currentvideo", '.sl-video8');
    } else {
      disableControls(trigger8)
      container8.style.display = 'none'
      Array.prototype.forEach.call(container8.querySelectorAll('.sl-video8'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
    }
  })
  
  trigger9.addEventListener('click', function () {

  if (!isPlaying) {
     container9.style.display = 'block'
      var videoEl = container9.querySelectorAll('.sl-video9')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger9, container9)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
	   window.localStorage.setItem("currentvideo", '.sl-video9');
    } else {
      disableControls(trigger9)
      container9.style.display = 'none'
      Array.prototype.forEach.call(container9.querySelectorAll('.sl-video9'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
    }
  })

  Array.prototype.forEach.call(container.querySelectorAll('.sl-video1'), function (videoEl) {
		videojs(videoEl.querySelector('video')).on('ended', function () {
      var nextEl = videoEl.nextElementSibling
      if (nextEl != null) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).currentTime(0)
        videojs(nextEl.querySelector('video')).play()
        nextEl.style.display = 'block'
      }
    })

    videoEl.addEventListener('touchstart', function () {
      var player = videojs(videoEl.querySelector('video'))
      if (player.paused()) {
        player.play()
      } else {
        player.pause()
      }
    })
  });
  
  Array.prototype.forEach.call(container.querySelectorAll('.sl-video2'), function (videoEl) {
		videojs(videoEl.querySelector('video')).on('ended', function () {
      var nextEl = videoEl.nextElementSibling
      if (nextEl != null) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).currentTime(0)
        videojs(nextEl.querySelector('video')).play()
        nextEl.style.display = 'block'
      }
    })

    videoEl.addEventListener('touchstart', function () {
      var player = videojs(videoEl.querySelector('video'))
      if (player.paused()) {
        player.play()
      } else {
        player.pause()
      }
    })
  });
  
  Array.prototype.forEach.call(container.querySelectorAll('.sl-video3'), function (videoEl) {
		videojs(videoEl.querySelector('video')).on('ended', function () {
      var nextEl = videoEl.nextElementSibling
      if (nextEl != null) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).currentTime(0)
        videojs(nextEl.querySelector('video')).play()
        nextEl.style.display = 'block'
      }
    })

    videoEl.addEventListener('touchstart', function () {
      var player = videojs(videoEl.querySelector('video'))
      if (player.paused()) {
        player.play()
      } else {
        player.pause()
      }
    })
  });
  
  Array.prototype.forEach.call(container.querySelectorAll('.sl-video4'), function (videoEl) {
		videojs(videoEl.querySelector('video')).on('ended', function () {
      var nextEl = videoEl.nextElementSibling
      if (nextEl != null) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).currentTime(0)
        videojs(nextEl.querySelector('video')).play()
        nextEl.style.display = 'block'
      }
    })

    videoEl.addEventListener('touchstart', function () {
      var player = videojs(videoEl.querySelector('video'))
      if (player.paused()) {
        player.play()
      } else {
        player.pause()
      }
    })
  });
  
  Array.prototype.forEach.call(container.querySelectorAll('.sl-video5'), function (videoEl) {
		videojs(videoEl.querySelector('video')).on('ended', function () {
      var nextEl = videoEl.nextElementSibling
      if (nextEl != null) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).currentTime(0)
        videojs(nextEl.querySelector('video')).play()
        nextEl.style.display = 'block'
      }
    })

    videoEl.addEventListener('touchstart', function () {
      var player = videojs(videoEl.querySelector('video'))
      if (player.paused()) {
        player.play()
      } else {
        player.pause()
      }
    })
  });
  
  Array.prototype.forEach.call(container.querySelectorAll('.sl-video6'), function (videoEl) {
		videojs(videoEl.querySelector('video')).on('ended', function () {
      var nextEl = videoEl.nextElementSibling
      if (nextEl != null) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).currentTime(0)
        videojs(nextEl.querySelector('video')).play()
        nextEl.style.display = 'block'
      }
    })

    videoEl.addEventListener('touchstart', function () {
      var player = videojs(videoEl.querySelector('video'))
      if (player.paused()) {
        player.play()
      } else {
        player.pause()
      }
    })
  });
  
  Array.prototype.forEach.call(container.querySelectorAll('.sl-video7'), function (videoEl) {
		videojs(videoEl.querySelector('video')).on('ended', function () {
      var nextEl = videoEl.nextElementSibling
      if (nextEl != null) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).currentTime(0)
        videojs(nextEl.querySelector('video')).play()
        nextEl.style.display = 'block'
      }
    })

    videoEl.addEventListener('touchstart', function () {
      var player = videojs(videoEl.querySelector('video'))
      if (player.paused()) {
        player.play()
      } else {
        player.pause()
      }
    })
  });
  
  Array.prototype.forEach.call(container.querySelectorAll('.sl-video8'), function (videoEl) {
		videojs(videoEl.querySelector('video')).on('ended', function () {
      var nextEl = videoEl.nextElementSibling
      if (nextEl != null) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).currentTime(0)
        videojs(nextEl.querySelector('video')).play()
        nextEl.style.display = 'block'
      }
    })

    videoEl.addEventListener('touchstart', function () {
      var player = videojs(videoEl.querySelector('video'))
      if (player.paused()) {
        player.play()
      } else {
        player.pause()
      }
    })
  });
  
  Array.prototype.forEach.call(container.querySelectorAll('.sl-video9'), function (videoEl) {
		videojs(videoEl.querySelector('video')).on('ended', function () {
      var nextEl = videoEl.nextElementSibling
      if (nextEl != null) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).currentTime(0)
        videojs(nextEl.querySelector('video')).play()
        nextEl.style.display = 'block'
      }
    })

    videoEl.addEventListener('touchstart', function () {
      var player = videojs(videoEl.querySelector('video'))
      if (player.paused()) {
        player.play()
      } else {
        player.pause()
      }
    })
  });
})

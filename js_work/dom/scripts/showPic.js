function showPic(obj) {
  // 클릭한 a 태그의 href 속성 값이 들어감
  const source = obj.getAttribute('href');
  // 이미지 태그
  const placeholder = document.getElementById('placeholder');
  placeholder.setAttribute('src', source);
  
  // 클릭한 title 값 가져오기
  const text = obj.getAttribute('title');
  // description은 p 태그
  const description = document.getElementById('description');
  // 통채로 넣고 덮어쓰기
  // description.innerHTML = text;
  
  if(description.firstChild.nodeType === 3) {
    description.firstChild.nodeValue = text;
  }
  // 뒤에 계속 붙여서 추가
  // description.insertAdjacentElement('beforeend', text);
}

function prepareGallery() {
  const imagegallery = document.getElementById('imagegallery');
  const links = imagegallery.getElementsByTagName('a');

  for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e){
      // a href 기능을 취소
      e.preventDefault();
      showPic(this);
    }, false);
  }
}

window.onload = prepareGallery

// e.preventDefault() // 기본 이벤트 취소
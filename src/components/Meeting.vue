<template>
  <section class="meeting">
    <div class="container">
      <div class="meeting__container">
        <div class="meeting__info-block">
          <p class="meeting__paragraph">Hello world ... I am</p>
          <h1 class="meeting__header">Гарбузов Владимир</h1>
          <p class="meeting__profession-name"> > Front-end developer</p>
          <ul class="meeting__comments-list">
            <li class="meeting__comments-item">// выгляжу на фото как инфоцыган</li>
            <li class="meeting__comments-item">// не представляю жизнь без кофе</li>
            <li class="meeting__comments-item meeting__comments-item--variable">
              <span class="meeting__comments-item-span-var">const githubLink</span> = <a href="https://github.com/Vladimir2011" target="_blank" class="meeting__comments-item-span-link">"https://github.com/Vladimir2011"</a>
            </li>
          </ul>
          <a href="https://disk.yandex.ru/i/pg0iiJT-NUSkew" download target="_blank" class="meeting__button btn">Скачать резюме</a>
        </div>
        <div class="meeting__image-container">
          <img src="@/static/photo.png" alt="photo" class="meeting_image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
